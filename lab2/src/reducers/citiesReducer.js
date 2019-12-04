


export default function (cities, action) {
    let newState;
    console.log(action);
    switch (action.type) {
        case "ADD_CITY":
            console.log('add');
            return {...cities, [action.cityName] : null};
        case "DELETE_CITY":
            console.log('remove');
            newState = {...cities};
            delete newState[action.cityName];
            return newState;
        case "UPDATE_CITY":
            newState = {...cities};
            newState[action.cityName] = action.cityInfo;
            return newState;
        default:
            return cities
    }
}