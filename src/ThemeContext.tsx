import { createContext, ReactNode, useEffect, useState } from 'react'

interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

const defaultContext: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => { },
}

const ThemeContext = createContext<ThemeContextType>(defaultContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const storedTheme = localStorage.getItem('app-theme')
        if (storedTheme === 'light' || storedTheme === 'dark') {
            setTheme(storedTheme)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('app-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
