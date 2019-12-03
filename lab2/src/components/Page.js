import React, {Component} from 'react';
import {Current} from "./Current";
import {Favorite} from "./Favorite"

export class Page extends Component {
    render() {
        return (
            <div>
                <Current/>
                <Favorite/>
            </div>
        );
    }
}
