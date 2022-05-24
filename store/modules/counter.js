import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = { value: 0 };

// createSlice: action과 reducer를 한번에 정의함
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});
// 액션 생성함수
export const { increment, decrement } = counterSlice.actions;
// 리듀서
export default counterSlice.reducer;
