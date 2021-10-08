import { Component, Input, OnInit } from '@angular/core';
import { ILink } from 'src/app/interfaces/ILink.interface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  @Input() links: ILink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
