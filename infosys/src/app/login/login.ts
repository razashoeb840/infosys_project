import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isDarkTheme = true;

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
}
