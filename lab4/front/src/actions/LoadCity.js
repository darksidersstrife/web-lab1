import {getHeaderMini, getInfo} from "../util/City";
import ErrorCity from "./CityErrored"

export default function (name) {
    return fetch(`http://localhost:4000/weather?name=${name}`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((response) => {
            return {"cityName": name, "cityHeader": getHeaderMini(response), "cityInfo": getInfo(response)};
        })
}