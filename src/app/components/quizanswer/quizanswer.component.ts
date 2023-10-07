import { Component} from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { TextBoxComponent } from '../text-box/text-box.component';


@Component({
  selector: 'mlnr-quizanswer',
  templateUrl: './quizanswer.component.html',
  styleUrls: [
    './quizanswer.component.scss',
    '../text-box/text-box.component.scss',
  ],
})
export class QuizanswerComponent {//extends TextBoxComponent{
  @Input() text: string = '';
  @Input() currentNumber: number = -1;
  @Input() rightNumber: number = -2;
  @Input() onWaitAnim_ms: number = 1000;
  @Input() onRightAnim_ms: number = 1000;
  // *****************************************
  @Output() choosenAnswerNumber: EventEmitter<number> = new EventEmitter<number>();

  // *****************************************
  static isChoosenGlobal: boolean = false;

  textBox = new TextBoxComponent();

  // *****************************************

  answerClasses: Record<string, Boolean> = this.textBox.textBoxClasses;
  // *****************************************
  onChoosing(event: Event) {
    if (QuizanswerComponent.isChoosenGlobal) {
      return;
    } else {
      QuizanswerComponent.isChoosenGlobal = true;
    }

    this.textBox.isChoosen = true;
    this.setAnswerClasses();

    setTimeout(() => {
      this.textBox.isRight = this.currentNumber == this.rightNumber;
      this.setAnswerClasses();

      setTimeout(() => {
        this.setDefault();
        this.setAnswerClasses();
        this.choosenAnswerNumber.emit(this.currentNumber);
      }, this.onRightAnim_ms);
    }, this.onWaitAnim_ms);
  }
  // *****************************************
  setDefault() {
    this.answerClasses = this.textBox.setDefault();
    QuizanswerComponent.isChoosenGlobal = false;
  }

  setAnswerClasses() {
    this.answerClasses = this.textBox.setClasses();
  };
  
}
