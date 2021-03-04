const initialState = [];

function bill(state = initialState, action) {
    switch (action.type) {
        case "SAVE_BILL":
            return [...state, action.payload]
        default:
            return state
    }
}
export default bill