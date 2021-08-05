const initState = {
    pricing: {},
    pricingResponse: null,
    
}

const pricingReducer = (state = initState, action) => {
    if (action.type === 'GET_PRICING') {
        return {
            ...state,
            pricing: action.pricing,
            pricingResponse:action.pricingResponse
        }
    }
    // /// THESE ARE GENERAL APPLICABLE TO ALL API's
    else if (action.type === 'PRICING_RESET') {
        return {
            ...state,
            
            pricingResponse: null,
            
        }
    }
    else if (action.type === 'PRICING_SUCCESS') {
        return {
            ...state,
            
            pricingResponse: action.pricingResponse,
        }
    }
    else if (action.type === 'PRICING_FAIL') {
        return {
            ...state,
            
            pricingResponse: action.pricingResponse,
        }
    }

    return state;
}
export default pricingReducer;