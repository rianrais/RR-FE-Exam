import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  id: number;
  name: string;
  email: string;
  address:string;
  company: string;


  constructor(private api:ApiService) { }

  ngOnInit() {
  }


  addUser() {
    if(this.api.UserList.length == 0){
      this.id = 1;
    }
    
    else{
    this.id = this.api.UserList[this.api.UserList.length-1]['id'] + 1;
    }

    if(this.name == "" || this.email == "" || this.address == "" || this.company == ""  ){
      alert("Fill this Form!");
    }else{
     this.api.UserList.push({
      "id":this.id,
      "name":this.name,
      "email":this.email,
      "address":this.address,
      "company":this.company
    });
  
    }
  }
  
}
