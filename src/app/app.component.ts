import { ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { Component, Injectable } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { NgxSpinnerService } from 'ngx-spinner';
import * as AOS from 'aos';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PotrfolioApp';

  

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
  
 

}
