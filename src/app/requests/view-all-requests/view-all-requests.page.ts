import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-requests',
  templateUrl: './view-all-requests.page.html',
  styleUrls: ['./view-all-requests.page.scss'],
})
export class ViewAllRequestsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  viewRequest() { //param ID
    this.router.navigate(['view-item']);
  }
}
