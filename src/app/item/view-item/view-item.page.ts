import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {

  topStories: any;
  constructor() { }

  ngOnInit() {
    this.topStories = [
      {title: "Exploring San Francisco", author: "Rea Ramsey", body: "", picture: "https://picsum.photos/500/400?image=693"},
      {title: "Coffee the right way", author: "Ellesha Hartley", body: "", picture: "https://picsum.photos/500/400?image=1060"},
      {title: "Best Hiking In Yosemite", author: "Vinnie Alexander", body: "", picture: "https://picsum.photos/500/400?image=1043"},
      {title: "Astro Photography Guide", author: "Greg Rakozy", body: "", picture: "https://picsum.photos/500/400?image=903"}
    ]
  
  }
}
