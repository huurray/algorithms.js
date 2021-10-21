// 팩토리얼 함수
export function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
