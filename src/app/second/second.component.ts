import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @ViewChild('ne') newOne : any;
  @ViewChild('nt') newTwo : any;
  
  one: number = 0;
  two: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.two = this.newTwo.nativeElement.value;
      console.log("this.one ~ ngAfterViewInit()", this.one, this.newOne.nativeElement.value)
  }

  open(){
    this.one = this.newOne.nativeElement.value;
    this.two = this.newTwo.nativeElement.value;
    console.log("this.one", this.one);
    console.log("this.two", this.two);
  }
}
