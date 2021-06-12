import { Component, OnInit } from '@angular/core';
import {project} from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  Id!: string;
  Name!: string;
 
  constructor() { }

  ngOnInit(): void {
    
  }
  projects: Array<project> = [
    { 
      Id: '1',
      Name: 'E-Commerce website',
      Category: 'PHP/JAVASCRIPT',
      Description:'This is a php based web application which enables any user to make purchase products online. A user can perform various operations such as change password update password or make payment. I am using xaamp sever to create request response cycles using stateful http sessoins and MySQL to build the database in myphpAdmin. I am looking forward to add some more fatures in my website meanwhile i learn new technologies to make this more interactive and user friendly.',
      ShortDescription: 'An ecommerce website demo build using PHP',
      URL:'http://lifestylestoreshreykumar.epizy.com',
      imgURL:'assets/img/portfolio/project.png',
      
    },
    { 
      Id: '2',
      Name: 'Name 2',
      Category:'ANGULAR/.NET/OTHERS',
      Description:'Test',
      ShortDescription: 'A test short Description for above project.........',
      URL:'http://lifestylestoreshreykumar.epizy.com',
      imgURL:'assets/img/portfolio/p1.jpg'
    }
    
    
  ];
 
}
