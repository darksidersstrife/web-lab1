import React, {Component} from 'react';
import {connect} from "react-redux";
import AddCity from "../../actions/AddCity";

const FAVOR = "Избранное";

class FavoriteHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {inputValue : ''};
    }

    render() {
        return <form onSubmit={(e) => {e.preventDefault(); console.log(this.state.inputValue); this.props.add(this.state.inputValue)}}>
            <span>
                {FAVOR}
            </span>
            <input value={this.state.inputValue} onChange={(e) => {this.setState({inputValue : e.target.value})}}/>
            <input type={"submit"} value={"Добавить"}/>
        </form>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        add: (name) => dispatch(AddCity(name))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteHeader);