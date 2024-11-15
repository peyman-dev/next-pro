import { create } from 'zustand'

const useThemeStore = create((set, get) => ({
    isDark: false,
    toggle: () => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
            set({ isDark: false })
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            set({ isDark: true })
            localStorage.setItem('theme', 'dark')
        }
    },
    initializeTheme: () => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            set({ isDark: true })
            document.documentElement.classList.add('dark')
        } else {
            set({ isDark: false })
            document.documentElement.classList.remove('dark')
        }
    }
}))



export default useThemeStore