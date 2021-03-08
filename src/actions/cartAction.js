export const addToCart = (id, name, price, amount) =>({
    type : 'ADD_TO_CART',
    payload:{
        id, name, price, amount
    }
})
export const removeFromCart = (id) => ({
    type : 'REMOVE_FROM_CART',
    payload: id,
})