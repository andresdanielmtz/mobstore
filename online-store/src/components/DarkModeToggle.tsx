import {useEffect, useState} from 'react'

export const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialMode = savedMode ? JSON.parse(savedMode) : prefersDark;
        setIsDarkMode(initialMode);
        document.documentElement.setAttribute('data-theme', initialMode ? 'dark' : '');
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.setAttribute('data-theme', newMode ? 'dark' : '');
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    }

    return (
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
    )
};
