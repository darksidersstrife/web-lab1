import LoadCity from "./LoadCity";
import ErrorCity from "./CityErrored";
import SaveCityOnServer from "./PostCityOnServer";

export default function (name) {
    return LoadCity(name)
        .catch(err => {
            return ErrorCity(name)
        })
        .then( (city) => SaveCityOnServer(city));
}