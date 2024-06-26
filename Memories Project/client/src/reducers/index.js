import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import posts from './posts.js';
import id from './id.js';
import authReducer from './auth.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'isAuthenticated'],
};

const rootReducer = combineReducers({
  posts,
  id,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
