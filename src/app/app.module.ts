import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ViewSpeechComponent }  from './view/view.component';
import { SpeechService } from './services/SpeechService';
import { FilterPipe } from './pipes/FilterPipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers: [ SpeechService ],
  declarations: [ AppComponent, ViewSpeechComponent, FilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
