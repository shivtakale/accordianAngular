import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  @Input() title!: string;
  public IsExpanded: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.IsExpanded= !this.IsExpanded
  }

}
