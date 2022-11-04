import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { voted, votedToNull } from '../reducers/notificationReducer'
import { useState } from 'react'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const forFilter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes).filter(anecdote => anecdote.content.toLowerCase().includes(forFilter.toLowerCase()))
    anecdotes.sort((a, b) => b.votes - a.votes)
    const notifications = useSelector(state => state.notifications)

    const timer = (fn) => {
        const timerID = setTimeout(() => {
            dispatch(fn)
        },10000)
        return timerID
    }

    const [timerID,setTimerID] = useState(0)

    const vote = (id,content) => {
        if(notifications){
            console.log(timerID)
            clearTimeout(timerID)
            dispatch(updateAnecdote(id))
            dispatch(voted(content))
            timer(votedToNull())
        }else{
            dispatch(updateAnecdote(id))
            dispatch(voted(content))
            const ID = timer(votedToNull())
            console.log(timerID)
            setTimerID(ID)
        }
    }

    return(
        <div>
            {anecdotes.map(anecdote => 
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
                </div>
            </div>
                )}
        </div>
    )
}

export default AnecdoteList