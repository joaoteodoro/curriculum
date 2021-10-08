import { Component, Input, OnInit } from '@angular/core';
import { IEmployment } from 'src/app/interfaces/IEmployent.interface';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  @Input() employment: IEmployment = {} as IEmployment;

  constructor() { }

  ngOnInit(): void {
  }

}
