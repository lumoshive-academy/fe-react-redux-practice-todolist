import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt"
import { composeWithDevTools } from "@redux-devtools/extension";
import todoReducer from "./async/todos/reducer";

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_SECRET_KEY,
  onError: function (error) {
    console.error("encryption error", error);
  },
});

// configurasi redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todo"],
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  todo: todoReducer,
});


// middleware
const logMiddleware = (store) => (next) => (action) => {
  console.log("action", action);
  next(action);
};

// redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, logMiddleware))
);

// persistor
const persistor = persistStore(store);

export { store, persistor };
