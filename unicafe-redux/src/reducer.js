const initialState = {
    good: 0,
    ok: 0,
    bad: 0
}

const counterReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'GOOD':
            const newGood = state.good + 1
            return {...state, good: newGood }
        case 'OK':
            const newOk = state.ok + 1
            return {...state, ok: newOk }
        case 'BAD':
            const newBad = state.bad + 1
            return {...state, bad: newBad }
        case 'ZERO':
            return state
        case 'DO_NOTHING':
            return state
        default:
            return state
    }

}

export default counterReducer