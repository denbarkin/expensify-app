console.log('Hello Redux Playground 101 class');
import {createStore} from 'redux';


// Action Generator Refactoring
// Arrow function returning a object of state
const incrementCount = ({incrementBy = 1}) => ({
    type: 'INCREMENT',
    incrementBy
})


const store = createStore((state={count :0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return({
                count: state.count + incrementBy
            })
            break;
        case 'DECREMENT':
            return({
                count: state.count - 1
            })
        case 'RESET':
            return({
                count:0
            })
        default:
            return state;
            break;
    }

});

// Get State changes with Event Listener Subscribe

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Action Generator.
store.dispatch(incrementCount({incrementBy:100}));

store.dispatch({
    type : 'INCREMENT',
    incrementBy : 5
});

// To unsubscribe
// unsubscribe();

store.dispatch({
    type : 'DECREMENT'
});

store.dispatch({
    type : 'RESET'
});

store.dispatch({
    type : 'INCREMENT'
});


