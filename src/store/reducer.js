import { BURGER_NAV_STATUS } from "./actions";
const initialstate = {
    burgerStatus: false
}

export const burgerNavReducer = (state=initialstate, action) =>{
    switch (action.type) {
        case BURGER_NAV_STATUS:
            return {
                burgerStatus: action.burgerStatus
            }
    }
    return state
}