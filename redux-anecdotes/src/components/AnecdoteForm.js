import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { created } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(anecdote)
        props.created(anecdote, 5000)
      }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <input name="anecdote"/>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createAnecdote, created
}

const ConnectedForm = connect(null,mapDispatchToProps)(AnecdoteForm)
export default ConnectedForm