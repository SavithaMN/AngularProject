import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  user = {
    name:'Ram',
    age:10,
    gender:"Male"
  }
  save(){
    const observable = this.userService.createUser(this.user);
    observable.subscribe((response: any) => {
      console.log(response);

    })
  }


  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
