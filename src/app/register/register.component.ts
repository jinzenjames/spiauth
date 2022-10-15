import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private r: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group(

      {
        firstname: [''], lastname: [''], email: [''], password: ['']
      }
    )
  }
signup(){
  this.http.post<any>('http://localhost:3000/users',this.signupForm.value).subscribe(res=>{
    alert("hi")
  })
}
}
