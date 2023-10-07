import { Component, Input } from '@angular/core';

@Component({
  selector: 'mlnr-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
})
export class TextBoxComponent {
  @Input() text: string | any = '';

  _isChoosen = false;
  _isRight = false;
  _isWrong = false;

  public get isChoosen(): boolean {
    return this._isChoosen;
  }
  public set isChoosen(v: boolean) {
    this._isChoosen = v;
    if (this._isChoosen == true) {
      this._isRight = false;
      this._isWrong = false;
    }
  }

  public get isRight(): boolean {
    return this._isRight;
  }
  public set isRight(v: boolean) {
    this._isRight = v;
    this._isWrong = !this._isRight;
    // if (this._isRight == true) {
    this._isChoosen = false;
    // }
  }

  public get isWrong(): boolean {
    return this._isWrong;
  }
  public set isWrong(v: boolean) {
    this._isWrong = v;
    this._isRight = !this._isWrong;
    // if (this._isWrong == true) {
    this._isChoosen = false;
    // }
  }

  textBoxClasses: any = {
    'mlnr-text-box mlnr-text-box-default': true,
  };

  setDefault(): Record<string, boolean> {
    this._isChoosen = false;
    this._isRight = false;
    this._isWrong = false;
    return this.textBoxClasses;
  }

  setClasses(): Record<string, boolean> {
    this.textBoxClasses = {
      'mlnr-text-box mlnr-text-box-default': true,
      'mlnr-text-box-right': this.isRight,
      'mlnr-text-box-wrong': this.isWrong,
      'mlnr-text-box-choosen': this.isChoosen,
    };
    return this.textBoxClasses;
  }
}
