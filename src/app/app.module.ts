import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './materials.module';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    SearchComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
