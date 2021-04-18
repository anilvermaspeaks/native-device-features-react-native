import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { init } from './components/helpers/db'

import AppNavigator from './Routing/routing';
import placesReducer from './store/places-reducer'


init().then(() => {
  console.log('initialized db')
})
  .catch((err) => {
    console.log('initialization of db failed')
    console.log(err)
  })

const rootReducer = combineReducers({
  places: placesReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (<Provider store={store}>
    <AppNavigator /></Provider>
  );
}
