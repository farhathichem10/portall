import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { TokenStorage } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  form: any = {
    matpers: null,
    usepswd: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthenticationService,
    private tokenStorage: TokenStorage,
    private route: Router,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { matpers, usepswd } = this.form;

    this.authService.login(matpers, usepswd).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        // localStorage.setItem("us",username);
        this.route.navigate(["/dashboard"])
        this.isLoginFailed = false;
        this.isLoggedIn = true;




       /* this.toast.success({
          detail: ' Success Message',
          summary: data.message,
          duration: 5000,
        });*/
      },
      (err) => {
        /* this.errorMessage = err.error.message;
        this.isLoginFailed = true; */
       /* this.toast.error({
          detail: ' Error Message',
          summary: 'Login Failed, try again !',
          duration: 5000,
        });*/
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}

/* */
