import UpdateCityInfo from "./UpdateCityInfo";
import {skipState} from "../util/City";
import ErrorCityNotLoaded from "./ErrorCityNotLoaded";

export default function (city) {
    return fetch("http://localhost:4000/favorite", {
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(city, skipState)
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
        })
        .then(() => UpdateCityInfo(city))
        .catch(err => {
            return ErrorCityNotLoaded(city.cityName)
        });
}