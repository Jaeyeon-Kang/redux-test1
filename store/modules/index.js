//modules 내에서 정의한 모듈들을 합쳐주는 역할을 한다.
import { combineReducers } from '@reduxjs/toolkit';

import { HYDRATE } from 'next-redux-wrapper';
import counter from './counter';

const reducer = (state, action) => {
    // SSR작업 수행 시 HYDRATE라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행
    if (action.type === HYDRATE) {
        return { ...state, ...action.payload };
    }

    // combineReducers: 함수명 그대로 정의한 리듀서 모듈들을 결합.
    // 리듀서 모듈(slice)을 추가할 때마다 combineReducers함수의 인자로 전달되는 객체 내부에 추가.
    return combineReducers({ counter })(state, action);
};
export default reducer;
