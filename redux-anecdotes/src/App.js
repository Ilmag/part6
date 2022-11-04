import { useEffect } from 'react'
import ConnectedForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import ConnectedFilter from './components/Filter'
import { initialize } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialize())
  },[dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <ConnectedNotification/>
      <ConnectedFilter/>
      <ConnectedForm/>
      <AnecdoteList/>
    </div>
  )
}

export default App