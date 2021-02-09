import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../../shared/models/message.model';
import { UsersService } from '../../shared/services/user.services';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { fadeStateTrigger } from 'src/app/shared/animation/fade.animation';
import { Title, Meta } from '@angular/platform-browser';
import { BackendService } from 'src/app/shared/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private backendService: BackendService,
  ) {
    title.setTitle('Вход в систему');
    meta.addTags([
      { name: 'keywords', content: 'логин,вход,система' },
      { name: 'description', content: 'Страница для входа в систему' },
    ]);
  }

  ngOnInit() {
    this.message = new Message('', 'danger');

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage({
            text: 'Теперь вы можете зайти в систему',
            type: 'success',
          });
        } else if (params['accessDenaid']) {
          this.showMessage({
            text: 'Для работы с системой Вам нужно авторизоваться',
            type: 'warning'
          });
        }
      });


    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000)
  }
  onSubmit() {
    const formData = this.form.value;
    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.router.navigate(['/system', 'bill']);
          }
          else {
            this.showMessage({
              text: 'Пароль не верный',
              type: 'danger',
            });
          }
        }
        else {
          this.showMessage({
            text: 'Такого пользователя не существует',
            type: 'danger',
          });
        }

      })
  }
  login(loginType: string, formData?): void {
    this.backendService.login(loginType, formData)
  }

  logout(): void {
    this.backendService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      }).catch((err: Error) => {
        console.log(err);
      });
  }
}
