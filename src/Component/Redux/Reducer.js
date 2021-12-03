const initialState = {
    data : [],
    tipe : 'add',
}

const evoucherReducer = (state=initialState, action)=>{
    switch (action.type){
        case 'SETDATA' :
            return{
                ...state,
                data : state.data.concat([action.payload])
            }

        case 'SETTIPE' :
            return{
                ...state,
                tipe:action.payload
            }
            
        default :
             return state
    }
}

export default evoucherReducer