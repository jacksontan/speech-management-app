import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { ViewSpeechComponent }  from './view/view.component';
import { SpeechService } from './services/SpeechService';
import { AuthenticationService } from './services/authentication.service';
import { FilterPipe } from './pipes/FilterPipe';

@NgModule({
	imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
	providers: [ 
		SpeechService, 
		AuthGuard, 
		AuthenticationService
	],
	declarations: [ AppComponent, ViewSpeechComponent, FilterPipe, LoginComponent],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
