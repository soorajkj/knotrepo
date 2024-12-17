export const generateUsername = (email: string, number: number = 6) => {
  const random = [...Array(number)]
    .map((_) => (Math.random() * 10) | 0)
    .join("");
  const username = email.slice(0, email.indexOf("@"));
  return username + random;
};
