import React, {Component} from 'react';

const COORD = "Координаты: ";
const WIND = "Ветер: ";
const HUMIDITY = "Влажность: ";
const PRESSURE = "Давление: ";
const CLOUDS = "Облачность: ";

export class CityInfo extends Component{
    render() {
        let coord = this.props.data.coord;
        let wind = this.props.data.wind;
        let humidity = this.props.data.humidity;
        let pressure = this.props.data.pressure;
        let clouds = this.props.data.clouds;

        return <div>
            <div>
                <span>{WIND}</span>
                <span>{wind}</span>
            </div>
            <div>
                <span>{CLOUDS}</span>
                <span>{clouds}</span>
            </div>
            <div>
                <span>{PRESSURE}</span>
                <span>{pressure}</span>
            </div>
            <div>
                <span>{HUMIDITY}</span>
                <span>{humidity}</span>
            </div>
            <div>
                <span>{COORD}</span>
                <span>{coord}</span>
            </div>
        </div>

    }
}
