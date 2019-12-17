import React, {Component} from 'react';
import {FavoriteCityHeader} from "./FavoriteCityHeader";
import {CityInfo} from "../CityCommon/CityInfo";
import UpdateCity from "../../actions/UpdateCity";
import DeleteCity from "../../actions/DeleteCity";
import {connect} from "react-redux";


class FavoriteCity extends Component {

    constructor(props) {
        super(props);
        this.state = {error: false, download: !Boolean(props.cityInfo)};
        if (!props.cityInfo) {
            props.update(this.props.name, this.onError.bind(this));
        }
    }

    updateHandler() {
        this.setState({error: false, download: true});
        this.props.update(this.props.name, this.onError.bind(this));
    }

    onError() {
        this.setState({
            download: false,
            error: true,
        });
    }

    render() {
        let cityInfo = this.state.error
            ? <div className={"title-sm text-secondary ml-5"}>Ой...</div>
            : !this.state.download
                ? <CityInfo data={this.props.cityInfo}/>
                : <div><span className="spinner-border text-secondary ml-5 m-1 spin"/></div>;
        return <div>
            <div className={"d-flex flex-row align-items-center"}>
                <FavoriteCityHeader name={this.props.name} data={this.props.cityHeader} download={this.state.download} error={this.state.error}/>
                <div className={"ml-auto"}>
                    <button className={"btn btn-circle btn-secondary"} onClick={this.updateHandler.bind(this)}>↺</button>
                    <button className={"btn btn-circle btn-secondary"} onClick={this.props.delete.bind(null, this.props.name)}>X</button>
                </div>
            </div>
            {cityInfo}
        </div>
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props && this.state.download) {
            this.setState({download : false})
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        update: (name, err) => dispatch(UpdateCity(name, err)),
        delete: (name) => dispatch(DeleteCity(name))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteCity)