import UpdateCityInfo from "./UpdateCityInfo";
import ErrorCity from "./CityErrored";
import {skipState} from "../util/City";

export default function (city) {
    return fetch("http://localhost:4000/favorites", {
        method : "PUT",
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
            return ErrorCity(city.name)
        });
}