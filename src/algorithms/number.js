// 팩토리얼 함수
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

/**
 * 소수 찾기
 * @return boolean;
 */
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

/**
 * 약수 찾기
 * @return number[];
 */
function getDivisors(num) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i != i) divisors.push(num / i);
    }
  }
  return divisors;
}
