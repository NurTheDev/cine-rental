export const initialState = {
    cartItems: []
}
export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type){
        case 'CART_ADD_ITEM':
            return {
                cartItems: [...state.cartItems, action.payload]
            }
        case 'CART_REMOVE_ITEM':
            console.log("Removing item with ID:", action.payload);
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            }
        default:
            return state
    }
}
