import * as ActionType from './../constant/ActionType';
import callMockAPI from './../util/index';

export const actFetchHotProduct = ()=>dispatch=>{
    return callMockAPI('GET','hotproduct',null).then(res=>{
        dispatch({
            type : ActionType.fetchHotProduct ,
            hotProduct  : res.data
        });
    }).catch(error=>{
        console.log(`Can't connect to the server` ,error );
    })
}

