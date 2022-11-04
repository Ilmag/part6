import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        votedMessage (state,action) {
            const content = action.payload
            return state = content ? `you voted '${content}'` : null 
        },
        createdMessage (state,action) {
            const content = action.payload
            return state = content ? `you created '${content}'` : null
        }
    }
})

export const created = (content, time) => {
    return (dispatch) => {
        dispatch(createdMessage(content))
        setTimeout(() => {
            dispatch(createdMessage(null))
        }, time)
    }
}

export const voted = (content) => {
    return (dispatch) => {
        dispatch(votedMessage(content))
    }
}

export const votedToNull = () => {
    return (dispatch) => {
        dispatch(votedMessage(null))
    }
}

export const { votedMessage, createdMessage } = notificationSlice.actions
export default notificationSlice.reducer