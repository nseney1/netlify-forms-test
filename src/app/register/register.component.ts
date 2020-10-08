import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get("https://adoring-montalcini-161f84.netlify.app/.netlify/functions/hello").toPromise().then(res => {
            console.log(res);
        })
    }

}
