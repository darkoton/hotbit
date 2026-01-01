# Інтеграція Vue з Laravel для гаманців

## Як передати дані про гаманці та користувача з Laravel в Vue

### Передача даних через data-атрибути (рекомендовано)

```blade
<div 
    id="app-header" 
    data-wallets='@json($wallets->map(function($wallet) {
        return [
            'coin_id' => strtoupper($wallet->coin_id),
            'balance' => (float) $wallet->balance,
        ];
    }))'
    data-user='@json([
        'avatar' => $user->avatar ?? null,
        // інші дані користувача
    ])'
></div>

<script type="module" src="{{ asset('assets/frontend-app/header.js') }}"></script>
```

**Важливо:** Vue компонент автоматично отримує дані з `data-wallets` та `data-user` атрибутів і передає їх як props.

## Повний приклад Blade шаблону

```blade
<!DOCTYPE html>
<html>
<head>
    <title>Your Page</title>
    <!-- Ваші стилі та мета-теги -->
</head>
<body>
    <div id="wallet-list" class="container mt-4">
        <h5 class="text-center mb-3">Your Wallets</h5>

        @forelse($wallets as $wallet)
            <div class="wallet-card" data-coin="{{ strtoupper($wallet->coin_id) }}">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <div class="wallet-symbol">{{ strtoupper($wallet->coin_id) }}</div>
                    </div>
                    <div>
                        <div class="wallet-balance" id="balance-{{ strtolower($wallet->coin_id) }}">
                            {{ number_format($wallet->balance, 6, '.', '') }}
                        </div>
                        <div class="wallet-usd text-muted" id="usd-{{ strtolower($wallet->coin_id) }}">
                            $0.00
                        </div>
                    </div>
                </div>
            </div>
        @empty
            <p class="text-center text-muted">No wallets have been created yet.</p>
        @endforelse
    </div>

    <!-- Підключаємо зібраний Vue з даними через data-атрибут -->
    <div id="app-header" data-wallets='@json($wallets->map(function($wallet) {
        return [
            'coin_id' => strtoupper($wallet->coin_id),
            'balance' => (float) $wallet->balance,
        ];
    }))'></div>
    <script type="module" src="{{ asset('assets/frontend-app/header.js') }}"></script>

    <div class="text-center mt-3">
        <button id="openWalletPage" class="btn btn-primary">
            Open Wallet
        </button>
    </div>

    <script>
        document.getElementById('openWalletPage').addEventListener('click', () => {
            const walletDiv = document.getElementById('app-wallet-page');
            if (!walletDiv) return;
            
            if (walletDiv.style.display === 'none') {
                walletDiv.style.display = 'block';
            } else {
                walletDiv.style.display = 'none';
            }
        });
    </script>
</body>
</html>
```

## Структура даних

### Wallets (гаманці)

Vue очікує дані у форматі JSON в `data-wallets`:

```javascript
[
    {
        coin_id: 'BTC',  // або coinId
        balance: 0.123456
    },
    {
        coin_id: 'USDC',
        balance: 100.5
    },
    // ... інші гаманці
]
```

**Важливо:** 
- `coin_id` або `coinId` може бути в будь-якому регістрі (BTC, btc, Btc) - Vue автоматично конвертує в верхній регістр
- `balance` має бути числом (float)
- Підтримуються всі токени з API `/telegram-app/ccpayment/api/get-supported-tokens`

### User (користувач)

Vue очікує дані у форматі JSON в `data-user`:

```javascript
{
    avatar: '/path/to/avatar.png',  // URL аватара користувача
    // інші дані користувача (опціонально)
}
```

Якщо `avatar` не вказано, використовується значення за замовчуванням `/imgs/avatar.png`.

## Підтримувані токени

Vue компонент **динамічно** отримує список підтримуваних токенів з API:
- **Endpoint:** `/telegram-app/ccpayment/api/get-supported-tokens`
- **Метод:** GET
- **Формат відповіді:**
```json
{
  "success": true,
  "tokens": [
    {
      "coinId": 1282,
      "symbol": "USDC",
      "coinFullName": "USD Coin",
      "logoUrl": "https://resource.ccpayment.com/token/icon/usdc.png",
      "status": "Normal",
      "networks": { ... }
    }
  ]
}
```

Компонент автоматично:
- Завантажує список токенів при ініціалізації
- Використовує `logoUrl` для відображення іконок токенів
- Підтримує всі токени, які повертає API
- Якщо токен не знайдено в API, використовується іконка BTC за замовчуванням

## WebSocket

Vue компонент автоматично підключається до WebSocket за адресою `wss://freeruporlabs.online:2813` і оновлює ціни в реальному часі.

WebSocket очікує повідомлення у форматі:
```json
{
    "type": "active_bets",
    "coin": "btc",
    "price": "45000.50"
}
```

При отриманні оновлення ціни:
- Автоматично перераховується баланс в USD для відповідного токену
- Оновлюються всі відображені баланси
- Оновлюються DOM елементи (`#balance-{coin_id}`, `#usd-{coin_id}`) для сумісності зі старим кодом

## Логотип

Логотип встановлено на `/telegram-app/assets/logohotbit.svg`. Якщо потрібно змінити, оновіть `src` атрибут в компоненті Header.










