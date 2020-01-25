export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    }
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const logout = () => {
    return {
        type: 'SIGN_OUT'
    }
}