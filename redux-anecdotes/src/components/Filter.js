import { filterAnecdotes } from "../reducers/filterReducer"
import { connect } from 'react-redux'

const Filter = (props) => {

    const handleFilter = (event) => {
        event.preventDefault()
        props.filterAnecdotes(event.target.value)
    }

    return(
        <div>
            filter: <input value={props.filter} onChange={handleFilter}/>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {state:state.filter}
}

const mapDispatchToProps =  {
    filterAnecdotes
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter