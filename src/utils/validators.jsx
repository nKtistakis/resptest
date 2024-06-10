import PropTypes from "prop-types";
import isURL from "validator/lib/isURL";

/**Add your custom validators here
 * A validator should return an empty string (''), if the given argument is valid
 * else it should return a string with a message to be displayed in the form field
 */

export const validateFullName = (fullName) => {
  // Regular expression for alphabetical characters and spaces
  const regex = /^[A-Za-zα-ωΑ-ΩάΆέΈήΉίΊόΌύΎώΏϊΪϋΫΐΰ\s]+$/;
  // Test the fullName with the regex
  if (regex.test(fullName)) {
    // If the test passes, return an empty string
    return null;
  } else {
    // If the test fails, return a validation message
    return "Only alphabetical characters and spaces are allowed.";
  }
};

export const validateRequired = (val) => {
  if (val === null || val === undefined || val.trim() === "")
    return "This field is required";
  return null;
};

export const validateEmail = (val) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) return "Not a valid email";
  return null;
};

export const validatePhoneNumber = (phoneNumber) => {
  // Regular expression for digits, spaces, and the '+' symbol
  const regex = /^[+\d\s]+$/;

  // Test the phoneNumber with the regex
  if (regex.test(phoneNumber)) {
    // If the test passes, return an empty string
    return null;
  } else {
    // If the test fails, return a validation message
    return "Given phone number is not valid";
  }
};

// //Validation of phone number;
// export const validatePhoneNumber = (phone) => {
//   if (typeof phone === "undefined") {
//     //If empty
//     return "Given phone number is not valid";
//   }
//   if (!phone.match(/^\d{10}$/)) {
//     return "Given phone number is not valid";
//   }
//   return null;
// };

//Validation of letters only;
export const validateText = (name) => {
  if (typeof name === "undefined") return "This field is required";
  if (!/^[a-z]+$/.test(name)) {
    return "Please enter alphabetic characters only";
  }
  return null;
};

//Validation for Website URL;
export const validateWebsiteUrl = (url) => {
  if (typeof url === undefined) {
    return "Given url is not valid";
  }
  if (!isURL(url)) {
    return "Given url is not valid";
  }

  return null;
};

export const validateTaxNumber = (taxNumber) => {
  if (typeof taxNumber !== "string") {
    taxNumber = "";
  }

  if (taxNumber.length === 0) {
    return "Given tax number is not valid";
  }

  const isNumbersOnly = /^\d{9}$/.test(taxNumber);

  if (isNumbersOnly) {
    return null;
  } else {
    return "Given tax number is not valid";
  }
};
