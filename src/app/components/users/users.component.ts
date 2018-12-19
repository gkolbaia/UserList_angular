import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service'
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }


  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.users = this._dataService.getUsers();


    this.loaded = true;
  }



  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('form is not valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this._dataService.addUser(value);
      this.form.reset();
    }



  }
}
