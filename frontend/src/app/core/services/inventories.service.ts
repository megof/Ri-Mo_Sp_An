import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoriesService {
  /*private http = inject(HttpClient)

  public getCitiess(): Observable<InventoryInterface[]> {
    return this.http.get<InventoryInterface[]>(
      environment.apiURL_users + '/inventory'
    );
  }*/
}
