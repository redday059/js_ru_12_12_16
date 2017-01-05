import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { changeDateRange } from '../AC'
import { connect } from 'react-redux'

class DateRange extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    handleDayClick = (e, day) => {
        const { changeDateRange, range } = this.props;
        changeDateRange(DateUtils.addDayToRange(day, range));
    };

    render() {
        const { from, to } =  this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div className="date-range">
                <DayPicker
                    numberOfMonths= { 3 }
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(DateRange)
