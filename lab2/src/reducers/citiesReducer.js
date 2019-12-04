


export default function (cities, action) {
    let newState;
    switch (action.type) {
        case "ADD_CITY":
            if (!(action.cityName in cities)) {
                return {...cities, [action.cityName]: {cityHeader: null, cityInfo: null}};
            } else {
                return cities
            }
        case "DELETE_CITY":
            newState = {...cities};
            delete newState[action.cityName];
            return newState;
        case "UPDATE_CITY":
            newState = {...cities};
            newState[action.cityName].cityHeader = action.cityHeader;
            newState[action.cityName].cityInfo = action.cityInfo;
            return newState;
        default:
            return cities
    }
}