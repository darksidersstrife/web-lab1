import React, {Component} from 'react';
import {connect} from "react-redux";
import AddCity from "../../actions/AddCity";

const FAVOR = "Избранное";

export class FavoriteHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
    }

    render() {
        return <form className={"row"} onSubmit={(e) => {
            e.preventDefault();
            this.props.add(this.state.inputValue)
        }}>
            <div className="header col-8">
                {FAVOR}
            </div>
            <div className={"col d-flex"}>
                <input className={"form-control mt-auto"} placeholder={"Добавить новый город"} value={this.state.inputValue} onChange={(e) => {
                    this.setState({inputValue: e.target.value})
                }}/>
            </div>
            <div className={"d-flex"}>
                <button type={"submit"} className={"btn btn-circle btn-secondary mt-auto"}>+</button>
            </div>
        </form>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        add: (name) => dispatch(AddCity(name))
    }
}

export default connect(null, mapDispatchToProps)(FavoriteHeader);