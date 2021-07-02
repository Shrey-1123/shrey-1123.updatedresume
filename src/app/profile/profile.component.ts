import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import * as AOS from 'aos';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  @ViewChild('sidenav') sidenav!: MatSidenavContainer;
  @ViewChild('one') home!: ElementRef;
  @ViewChild('two') about!: ElementRef;
  @ViewChild('three') project!: ElementRef;
  @ViewChild('four') accomplishment!: ElementRef;
  @ViewChild('five') skill!: ElementRef;
  @ViewChild('six') contact!: ElementRef;
  opened: boolean = false;
  ngOnInit(): void {
    AOS.init();
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any) {
    if(event.target.innerWidth > 960) {
      
      
    }
    if(event.target.innerWidth < 960){
     
     
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
  toaccomplishment(){
    
        this.accomplishment.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start",});
  }
  tohome(){

    this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start",});
  }
  toabout(){

    this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start",});
  }

  toskill(){
    this.skill.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start",});
  }

  tocontact(){
    this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start",});
  }

  toproject(){
    this.project.nativeElement.scrollIntoView({ behavior: 'smooth', block: "start",});
  }
 
}
