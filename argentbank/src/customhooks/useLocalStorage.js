import { useState } from 'react';

/**
 * Custom hook for managing state in local storage.
 * @function
 * @name useLocalStorage
 * @param {string} key - The key under which to store the data in local storage.
 * @param {*} initialValue - The initial value to be set if no data is found in local storage under the specified key.
 * @returns {Array<any|Function>} A tuple containing: the stored value, a setter function for the value, and a remover function for the value.
 * @example
 * const [username, setUsername, removeUsername] = useLocalStorage('username', 'Guest');
 */
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item !== null ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
    };

    const removeValue = () => {
        setStoredValue(initialValue);
        localStorage.removeItem(key);
    };

    return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
