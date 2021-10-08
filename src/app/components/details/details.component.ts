import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() phone: string = '';
  @Input() email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
