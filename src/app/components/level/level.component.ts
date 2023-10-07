import { Component, Input } from '@angular/core';
import { TextBoxComponent } from '../text-box/text-box.component';

@Component({
  selector: 'mlnr-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss',
  '../text-box/text-box.component.scss',]
})
export class LevelComponent {
    @Input() text: string | any ="";
    @Input() currentLevel: number = -1;

    private _activeLevel : number = -1;
    public get activeLevel() : number {
      return this._activeLevel;
    }
    @Input() public set activeLevel(v : number) {
      this._activeLevel = v;
        this.textBox.isChoosen = this.currentLevel == this._activeLevel;
        this.levelClasses = this.textBox.setClasses();
    }
    

    textBox = new TextBoxComponent();

    levelClasses: Record<string, Boolean> = this.textBox.textBoxClasses;
}
