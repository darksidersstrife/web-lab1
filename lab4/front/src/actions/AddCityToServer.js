import LoadCity from "./LoadCity";
import UpdateCityInfo from "./UpdateCityInfo";
import {getHeaderMini, getInfo} from "../util/City";
import ErrorCity from "./CityErrored";
import SaveCityOnServer from "./PostCityOnServer";

export default function (name) {
    return LoadCity(name)
        .then( (city) => SaveCityOnServer(city))
        .catch(err => {
            return ErrorCity(name)
        });
}