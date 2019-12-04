import React, {Component} from 'react';
import {connect} from "react-redux";
import AddCity from "../../actions/AddCity";

const FAVOR = "Избранное";

class FavoriteHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
    }

    render() {
        return <form className={"row"} onSubmit={(e) => {
            e.preventDefault();
            console.log(this.state.inputValue);
            this.props.add(this.state.inputValue)
        }}>
            <div class="header col-7">
                {FAVOR}
            </div>
            <div className={"col-4"}>
                <input className={"form-control"} placeholder={"Добавить новый город"} value={this.state.inputValue} onChange={(e) => {
                    this.setState({inputValue: e.target.value})
                }}/>
            </div>
            <div>
                <input type={"submit"} value={"Добавить"}/>
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