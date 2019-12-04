import React, {Component} from 'react';


export class FavoriteCityHeader extends Component {

    render() {
        return <span className={"title-sm m-2"} >{this.props.name}
            </span>
    }

}
