


export default function (cities, action) {
    let newState;
    console.log(cities);
    console.log(action);
    switch (action.type) {
        case "ADD_CITY":
            console.log('add');
            return {...cities, [action.cityName] : null};
        case "REMOVE_CITY":
            console.log('remove');
            newState = {...cities};
            delete newState[action.cityName];
            return newState;
        case "UPDATE_CITY":
            console.log('update');
            newState = {...cities};
            newState[action.cityName] = action.cityInfo;
            console.log(newState);
            console.log(action);
            return newState;
        default:
            return cities
    }
}