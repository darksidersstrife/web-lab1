import React, {Component} from 'react';
import {FavoriteCityHeader} from "./FavoriteCityHeader";
import {CityInfo} from "../CityCommon/CityInfo";
import UpdateCity from "../../actions/UpdateCity";
import DeleteCity from "../../actions/DeleteCity";
import {getHeader, getInfo} from "../CityCommon/City";
import {connect} from "react-redux";


class FavoriteCity extends Component {

    constructor(props) {
        super(props);
        this.state = {error: false};
        if (!props.cityInfo) {
            this.props.update(this.getWeather(props.name))
        }
    }

    getWeather(name) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?appid=2e19bb27bd5e717bac388dc0c1827b17&q=${name}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {UpdateCity(getHeader(response).name, getInfo(response))})
            .catch(err => {
                    this.setState({
                        error: true,
                    });
                }
            );
    }

    render() {
        return this.props.cityInfo ? <div>
            <FavoriteCityHeader name={this.props.name}/>
            <CityInfo data={this.props.cityInfo}/>
        </div> : <div>
            <FavoriteCityHeader name={this.props.name}/>
        </div>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        update: (promise) =>{ console.log('a'); dispatch(promise) },
        delete: (name) => dispatch(DeleteCity(name))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteCity)