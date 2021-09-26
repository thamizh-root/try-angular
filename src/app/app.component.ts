import { Component, HostListener, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEven(event: KeyboardEvent) { 
    console.log('🔥 ~ random_id:c8e6d2 ~ event ~ app.component.ts', event.key);
  }

  @ViewChild('one') one: any;
  @ViewChild('four') four: any;
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // new LeaderLine(
    //   document.getElementById('start'),
    //   document.getElementById('end')
    // );
  }
 
  title = 'try-angular';


}
