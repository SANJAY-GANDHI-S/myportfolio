import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactRequest } from '../core/footer-component/footer-component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/api/contact`;

  constructor(private http: HttpClient) {}

  sendMessage(data: ContactRequest): Observable<string> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
}
