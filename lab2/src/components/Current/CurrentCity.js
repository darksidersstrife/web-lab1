import React, {Component} from 'react';
import {getHeader, getInfo} from "../../util/City";
import {CurrentCityHeader} from "./CurrentCityHeader";
import {CityInfo} from "../CityCommon/CityInfo";

// import {CityInfo}

export class CurrentCity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityHeader: '',
            cityInfo: '',
            downloading: true,
            error: false
        };
    }

    render() {
        return (this.state.downloading)
            ? <div className="text-center ">
                <div className="title">Подождите, данные загружаются</div>
                <div className="spinner-border text-secondary spin">
                </div>
            </div>
            : (this.state.error)
                ? <div className="text-center">
                    <span className="title">Упс, что-то пошло не так</span>
                </div>
                : <div className="row">
                        <CurrentCityHeader data={this.state.cityHeader}/>
                    <div className={"col-6"}>
                        <CityInfo data={this.state.cityInfo}/>
                    </div>
                </div>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state === prevState) {
            this.getWeather(this.props.position)
        }
    }

    getWeather = async (coords) => {
        this.setState({downloading: true});
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=2e19bb27bd5e717bac388dc0c1827b17`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    cityHeader: getHeader(response),
                    cityInfo: getInfo(response),
                    error: false,
                    downloading: false
                });
            })
            .catch(err => {
                    this.setState({
                        error: true,
                        downloading: false
                    });
                }
            );

    };


}
