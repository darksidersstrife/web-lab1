import React, {Component} from 'react';
import FavoriteCity from "./FavoriteCity";
import {connect} from "react-redux";


class FavoriteList extends Component {

    render() {
        return <div>
            {Object.entries(this.props.cities).map(([cityName, cityInfo]) => {
                return <FavoriteCity key={cityName} name={cityName} cityInfo={cityInfo}/>
            })}
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        cities: state.cities,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        /*fetchData: (url) => dispatch(itemsFetchData(url)),
        add: (city) => dispatch(doAddItem(city)),
        changeInput: (input) => dispatch(doChangeInput(input))*/
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);