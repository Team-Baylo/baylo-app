import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.page.html',
  styleUrls: ['./home-container.page.scss'],
})
export class HomeContainerPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  viewItem() {
    //this.router.navigate(['view-item', {item: "1"}]);
    this.router.navigate(['view-item']);
  }
}
