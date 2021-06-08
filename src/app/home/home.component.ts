import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public replay: any;

  constructor() { }

  ngOnInit(): void {
  }

  animating() { console.log('Animating...'); }
  animated() { console.log('Animated'); }

 

  readonly content = {

    top: { 
      title: "Get your single page application done right",
      description: "Wizdm provides all the key features of a modern single page application ready to use, so, for you to focus on launching your idea the quickest!", 
      image: "assets/img/blue-buddha.svg"
    }

   
  };

}
