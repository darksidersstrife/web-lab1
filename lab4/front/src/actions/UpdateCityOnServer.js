import LoadCity from "./LoadCity";
import PutCityOnServer from "./PutCityOnServer";
import ErrorCity from "./CityErrored";

export default function (name) {
    return LoadCity(name)
        .then(city => PutCityOnServer(city))
        .catch(err => {
            return ErrorCity(name)
        });
}