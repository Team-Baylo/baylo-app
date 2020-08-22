import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
})
export class HeaderContainerComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['']);
  }

}
