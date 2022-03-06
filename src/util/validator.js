export const checkLength = (passwordToCheck) => {
  if (passwordToCheck.length >= 8 && passwordToCheck.length <= 72) {
    return true;
  } else {
    return false;
  }
};

export const checkNumber = (passwordToCheck) => {
  const numbers = /[0-9]/g;

  if (passwordToCheck.match(numbers)) {
    return true;
  } else {
    return false;
  }
};

export const checkLowercase = (passwordToCheck) => {
  const lowercase = /[a-z]/g;

  if (passwordToCheck.match(lowercase)) {
    return true;
  } else {
    return false;
  }
};

export const checkUppercase = (passwordToCheck) => {
  const uppercase = /[A-Z]/g;

  if (passwordToCheck.match(uppercase)) {
    return true;
  } else {
    return false;
  }
};
