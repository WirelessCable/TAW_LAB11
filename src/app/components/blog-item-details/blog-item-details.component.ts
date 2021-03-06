import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.component.html',
  styleUrls: ['./blog-item-details.component.css']
})
export class BlogItemDetailsComponent implements OnInit {

  @Input() public image?: string;
  @Input() public text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
