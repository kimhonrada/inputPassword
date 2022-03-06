export const checkLength = (passwordToCheck) => {
  if (passwordToCheck.length >= 8 && passwordToCheck.length <= 72) {
    return "validLength";
  } else {
    return "notValidLength";
  }
};

export const checkNumber = (passwordToCheck) => {
  const numbers = /[0-9]/g;

  if (passwordToCheck.match(numbers)) {
    return "validNumber";
  } else {
    return "notValidNumber";
  }
};
