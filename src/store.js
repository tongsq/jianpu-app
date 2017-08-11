'use strict';

import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {autoRehydrate, persistStore} from 'redux-persist';

import {IS_DEV} from './config';
import logger from './logger';
import reducer from './reducer';

const middlewares = [thunk];
if (IS_DEV) {
    middlewares.push(createLogger({
        duration: true,
        collapsed: true
    }));
}
const store = createStore(reducer, undefined, compose(
    applyMiddleware(...middlewares),
    autoRehydrate()
));
export function reduxPersistStore (store, cbOk) {
    persistStore(
        store,
        {
            storage: AsyncStorage,
            blacklist: ['error']
        },
        (error, state) =>{
            if (error) {
                logger.warn(error);
            } else {
                cbOk(state);
            }
        }
    )
}
export default store;