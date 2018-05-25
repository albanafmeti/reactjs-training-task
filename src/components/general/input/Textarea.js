import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {

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
        return <textarea className="form-control"
                         placeholder={this.props.placeholder}
                         rows="3"
                         value={this.state.value}
                         onChange={this.onChange}></textarea>;
    }
}

export default Textarea;