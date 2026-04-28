export const convertToINR = (usd) => {
  const rate = 83;
  return usd * rate;
};

export const formatINR = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
};