import { ReportsService } from './../services/reports.service';
import { Component } from "@angular/core";
import * as _ from 'underscore';
@Component({
    selector: 'chubb-reports',
    templateUrl: 'reports.component.html',
    styleUrls: ['reports.component.scss']
})
export class ReportsComponent {

    public reports: any = [];

    public employess: any = [];
    public badgeTypes: any = [];
    public departments: any = [];
    

    public selectedEmp: any = null;
    public selectedBadge: any = null;
    public selectedDepartment: any = null;
    public logIn: any = null;
    public logOut: any = null;

    constructor(private reportsService: ReportsService){
        this.fetchEmployees();
        this.fetchBadgeTypes();
        this.fetchDepartments();
        this.logIn = new Date();
        this.logOut = new Date();
    }

    fetchEmployees(){
        this.reportsService.fetchEmployeeIds().subscribe(
            res => {
                this.employess = this.parseResponseData(res);
                this.selectedEmp = 1; // by default select first name hardcoded as of now pls replace with actual data id
            },
            err => {
                console.log(err)
            }
        )
    }

    fetchBadgeTypes(){
        this.reportsService.fetchBadgeTypes().subscribe(
            res => {
                this.badgeTypes = this.parseResponseData(res);
                this.selectedBadge = 1;
            },
            err => {
                console.log(err)
            }
        )
    }

    fetchDepartments(){
        this.reportsService.fetchDepartments().subscribe(
            res => {
                this.departments = this.parseResponseData(res);
                this.selectedDepartment = 1;
            },
            err => {
                console.log(err)
            }
        )
    }

    parseResponseData(res){
        return _.map(res, (item) => {
            return {
                id: item.id,
                name: item.name
            }
        })
    }

    handleOptionsChange(item, key){
        if(!item) this[key] = null;
        else
        this[key] = item.id
    }

    fetchReport(){
        if(this.isValid()){
            this.reportsService.getReport({

            }).subscribe(
                res => {
                    this.reports = res;
                },
                err => {
                    this.reports = [];
                    console.log(err)
                }
            )
        }
        else{
            alert('please select all fields.');
        }
    }

    isValid(){
        if(!this.selectedBadge || !this.selectedDepartment || !this.selectedEmp || !this.logIn || !this.logOut)
        return false;
        return true;
    }

    onDateChange(item, key){
        if(!item) this[key] = null;
        else
        this[key] = item;
    }

}