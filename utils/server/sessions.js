import { hash, genSalt } from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import useUserStore from '../stores/user-store'

const PRVIATE_KEY = process.env.JWT_SECRET
const encodedKey = new TextEncoder().encode(PRVIATE_KEY)

export const decoder = async (payload) => {
    const { payload: data } = await jwtVerify(payload, encodedKey)

    return data
}

export const sessionVerify = async payload => {
    try {
        const decodedData = await decoder(payload)
        const hook = useUserStore()
        console.log(hook.setUser({
            username: ":)"
        }))
        console.log(decodedData)
    } catch (error) {

    }
}

export const passwordHash = async (password) => {
    const salt = await genSalt(12)
    const hashed = await hash(password, salt)

    return hashed
}

export const encrypt = async (payload) => {
    return await new SignJWT(payload)
        .setProtectedHeader({
            alg: "HS256"
        })
        .setExpirationTime("90d")
        .sign(encodedKey)
}



export const setSession = async (payload) => {
    try {
        const token = await encrypt(payload);

        console.log(token)

        if (token) {
            const cookieStore = cookies();
            cookieStore.set("session", token, {
                expires: new Date(Date.now() + 60 * 60 * 24 * 90 * 1000), // 90 days in milliseconds
                path: "/",
                httpOnly: true,
            });
        }
    } catch (error) {
        console.error("Failed to set session:", error);
        throw error; // Optionally re-throw the error
    }
};

export const validateSession = async (req, res, next) => {
    try {
        const _cookies = await cookies()
        const session = _cookies.get("session")

        console.log(session)
    } catch (error) {
        console.log(error.message)
    }
}

