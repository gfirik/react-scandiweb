const GetCurrencySymbol = (currency) => {
  switch (currency) {
    case "USD":
      return "$";
    case "AUD":
      return "A$";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "RUB":
      return "₽";
    default:
      return "$";
  }
};
export default GetCurrencySymbol;
