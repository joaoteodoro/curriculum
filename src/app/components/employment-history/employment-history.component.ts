import { Component, Input, OnInit } from '@angular/core';
import { IEmployment } from 'src/app/interfaces/IEmployent.interface';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent implements OnInit {

  @Input() employments: IEmployment[] = [];
  @Input() textSubTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
