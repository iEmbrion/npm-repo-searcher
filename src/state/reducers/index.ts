import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

//This helps to define the type of information in our store
//Mouse over RootState and you will see Repositories
export type RootState = ReturnType<typeof reducers>;
