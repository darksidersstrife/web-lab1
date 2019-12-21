import React, {Component} from 'react';
import {CurrentCity} from "./Current/CurrentCity";
import "../css/header.css"


const TITLE = "Погода здесь";
const BUTTON_TITLE = "Обновить геопозицию";

export class Current extends Component {

    constructor(props) {
        super(props);
        this.state = {position: this.defaultPosition};
    }

    componentDidMount() {
        this.getPosition();
    }

    render() {
        return <div>
            {this.CurrentHeader}
            <CurrentCity position={this.state.position}/>
        </div>
    }

    CurrentHeader =
        <div className="row ">
            <div className="header col-5">
                {TITLE}
            </div>
            <div className="col-7">
                <button className="btn btn-secondary " onClick={this.getPosition.bind(this)}>
                    {BUTTON_TITLE}
                </button>
            </div>
        </div>;

    defaultPosition = {
        latitude: 55.75,
        longitude: 37.62
    };

    getPosition() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({position: position.coords});

        }, e => {
            this.setState({position: this.defaultPosition})
        });
    }
}
