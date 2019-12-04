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

        return <div class="col-6">
            <div class = "info-row m-1">
                <span>{WIND}</span>
                <span>{wind}</span>
            </div>
            <div class = "info-row m-1">
                <span>{CLOUDS}</span>
                <span>{clouds}</span>
            </div>
            <div class = "info-row m-1">
                <span>{PRESSURE}</span>
                <span>{pressure}</span>
            </div>
            <div class = "info-row m-1">
                <span>{HUMIDITY}</span>
                <span>{humidity}</span>
            </div>
            <div class = "info-row m-1">
                <span>{COORD}</span>
                <span>{coord}</span>
            </div>
        </div>

    }
}
