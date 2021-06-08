import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, Injectable } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PotrfolioApp';

  /**
   *
   */
   @ViewChild('sidenav') sidenav!: MatSidenavContainer;
   opened: boolean = false;

  constructor(private spinner: NgxSpinnerService) {
 
  }
  ngOnInit() {
    
  
    this.showSpinner();
    
   
    
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
  
  @HostListener('window:resize',['$event'])
  onResize(event:any) {
    if(event.target.innerWidth > 960) {
      this.sidenav.close();
      this.opened = false;
    }
    if(event.target.innerWidth < 960){
     this.sidenav.open();
     this.opened = true;
    }
  }

  IOpen(){
    if(this.opened===false){
       this.opened = true;
    }
    else{
      this.opened =false;
    }
    //console.log(this.opened);
  }
 

}
