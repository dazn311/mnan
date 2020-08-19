import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../sevice/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      inLogin: new FormControl(''),
      inPass: new FormControl('')
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      id: null,
      nick: this.form.value.inLogin,
      pass: this.form.value.inPass,
      folders: 'current',
      name: 'Alex',
      email: 'aelx@bk.ru'
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard']);
    });
    console.log('submit');
    this.router.navigate(['/tab']);
  }

  setChangeTask(): void {
    return;
  }
}
