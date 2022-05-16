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

        case 'REMOVE_FROM_BASKET':
            // remove the item by index using splice
          const index = state.basket.findIndex(
              (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];

          if (index >= 0){
            newBasket.splice(index,1)
          } else {
              console.warn(
                  'cant remove product (id: ${action.id}) as its not in basket!'
              )
            }

            return{
                ...state,
                basket:newBasket
            }
        
        default:
            return state;

    }
}

export default reducer