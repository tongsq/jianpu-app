const initialState = {
    count: 0
}

export default (state=initialState, action)=>{
    if (action.type == 'mincr'){
        return {...state, count:state.count+1}
    }
    else if(action.type == 'mdecr'){
        return {...state, count:state.count-1}
    }
    else{
        return initialState
    }
}