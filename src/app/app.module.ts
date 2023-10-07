import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Added for simple two wat binding

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { QuizanswerComponent } from './components/quizanswer/quizanswer.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { LevelComponent } from './components/level/level.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    QuizanswerComponent,
    TextBoxComponent,
    LevelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
