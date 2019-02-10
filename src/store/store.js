import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import HomeReducer from "../app/home/reducer/HomeReducer"
import AddDocumentReducer from "../app/add-document/reducer/addDocumentReducer"
import thunk from 'redux-thunk';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();


const reducers = combineReducers({
    HomeReducer,
    AddDocumentReducer,
    router: connectRouter(history),
});

const store = createStore(reducers,

    compose(
        applyMiddleware(thunk, routerMiddleware(history))
    )
);
export default store;