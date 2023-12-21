// store.js
import { createStore , combineReducers} from 'redux';
import { darkModeReducer, sliderReducer } from './reducers';  // Import your root reducer
const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    slider: sliderReducer,
  });

const store = createStore(rootReducer);
export default store;
