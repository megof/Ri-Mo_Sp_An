import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { UserInterface } from '@interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  /*private http = inject(HttpClient)

  public getCitiess(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(
      environment.apiURL_users + '/users'
    );
  }*/
}
