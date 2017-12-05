const initialState = {
    isPicking:false,
    newAppleId:3,
    apples:[
        {
            id:0,
            weight:233,
            isEaten:false
        },
        {
            id:1,
            weight:233,
            isEaten:false
        },
        {
            id:2,
            weight:233,
            isEaten:false
        }
    ]
};
const TodoApple = (state = initialState, action)=>{
    switch (action.type){
        case "PICK_APPLE":
            let newApple= {
                id: state.newAppleId,
                weight : action.payload,
                isEaten : false
            };
            state.newAppleId ++;
            state.apples.push(newApple);
            return {...state,
                newAppleId:state.newAppleId,
                apples:state.apples
            };
        case "EATE_APPLE":

            for(let i=0;i<state.apples.length;i++){
                if(state.apples[i].id === action.id){
                    state.apples[i].isEaten = true;
                    return {...state,
                        apples:state.apples
                    };
                }
            }
            return state;
        default:
            return state
    }

};
export default TodoApple