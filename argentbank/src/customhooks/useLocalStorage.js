import { useState } from 'react';

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
