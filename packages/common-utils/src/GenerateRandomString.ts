/**
 * @params {number} num
 * @description 랜덤 문자열을 반환한다.
 * @참고 https://codechacha.com/ko/javascript-random-string/
 */
export const GenerateRandomString = (num: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters?.length;
  for (let i = 0; i < num; i++) {
    result += characters?.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
