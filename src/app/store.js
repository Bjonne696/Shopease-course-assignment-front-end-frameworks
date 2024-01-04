import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if you have any
});

const persistConfig = {
  key: 'root',
  storage,
  // You can add other configurations like 'whitelist' or 'blacklist' for specific reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore certain actions for serializable checks
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    }),
});

export const persistor = persistStore(store);
