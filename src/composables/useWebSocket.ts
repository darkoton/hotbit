import { ref, onMounted, onUnmounted } from 'vue';

export interface WalletData {
  coin_id: string;
  balance: number;
  usd?: number;
}

export interface PriceUpdate {
  coin: string;
  price: number;
}

const WS_URL = 'wss://freeruporlabs.online:2813';

export function useWebSocket(
  onPriceUpdate: (update: PriceUpdate) => void
) {
  const socket = ref<WebSocket | null>(null);
  const isConnected = ref(false);
  const lastPrices = ref<Record<string, number>>({});

  const connect = () => {
    try {
      socket.value = new WebSocket(WS_URL);

      socket.value.onopen = () => {
        console.log('WebSocket connected');
        isConnected.value = true;
      };

      socket.value.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === 'active_bets' && data.coin && data.price) {
            const coin = data.coin.toUpperCase();
            const price = parseFloat(data.price);
            lastPrices.value[coin] = price;

            onPriceUpdate({
              coin,
              price,
            });
          }
        } catch (err) {
          console.error('Error parsing WebSocket data:', err);
        }
      };

      socket.value.onerror = (err) => {
        console.error('WebSocket error:', err);
        isConnected.value = false;
      };

      socket.value.onclose = () => {
        console.warn('WebSocket closed');
        isConnected.value = false;
        // Автоматичне переподключення через 3 секунди
        setTimeout(() => {
          if (!isConnected.value) {
            connect();
          }
        }, 3000);
      };
    } catch (err) {
      console.error('Failed to create WebSocket:', err);
    }
  };

  const disconnect = () => {
    if (socket.value) {
      socket.value.close();
      socket.value = null;
      isConnected.value = false;
    }
  };

  onMounted(() => {
    connect();
  });

  onUnmounted(() => {
    disconnect();
  });

  return {
    isConnected,
    lastPrices,
    connect,
    disconnect,
  };
}










