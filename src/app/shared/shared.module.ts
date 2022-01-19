import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar/sidebar.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HeaderComponent } from '../header/header.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { AlertComponent } from '../alert/alert.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [
    SidebarComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports:[
    SidebarComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    IconsModule,
    CommonModule
  ]
})
export class SharedModule { }
