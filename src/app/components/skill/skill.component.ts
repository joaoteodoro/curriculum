import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/interfaces/ISkill.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill: ISkill = {} as ISkill;

  completeArray: boolean[] = [true, true, false, false, false];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.skill.level; i++) {
      this.completeArray[i] = true;
    }
  }

}
