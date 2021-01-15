import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-thurman',
  templateUrl: './developer-thurman.component.html',
  styleUrls: ['./developer-thurman.component.scss']
})
export class DeveloperThurmanComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor() { }

  ngOnInit(): void {
  }

}
