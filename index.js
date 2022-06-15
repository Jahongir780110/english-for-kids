function sum(initialValue, args) {
  return args.reduce((total, arg) => total + arg, initialValue);
}

class Builder {
  constructor(val) {
    this.val = val;
  }

  plus() {
    console.log("plus");
  }

  minus() {
    console.log("minus");
  }

  multiply() {
    console.log("multiply");
  }

  divide() {
    console.log("divide");
  }

  get() {
    return this.val;
  }
}

class IntBuilder extends Builder {
  constructor(int = 0) {
    super(int);
  }

  plus(...nums) {
    this.val += sum(0, nums);
    return this;
  }

  minus(...nums) {
    this.val -= sum(0, nums);
    return this;
  }

  multiply(n) {
    this.val *= n;
    return this;
  }

  divide(n) {
    this.val = Math.floor(this.val / n);
    return this;
  }

  mod(n) {
    this.val %= n;
    return this;
  }

  static random(from, to) {
    const randomValue = from + Math.floor(Math.random() * (to - from + 1));
    return randomValue;
  }
}

function StringBuilder(str = "") {
  Object.assign(this, new Builder(str));
}

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.plus = function (...strings) {
  this.val += sum("", strings);
  return this;
};

StringBuilder.prototype.minus = function (n) {
  this.val = this.val.slice(0, -n);
  return this;
};

StringBuilder.prototype.multiply = function (n) {
  this.val = this.val.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  this.val = this.val.slice(0, Math.floor(this.val.length / n));
  return this;
};

StringBuilder.prototype.remove = function (str) {
  this.val = this.val.split(str).join("");
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.val = this.val.slice(from, from + n);
  return this;
};
