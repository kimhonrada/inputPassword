// all validation function

const checkLength = (passwordToCheck) => {
  if (passwordToCheck.length >= 8 && passwordToCheck.length <= 72) {
    return true;
  } else {
    return false;
  }
};

const checkNumber = (passwordToCheck) => {
  const numbers = /[0-9]/g;

  if (passwordToCheck.match(numbers)) {
    return true;
  } else {
    return false;
  }
};

const checkLowercase = (passwordToCheck) => {
  const lowercase = /[a-z]/g;

  if (passwordToCheck.match(lowercase)) {
    return true;
  } else {
    return false;
  }
};

const checkUppercase = (passwordToCheck) => {
  const uppercase = /[A-Z]/g;

  if (passwordToCheck.match(uppercase)) {
    return true;
  } else {
    return false;
  }
};

const checkEmail = (passwordToCheck, email) => {
  const splitEmail = email.split("@");

  if (!passwordToCheck.toLowerCase().includes(splitEmail[0])) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  checkLength,
  checkEmail,
  checkNumber,
  checkLowercase,
  checkUppercase,
};

/*

// all validation function

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

export const checkEmail = (passwordToCheck, email) => {
  const splitEmail = email.split("@");

  if (!passwordToCheck.toLowerCase().includes(splitEmail[0])) {
    return true;
  } else {
    return false;
  }
};


*/
