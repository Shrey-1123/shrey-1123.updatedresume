import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent implements OnInit {

 
  linkedinUrl: string = 'https://www.linkedin.com/in/shrey-kumar-992481185';
  facebookUrl:string = 'https://www.facebook.com';
  twitterUrl:string = 'https://twitter.com';
  githubUrl:string = 'https://github.com/Shrey-1123';
  constructor() { }

  ngOnInit(): void {
  }

}
