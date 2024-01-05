const redux = require('redux');

const INITIAL_VALUE = {
  counter: 0
}

const reducer = (store, action) => {
  return{counter: store.counter + 1};
}

const store = redux.createStore();

const subscriber = () => {
  const state = store.getState();
  console.log (state);
} 

store.subscribe(subscriber);

store.dispatch()