import { create } from "zustand"

const useUserStore = create((set, get) => ({
    user: null,
    isLoggedIn: false,
    setUser: payload => {
        set({
            user: payload,
            isLoggedIn: true
        })
    },
    getUser: () => get().user
}))

export default useUserStore