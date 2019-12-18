import UpdateCityInfo from "./UpdateCityInfo";
import ErrorCity from "./CityErrored";
import DeleteCity from "./DeleteCity";

export default function (name) {
    return fetch("http://localhost:4000/favorites", {
        method : "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: name
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
        })
        .then(() => DeleteCity(name))
        .catch(err => {
            return ErrorCity(name)
        });
}