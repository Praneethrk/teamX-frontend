


import { Injectable } from '@angular/core';
// import { UrlConstant } from './../url-constant/url-constant'
// import { DataService } from './../data.service';
export interface ILoader {
    isLoading: boolean;
}

@Injectable()
export class CommonHeaderService {
    constructor() {

    }

    // getHistoryOfTransactions(studentId: String) {
    //     return this.dataService.getObjects(this.url.SERVER_PORT + "reports/gethistoryoftransactions?studentId=" + studentId);
    // }

    // getUserById(studentId: string) {
    //     return this.dataService.getObjectById(this.url.SERVER_PORT + "profile/getdetails/" + studentId);
    // }

    // getRole(id: string, role: string) {
    //     return this.dataService.getObjectById(this.url.SERVER_PORT + "login/checkrole/" + id + "/" + role);

    // }

    // checkFeedbackEnabled(degreeId: string,degreeBatch:string,currentRole:string) {
    //     return this.dataService.getObjectById(this.url.SERVER_PORT + "masterfeedbackconfig/feedbacksidenavconfigforanonymus?degreeid=" + degreeId +"&degreebatch=" +degreeBatch+"&role="+currentRole);

    // }


    // stopLoading() {
    //     return this.dataService.stopLoading();
    // }

    // //user profile search

    // getUserBySearch(name) {

    //     return this.dataService.getObjectById(this.url.SERVER_PORT + 'profile/getsearch?name=' + name);
    // }

    // getHelpDeskInfo() {
    //     return this.dataService.getObjectById(this.url.SERVER_PORT + 'helpdesk/getinfo');
    // }
    // setUserSessionOut(email:string,username:string){
    //     return this.dataService.getObjects(this.url.SERVER_PORT+'usersession/logout?email='+email+'&username='+username);
    // }
//     getCollegeDetails() {
//         return this.dataService.getObjects(this.url.SERVER_PORT + 'college');
//     }
//     getuserImage(id){
//         return this.dataService.getObjectById(this.url.SERVER_PORT + 'profile/userimage?id='+id);
//     }
// }
}


