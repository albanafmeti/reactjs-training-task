import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Datepicker extends Component {

    static propTypes = {
        placeholder: PropTypes.string,
    };

    static defaultProps = {
        placeholder: ""
    };

    state = {
        value: moment()
    };

    onChange = (date) => {
        this.setState({
            value: date
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
        return this.state.value === "" || this.state.value === null;
    };

    render() {
        return <DatePicker
            dateFormat="YYYY/MM/DD"
            className="form-control full-width"
            placeholder={this.props.placeholder}
            selected={this.state.value}
            onChange={this.onChange}/>;
    }
}

export default Datepicker;