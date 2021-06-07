import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


const MaterialComponent =[
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
] ;

@NgModule({

  
  imports: [
    MaterialComponent
  ],
  exports: [MaterialComponent]
})
export class MaterialModule { }
