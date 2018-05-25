import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Number extends Component {

    static propTypes = {
        placeholder: PropTypes.string,
    };

    static defaultProps = {
        placeholder: ""
    };

    state = {
        value: ""
    };

    onChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    getValue = () => {
        return this.state.value;
    };

    setValue = (value) => {
        this.setState({
            value: value
        });
    };

    isEmpty = () => {
        return this.state.value === "";
    };

    render() {
        return <input type="number" className="form-control"
                      placeholder={this.props.placeholder}
                      value={this.state.value}
                      onChange={this.onChange}/>;
    }
}

export default Number;