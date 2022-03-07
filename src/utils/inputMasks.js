export const getDate = () => {
  const today = new Date();

  return `${today.getFullYear()}-${
    today.getMonth() < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1
  }-${today.getDay() < 10 ? `0${today.getDay() + 6}` : today.getDay() + 6}`;
};

export const maskDate = (date) => {
  let dateformated = date.split("-").reverse().join("/");

  return dateformated;
};

export const maskReal = (value) => {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
