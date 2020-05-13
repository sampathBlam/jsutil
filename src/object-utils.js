
import validators from '../lib/validations';

// Object utils
const pick = (input, keys) => {
  if (!validators.pickValidator(input, keys)) {
    throw new Error('Invalid Inputs');
  }

  const result = {};
  keys.forEach((key) => {
    if (input[key]) {
      result[key] = input[key];
    }
  });

  return result;
};

const invert = (obj1) => {
  if (!validators.objectValidator(obj1)) {
    throw new Error('Invalid inputs');
  }
};

export default {
  pick,
  invert,
};
