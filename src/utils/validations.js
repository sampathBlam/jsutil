const validators = {
  objectValidator(obj) {
    return typeof obj === 'object' && !!obj;
  },
  arrayValidator(arr) {
    return Array.isArray(arr) && arr.length > 0;
  },
  pickValidator(input, keys) {
    const isValid = this.objectValidator(input)
             && this.arrayValidator(keys)
             && keys.every((key) => typeof key === 'string');

    return isValid;
  },
};

export default validators;
