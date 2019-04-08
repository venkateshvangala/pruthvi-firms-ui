import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
    selector: 'pruthvi-firm-calender',
    templateUrl: 'calender.component.html',
    styleUrls: ['calender.component.scss']
})

export class CalenderComponent {
    @Input() displayCalenderView: any = null;
    @Output() handleDateChanges: EventEmitter<any> = new EventEmitter<any>();

    getCalenderDays(type) {
        let currentYear;
        let displyedMonth;
        let currentDate = 0;
        if (type === "PREV") {
            currentYear = _.first(this.displayCalenderView.days).year;
            var date = moment(new Date(currentYear, _.first(this.displayCalenderView.days).shortMonth, _.first(this.displayCalenderView.days).date));
            let startDate = date.subtract(7, 'd');
            displyedMonth = startDate.month();
            currentDate = startDate.date();
            currentYear = startDate.year();
        } else if (type === "NEXT") {
            currentYear = _.last(this.displayCalenderView.days).year;
            let date = moment(new Date(currentYear, _.last(this.displayCalenderView.days).shortMonth, _.last(this.displayCalenderView.days).date));
            let startDate = date.add(1, 'd');
            displyedMonth = startDate.month();
            currentDate = startDate.date();
            currentYear = startDate.year();
        }
        else if (type === "PREVDAY") {
            currentYear = _.first(this.displayCalenderView.days).year;
            var date = moment(new Date(currentYear, _.first(this.displayCalenderView.days).shortMonth, _.first(this.displayCalenderView.days).date));
            let startDate = date.subtract(1, 'd');
            if (startDate.day() === 0)
            startDate = date.subtract(1, 'd')
            if (startDate.day() === 6)
            startDate = date.subtract(2, 'd')
            displyedMonth = startDate.month();
            currentDate = startDate.date();
            currentYear = startDate.year();
        } else if (type === "NEXTDAY") {
            currentYear = _.last(this.displayCalenderView.days).year;
            let date = moment(new Date(currentYear, _.first(this.displayCalenderView.days).shortMonth, _.first(this.displayCalenderView.days).date));
            let startDate = date.add(1, 'd');
            displyedMonth = startDate.month();
            currentDate = startDate.date();
            currentYear = startDate.year();
        }
        this.handleDateChanges.emit({ currentYear, currentMonth: displyedMonth, startDate: currentDate });
    }
}