import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public replay: any;
    texts = ['Learner',
             'Front-end developer', 
             'Back-end developer',
             'Tech enthusiast'
            ];
    count = 0;
    index = 0;
    currentText = '';
    letter = '';
  constructor() { }

  ngOnInit(): void {

    setInterval(()=> { this.myFunction() },200);
  }

  myFunction(){
    if(this.count === this.texts.length)
    {
      this.count = 0;
    }
    this.currentText = this.texts[this.count];
    this.letter = this.currentText.slice(0,++this.index);
    const target = document.querySelector('.typing-2');

    if(target!=null) {
      console.log(target);
      target.textContent = this.letter;
    }
    else
    {
      console.log('target null');
    }

    if(this.letter.length === this.currentText.length)
    {
      this.count++;
      this.index = 0;
    }
    
  }

}
