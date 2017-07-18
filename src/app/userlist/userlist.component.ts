import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'userlist-root',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {



  constructor(private api:ApiService) { }
  
  

  ngOnInit() {
  }

  removeuser(id){
    this.api.UserList = this.api.removeUserList(id);
  }

}
