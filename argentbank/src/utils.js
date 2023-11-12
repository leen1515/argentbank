
/**
 * Utility functions for input validation.
 * @module InputValidators
 */

/**
 * Validates a name string.
 * @param {string} name - The name string to validate.
 * @returns {boolean} True if the name is valid, false otherwise.
 */
export const isValidName = (name) => {
    const regex = /^[a-zA-Z]+(?:[-']?[a-zA-Z]+)*$/;
    return regex.test(name);
};


/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export const isValidEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
};

/**
 * Validates a password string.
 * @param {string} password - The password string to validate.
 * @returns {boolean} True if the password is valid, false otherwise.
 */
export const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/; 
    return regex.test(password);
};