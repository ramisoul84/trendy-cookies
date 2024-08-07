import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  menuShow = new BehaviorSubject<boolean>(false);
  menuShow$ = this.menuShow.asObservable();

  toggleMenuShow() {
    this.menuShow.next(!this.menuShow.value);
  }
}
