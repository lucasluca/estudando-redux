import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {changeTextAction} from "./inputTextChangeAction";
import {bindActionCreators} from "redux";


class InputText extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Ola Mundo</h1>
                <h2>{this.props.value}</h2>
                <input onChange={this.props.changeTextAction}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.field.value
})

const mapDispatchToProps = (dispatch) => bindActionCreators ({
    changeTextAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InputText)
