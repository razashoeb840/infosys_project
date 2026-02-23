import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, NgIf, NgClass],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  selectedRole: 'student' | 'admin' = 'student';
  isLoading = false;
  passwordsMatch = true;
  isDarkTheme = true;

  registerData = {
    fullName: '',
    regNumber: '',
    email: '',
    college: '',
    department: '',
    adminRole: '',
    password: '',
    confirmPassword: '',
    adminKey: '',
    acceptTerms: false,
  };

  getIndicatorPosition(): string {
    return this.selectedRole === 'admin' ? 'translateX(100%)' : 'translateX(0%)';
  }

  checkPasswordMatch(): void {
    this.passwordsMatch =
      this.registerData.password === this.registerData.confirmPassword;
  }

  socialSignup(provider: string): void {
    window.location.href =
      provider === 'google'
        ? 'https://accounts.google.com'
        : 'https://github.com';
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    // poore page ka background bhi change karo
    if (this.isDarkTheme) {
      document.body.classList.remove('body-light');
      document.body.classList.add('body-dark');
    } else {
      document.body.classList.remove('body-dark');
      document.body.classList.add('body-light');
    }
  }

  onRegister(): void {
    if (!this.passwordsMatch) return;
    this.isLoading = true;
    setTimeout(() => {
      window.location.href = 'https://www.facebook.com';
    }, 800);
  }
}
