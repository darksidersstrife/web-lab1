import React, {Component} from 'react';
import {FavoriteCityHeader} from "./FavoriteCityHeader";
import {CityInfo} from "../CityCommon/CityInfo";
import UpdateCity from "../../actions/UpdateCity";
import DeleteCity from "../../actions/DeleteCity";
import {getHeaderMini, getInfo} from "../CityCommon/City";
import {connect} from "react-redux";


class FavoriteCity extends Component {

    constructor(props) {
        super(props);
        this.state = {error: false, download: !Boolean(props.cityInfo)};
        if (!props.cityInfo) {
            props.update(this.getWeather(props.name));
        }
    }

    updateHandler() {
        this.setState({error: false, download: true});
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
                this.setState({download: false});
                return UpdateCity(name, getHeaderMini(response), getInfo(response))
            })
            .catch(err => {
                    this.setState({
                        download: false,
                        error: true,
                    });
                }
            );
    }

    render() {
        let cityInfo = this.state.error
            ? <div className={"title-sm text-secondary ml-5"}>Ой...</div>
            : !this.state.download
                ? <CityInfo data={this.props.cityInfo}/>
                : <div><span className="spinner-border text-secondary ml-5 m-1 spin"/></div>;
        return <div>
            <div className={"d-flex flex-row align-items-center"}>
                <FavoriteCityHeader name={this.props.name} data={this.props.cityHeader} download={this.state.download} error={this.state.error}/>
                <div className={"ml-auto"}>
                    <button className={"btn btn-circle btn-secondary"} onClick={this.updateHandler.bind(this)}>↺</button>
                    <button className={"btn btn-circle btn-secondary"} onClick={this.props.delete.bind(null, this.props.name)}>X</button>
                </div>
            </div>
            {cityInfo}
        </div>
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(this.state.download && !nextState.download && !nextState.error);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        update: (promise) => {
            dispatch(promise)
        },
        delete: (name) => dispatch(DeleteCity(name))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteCity)