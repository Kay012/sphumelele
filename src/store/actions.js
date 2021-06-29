export const BURGER_NAV_STATUS = "BURGER_NAV_STATUS" 

export const burgerStatusHandler = (burgerStatus) => {
    const burgerStat = !burgerStatus
    // setBurgerStat(!burgerStat)
    return async dispatch => { 

        await dispatch({type: BURGER_NAV_STATUS, burgerStatus: burgerStat})
    }
    
}