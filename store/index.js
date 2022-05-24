// configureStore: store를 생성한다.
import { configureStore } from '@reduxjs/toolkit';

// createWrapper: wrapper를 생성한다.
// 지금까지 리듀서 모듈 만들기 -> 리듀서 모듈 합치기 -> 스토어 생성의 과정을 거쳤다.
// 이제 최종적으로 wrapper에 스토어를 바인딩해주면 된다.
import { createWrapper } from 'next-redux-wrapper';

// redux-toolkit은 devTools 등의 미들웨어들을 기본적으로 제공한다. 여기에 사용하고 싶은 미들웨어가 있다면 추가로 정의해준다.
// 아래의 코드에선 logger를 추가해줬다.
import logger from 'redux-logger';
import reducer from './modules';

const makeStore = (context) =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'production',
    });
export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== 'production' });
