import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        voteAnecdote(state, action) {
            const id = action.payload.id
            const afterVote = action.payload
            return state.map(a => a.id !== id ? a : afterVote).sort((a, b) => b.votes - a.votes)
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
        },
        setAnecdotes(state, action) {
            return action.payload
        }
    }
})

export const initialize = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes))
    }
}

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.createNew(content)
        console.log('updated list',anecdotes)
        dispatch(appendAnecdote(anecdotes))
    }
}

export const updateAnecdote = (id) => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        const anecdoteToVote = anecdotes.find(a => a.id === id)
        const afterVote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
        const updated = await anecdoteService.update(id, afterVote)
        dispatch(voteAnecdote(updated))
    }
}

export const { voteAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer