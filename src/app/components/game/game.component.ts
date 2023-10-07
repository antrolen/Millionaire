import { Component } from '@angular/core';
import { Question, QuestionsDB } from 'src/app/models/question';
import { DialogQuestion } from 'src/app/models/dialog-question';
import { AnswerState } from 'src/app/enums/answer-state';
import { DialogAnswers } from 'src/app/enums/dialog-answers';
import { GameStates } from 'src/app/enums/game-states';

@Component({
  selector: 'mlnr-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss', 
  '../text-box/text-box.component.scss'],
})
export class GameComponent {
  DialogAnswers = DialogAnswers;
  State = GameStates;
  // *****************************************
  questions: Question[] = QuestionsDB;
  level: number = 0;
  maxLevel: number = this.questions.length;
  state: GameStates = this.State.START;

  prise: string[] = [];
  dialogQ: DialogQuestion = new DialogQuestion(
    'Continue ?',
    'Yes. Next question, please!',
    'Not. I get the money '
  );

  startText = 'Start!';

    
    private _loseText : string = 'You LOSE !';
    public get loseText() : string {
      return this._loseText;
    }
    
    private _winText : string = 'You WIN';
    public get winText() : string {
      return this._winText + ` ${this.prise.at(this.level)}`;
    }

  // *****************************************
  answerState: AnswerState = AnswerState.DEFAULT;

  public get isWrongAnswer(): boolean {
    return this.answerState == AnswerState.WRONG;
  }

  public get isRightAnswer(): boolean {
    return this.answerState == AnswerState.RIGHT;
  }

  public get isChoosenAnswer(): boolean {
    return this.answerState == AnswerState.CHOOSEN;
  }

  constructor() {
    console.log(`State = ${this.state}`);
    for (let i: number = 0; i < this.maxLevel; i++) {
      let pr = Math.pow(10, i + 2);
      this.prise.push(`${pr} $`);
    }
  }

  // *****************************************
  onStart() {
    this.state = this.State.QUIZ;
  }

  onChoosingQuizAnswer(i: number) {
    if (i == this.questions[this.level].rightAnswer) {
      if (this.level == this.maxLevel - 1) {
        this.state = this.State.RESULT_WIN;
      } else {
        this.state = this.State.DIALOG;
      }
    } else {
      this.state = this.State.RESULT_LOSE;
    }
  }

  onChoosingDialogAnswer(i: DialogAnswers) {
    if (i == DialogAnswers.YES) {
      this.level++;
      this.state = this.State.QUIZ;
    } else if (i == DialogAnswers.NO) {
      this.state = this.State.RESULT_WIN;
    }
  }

  // **************************************
  questionStyle: any = {
    height: '50px',
    width: '150px',
  };
}
