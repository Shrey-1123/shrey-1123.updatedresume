import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public replay: any;
    texts = ['Hello! welcome to my online portfolio',
            'हैलो! मेरे ऑनलाइन पोर्टफोलियो में आपका स्वागत है'
            ];
    count = 0;
    index = 0;
    currentText = '';
    letter = '';
    

  constructor() { }

  ngOnInit(): void {

    
    setInterval(()=> { this.myFunction() },400);

  }

  myFunction(){
    if(this.count === this.texts.length)
    {
      this.count = 0;
    }
    this.currentText = this.texts[this.count];
    this.letter = this.currentText.slice(0,++this.index);
    const target = document.querySelector('.typing');

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

    readonly content = {

    top: { 
      title: "Hi people, ",
      description: "Wisdom provides all the key features of a modern single page application ready to use, so, for you to focus on launching your idea the quickest!", 
      image: "assets/img/blue-buddha.svg"
    }

   
  };

  

}
