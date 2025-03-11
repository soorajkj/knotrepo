const greetings = {
  morning: "Good morning",
  afternoon: "Good afternoon",
  evening: "Good evening",
};

export const greet = (date: Date = new Date()) => {
  const hour = date.getHours();

  if (hour < 5 || hour >= 17) {
    return greetings.evening;
  } else if (hour < 12) {
    return greetings.morning;
  } else {
    return greetings.afternoon;
  }
};
