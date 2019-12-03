import React, {Component} from 'react';

export class CurrentCityHeader extends Component{
    render() {
        let name = this.props.data.name;
        let icon = this.props.data.iconLink;
        let temp = this.props.data.temp;
        return <div>
            <div>{name}</div>
            <img alt="icon" width="100px" src={icon}/>
            <div>{temp}</div>
        </div>

    }
}
