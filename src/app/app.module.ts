import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountModule } from './count/count.module';
import { HeroesModule } from './heroes/heroes.module';
import { ProducersModule } from './producers/producers.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CountModule,
    ProducersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
