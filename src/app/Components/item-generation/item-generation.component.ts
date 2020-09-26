import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-item-generation',
  templateUrl: './item-generation.component.html',
  styleUrls: ['./item-generation.component.css']
})
export class ItemGenerationComponent implements OnInit {
  @Input() item;
  constructor() { }
  ngOnInit() {
  }
}
