import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private http = inject(HttpClient)

  public getCitiess(): Observable<CardInterface[]> {
    return this.http.get<CardInterface[]>(
      environment.apiURL + '/character'
    );
  }
}
