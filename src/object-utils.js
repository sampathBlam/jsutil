'use strict';
import validators from '../lib/validations';

// Object utils
const pick = (input, keys) => {
    if (!validators.pickValidator(input, keys)) {
        return new Error('Invalid Inputs');
    }

    let result = {};
    keys.forEach((key) => {
      if (input.hasOwnProperty(key)) {
        result[key] = input[key];
      }
    });

    return result;
}
 
const invert = (obj1) => {
    if (!validators.objectValidator(obj1)) {
        throw new Error('Invalid inputs');
    }
}

export default {
    pick,
    invert,
};
