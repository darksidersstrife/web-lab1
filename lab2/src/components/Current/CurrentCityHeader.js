import React, {Component} from 'react';
import "../../css/header.css"

export class CurrentCityHeader extends Component {
    render() {
        let name = this.props.data.name;
        let icon = this.props.data.iconLink;
        let temp = this.props.data.temp;
        return <div class="col-6">
            <div class="title">{name}</div>
            <div class="row">
                <div class="col-6 text-center">
                    <img alt="icon" width="100px" src={icon}/>
                </div>
                <div class="col-6 temp">{temp}</div>
            </div>
        </div>

    }
}
