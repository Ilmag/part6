import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        console.log(response.data)
        return response.data
    }catch(error){
        console.log(error.message)
    }
}

const createNew = async (content) => {
    try{
        const newObject = {content:content, votes:0}
        const response = await axios.post(baseUrl, newObject)
        return response.data
    }catch(error){
        console.log(error.message)
    }
}

const update = async (id, updatedAnecdote) => {
    try{
        const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
        return response.data
    }catch(error){
        console.log(error.message)
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, update }