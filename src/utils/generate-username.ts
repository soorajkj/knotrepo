export const generateUsername = (email: string) => {
  let username = email.slice(0, 80);

  if (username.length < 2) {
    username = username.padEnd(2, "x");
  }

  username = username.replace(/[^a-z0-9-_]/g, "-");

  if (!/^[a-z0-9]/.test(username)) {
    username = "a" + username;
  }

  if (!/[a-z0-9]$/.test(username)) {
    username = username.slice(0, -1) + "a";
  }

  return username;
};
