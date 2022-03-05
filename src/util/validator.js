const validator = (passwordToCheck) => {
  if (passwordToCheck.length >= 8 && passwordToCheck.length <= 72) {
    return "validLength";
  } else {
    return "notValidLength";
  }
};

export default validator;
