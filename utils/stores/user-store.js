import { create } from "zustand"

const useUserStore = create((set, get) => ({
    user: null,
    setUser: user => set({
        user
    }),
    getUser: () => console.log(get().user),
    getToken: (token) => console.log(token)
}))

export default useUserStore