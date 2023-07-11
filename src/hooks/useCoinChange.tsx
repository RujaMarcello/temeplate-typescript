import { useState } from 'react';

interface CoinChangeResult {
  count: number;
  coinCounts: { [key: number]: number };
}

const useCoinChange = (amount: number) => {
  const coins: number[] = [1, 5, 10, 20, 50, 100, 500];
  const [result, setResult] = useState<CoinChangeResult | null>(null);

  const calculateCoinChange = () => {
    const minCoins: number[] = new Array(amount + 1).fill(Infinity);
    const coinIndex: number[] = new Array(amount + 1).fill(-1);

    minCoins[0] = 0;

    for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
        if (coins[j] <= i && minCoins[i - coins[j]] + 1 < minCoins[i]) {
          minCoins[i] = minCoins[i - coins[j]] + 1;
          coinIndex[i] = j;
        }
      }
    }

    if (minCoins[amount] === Infinity) {
      setResult(null);
    } else {
      let count = 0;
      let currentAmount = amount;
      const coinCounts: { [key: number]: number } = {};

      while (currentAmount > 0) {
        const coin = coins[coinIndex[currentAmount]];
        coinCounts[coin] = (coinCounts[coin] || 0) + 1;
        currentAmount -= coin;
        count++;
      }

      setResult({
        count,
        coinCounts,
      });
    }
  };

  return {
    calculateCoinChange,
    result,
  };
};

export default useCoinChange;
