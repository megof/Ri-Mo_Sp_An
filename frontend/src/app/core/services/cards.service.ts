import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { CardInterface } from '@interfaces/cards.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private http = inject(HttpClient)

  public getCards(): Observable<CardInterface> {
    return this.http.get<CardInterface>(
      environment.apiURL + '/character'
    )
  }
}
