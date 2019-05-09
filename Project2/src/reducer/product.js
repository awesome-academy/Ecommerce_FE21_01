import * as ActionType from '../constant/ActionType';

const initialState = {
    hotProduct:[],
};

const product = ( state =  initialState , action)=>{

    switch( action.type ){
        case ActionType.fetchHotProduct :
            return {...state , hotProduct : action.hotProduct };
        default :
            return state;
    }
}

export default product;