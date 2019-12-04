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
        this.state = {error: false, download : !Boolean(props.cityInfo)};
        console.log(this.state);
        if (!props.cityInfo) {
            props.update(this.getWeather(props.name));
        }
    }

    updateHandler(name) {
        this.setState({error : false, download : true});
        this.props.update(this.getWeather(this.props.name));
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
            .then((response) => {
                this.setState({download : false});
                return UpdateCity(name, getInfo(response))
            })
            .catch(err => {
                    this.setState({
                        download : false,
                        error: true,
                    });
                }
            );
    }

    render() {
        console.log('render')
        console.log(this.state.download)
        let cityInfo = this.state.error ? 'ошибочка' : !this.state.download ? <CityInfo data={this.props.cityInfo}/> : 'загрузочка';
        return   <div>
            <FavoriteCityHeader name={this.props.name}/>
            <button onClick={this.updateHandler.bind(this, this.props.name)}>обновить</button>
            <button onClick={this.props.delete.bind(null, this.props.name)}>удалить</button>
            {cityInfo}
        </div>
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state)
        console.log(nextState)
        console.log(this.state.download && !nextState.download && !this.state.error);
        return !(this.state.download && !nextState.download && !nextState.error);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        update: (promise) =>{ dispatch(promise) },
        delete: (name) => dispatch(DeleteCity(name))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteCity)