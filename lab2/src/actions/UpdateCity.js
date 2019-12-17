import {getHeaderMini, getInfo} from "../util/City";
import UpdateCityInfo from "./UpdateCityInfo"

export default function(name, errorCallback) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=2e19bb27bd5e717bac388dc0c1827b17&q=${name}`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((response) => {
            return UpdateCityInfo(name, getHeaderMini(response), getInfo(response));
        })
        .catch(err => {
                errorCallback();
                return {type: "error", err : err}
            }
        );
}