'use strict';

import validations from '../lib/validations';
import constants from '../lib/constants';

const { errorMessages } = constants;

// Array utils 
// Dummy method. Will be removed
const reverse = (arr) => {
    if (!validations.arrayValidator(arr)) {
        throw new Error(errorMessages.INVALID_INPUT);
    }

    return arr.reverse();
};

export default {
    reverse,
};
