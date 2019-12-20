import React, {Component} from 'react';
import FavoriteList from "./Favorite/FavoriteList";
import FavoriteHeader from "./Favorite/FavoriteHeader";
import {connect} from "react-redux";
import UpdateList from "../actions/UpdateList";

class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {download: true, error: false}
    }

    render() {
        return this.state.download ?
            <div><span className="spinner-border text-secondary ml-5 m-1 spin"/></div>
            : this.state.error ?
                <div className={"title-sm text-secondary ml-5"}>Не загрузилось(</div>
                : <div>
                    <FavoriteHeader/>
                    <FavoriteList/>
                </div>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        update: () => (dispatch(UpdateList))
    }
}

export default connect(null, mapDispatchToProps)(Favorite);