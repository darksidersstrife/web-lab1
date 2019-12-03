import React, {Component} from 'react';
import {getHeader, getInfo} from "../CityCommon/City";
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
            ? <div>
                <span>Типа спиннер</span>
            </div>
            : (this.state.error)
                ? <div>
                    <span>АШИПКА</span>
                </div>
                : <div>
                    Типа загрузилось
                    <CurrentCityHeader data={this.state.cityHeader}/>
                    <CityInfo data = {this.state.cityInfo}/>
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
