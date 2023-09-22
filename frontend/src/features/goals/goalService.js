import axios from "axios";

const API_URl  = '/api/goals/' 

// Create new goal
const createGoal = async (goalData, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    
    const response = await axios.post(API_URl, goalData, config)

    return response.data
}

const goalService = {
    createGoal,
}

export default goalService