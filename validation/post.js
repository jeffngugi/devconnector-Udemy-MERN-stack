const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};
  data.text = !isEmpty(data.text) ? data.text : '';

  if (validator.isEmpty(data.text)) {
    errors.text = 'Post field is required';
  }
  if (!validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
