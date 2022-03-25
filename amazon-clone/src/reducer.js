export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                // push the item into the basket object
                ...state,
                basket:[...state.basket, action.item]
            };
        
        default:
            return state;

    }
}

export default reducer