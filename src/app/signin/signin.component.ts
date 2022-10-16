import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private r: Router) { }


  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(

      {
        email: [''], password: ['']
      }
    )
  }
  login() {
    this.http.get<any>('http://localhost:3000/users').subscribe(res => {
      const user = res.find((a: any) => {
        return a.username == this.loginForm.value.username && a.password == this.loginForm.value.password
      })
      if (user) {
        alert("User Exist");
        this.loginForm.reset()
       
      }

    })
  }

}
