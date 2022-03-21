import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment: state => {
            state.value = state.value + 1
        }
    }
})
export const { increment } = counterSlice.actions
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer