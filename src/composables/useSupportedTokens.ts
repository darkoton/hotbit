import { ref, onMounted } from 'vue';

export interface TokenNetwork {
  chain: string;
  chainFullName: string;
  contract: string;
  precision: number;
  canDeposit: boolean;
  canWithdraw: boolean;
  minimumDepositAmount: string;
  minimumWithdrawAmount: string;
  maximumWithdrawAmount: string;
  isSupportMemo: boolean;
}

export interface SupportedToken {
  coinId: number;
  symbol: string;
  coinFullName: string;
  logoUrl: string;
  status: string;
  networks: Record<string, TokenNetwork>;
}

export interface TokensResponse {
  success: boolean;
  tokens: SupportedToken[];
}

const API_URL = '/telegram-app/ccpayment/api/get-supported-tokens';

export function useSupportedTokens() {
  const tokens = ref<SupportedToken[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchTokens = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: TokensResponse = await response.json();

      if (data.success && Array.isArray(data.tokens)) {
        tokens.value = data.tokens;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.error('Error fetching supported tokens:', err);
      error.value = err instanceof Error ? err.message : 'Failed to fetch tokens';
    } finally {
      loading.value = false;
    }
  };

  const getTokenBySymbol = (symbol: string): SupportedToken | undefined => {
    return tokens.value.find(
      (token) => token.symbol.toUpperCase() === symbol.toUpperCase()
    );
  };

  onMounted(() => {
    fetchTokens();
  });

  return {
    tokens,
    loading,
    error,
    fetchTokens,
    getTokenBySymbol,
  };
}










