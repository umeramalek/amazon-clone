export const initialState = {
    basket: [],
};


// selector 
export const getBasketTotal = (basket) => 
    // reduce iterates through the basket and tally the total
    // everytime it loops through, the item price to add to the total amount, intitial amount is zero
    basket?.reduce((amount,item) => item.price + amount, 0);

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