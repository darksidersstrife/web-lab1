import DeleteCity from "./DeleteCity";

export default function (name) {
    return fetch("http://localhost:4000/favorite", {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name})
    })
        .then(() => DeleteCity(name));
}