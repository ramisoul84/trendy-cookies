import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  menuShow!: boolean;
  scrollY: number = 0;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.menuShow$.subscribe((data) => (this.menuShow = data));
  }

  menutoggle() {
    this.api.toggleMenuShow();
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.scrollY = window.scrollY;
  }
}
