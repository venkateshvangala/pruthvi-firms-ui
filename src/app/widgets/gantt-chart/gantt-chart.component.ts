import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';
import * as _ from 'underscore';

@Component({
    selector: 'pruthvi-firm-gantt-chart',
    templateUrl: 'gantt-chart.component.html',
    styleUrls: ['gantt-chart.component.scss']
})
export class GanttChartComponent implements OnInit {
    public displayCalenderView: any = null;
    ngOnInit() {
        let currentYear: any = moment().year();
        let currentMonth: any = moment().month();
        this.getCurrentDays(currentYear, currentMonth);
    }

    getCurrentDays(currentYear, currentMonth) {
        let startDate = moment.utc([currentYear, currentMonth]);
        let firstDay: any = moment(startDate).startOf('month').date();
        let endDay: any = moment(startDate).endOf('month').date();
        const monthDays = new Array();
        _.each(_.range(firstDay, endDay + 1, 1), (date) => {
            var currentDate = new Date(currentYear, currentMonth, date);
            const day = moment(currentDate).format('ddd');
            if (day !== 'Sat' && day !== 'Sun')
                monthDays.push({ day: day, date: date });
        })
        this.displayCalenderView = {
            'days': monthDays,
            'noOfWeeks': Math.ceil(monthDays.length / 5),
            'noOfDays': monthDays.length,
            'currenMonth': moment(startDate).format('MMM'),
            'currenMonthShort': startDate.month(),
            'currentYear': currentYear
        }
    }

    getCalenderDays(type) {
        let currentYear: any = this.displayCalenderView.currentYear;
        let displyedMonth = this.displayCalenderView.currenMonthShort;
        if ((displyedMonth === 0 && type === "PREV")){
            currentYear = this.displayCalenderView.currentYear - 1;
            displyedMonth = 12;
        } else if ((displyedMonth >= 11 && type === "NEXT")) {
            currentYear = this.displayCalenderView.currentYear + 1;
            displyedMonth = -1;
        }
        let currentMonth: any = type === "PREV" ? (displyedMonth - 1) : (displyedMonth + 1);
        this.getCurrentDays(currentYear, currentMonth);
    }

    getWeeks(noOfWeeks) {
        return _.range(1, noOfWeeks + 1);
    }
}