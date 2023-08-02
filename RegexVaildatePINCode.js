function validatePIN (pin) {
    var regex = /^(\d{4}|\d{6})$/;
    return regex.test(pin)
  }