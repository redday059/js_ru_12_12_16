import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css'

class DatePicker extends React.Component {
    static propTypes = {};
    state = {
        from: null,
        to: null
    };
    getInitialMonth() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        return new Date (year, month);
    }
    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    render() {
        const {from, to} = this.state;
        const message = (from && to) ? 'You\'ve chosen from ' + from.toDateString() + ' to ' + to.toDateString() : '';
        return (
            <div style = {{"textAlign": "center"}}>
                <DayPicker
                    initialMonth = { this.getInitialMonth() }
                    numberOfMonths= { 2 }
                    selectedDays = { day => DateUtils.isSameDay({from, to}.selectedDay, day) }
                    onDayClick = { this.handleDayClick.bind(this) }
                />
                {message}
            </div>
        );
    }
}

export default DatePicker;
