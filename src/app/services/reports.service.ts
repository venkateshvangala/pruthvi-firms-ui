import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ReportsService {

    constructor(private httpClient:HttpClient){

    }

    fetchEmployeeIds(){
        return this.httpClient.get("http://jsonplaceholder.typicode.com/users")
    }

    fetchBadgeTypes(){
        return this.httpClient.get("http://jsonplaceholder.typicode.com/users")
    }

    fetchDepartments(){
        return this.httpClient.get("http://jsonplaceholder.typicode.com/users")
    }


    getReport(data){
        return this.httpClient.post("http://jsonplaceholder.typicode.com/users", data)
    }
}