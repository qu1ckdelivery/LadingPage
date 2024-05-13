import { Component } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  postData = {
    email: '',
  };
  emailSent = false;
  emailInvalid = false;
  apiError = false;


  private url = 'https://qu1ckapp-n8n.mp0f7m.easypanel.host/webhook-test/90facb6a-da00-4939-ba5b-47863de70fb3'

  constructor(private httpClient: HttpClient) {}

  createPost() {
    this.emailSent = false;
    this.emailInvalid = false;
    this.apiError = false;

    if (!this.validateEmail(this.postData.email)) {
      this.emailInvalid = true;
      return;
    }

    this.httpClient.post(this.url, this.postData).subscribe(
      response => {
        console.log('Email enviado', response);
        this.emailSent = true;
        this.postData.email = '';

      },
      (error: HttpErrorResponse) => {
        console.error('Error', error);
        this.apiError = true; // Marca como erro da API
      }
    );
  }

  private validateEmail(email: string): boolean {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
}
