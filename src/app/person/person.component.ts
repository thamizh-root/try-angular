import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  age: number = 0;
  name: string = 'hello';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log("param ~ queryParam ~ constructor", params['id'], typeof params);
      this.name = params['id']; 
      console.log('🔥 ~ random_id:6adbeb ~ params ~ person.component.ts', params);
      console.log('🔥 ~ random_id:82abb9 ~ this.name ~ person.component.ts', this.name);
    })
  }

  ngOnInit(): void {
    this.age = Math.floor(Math.random() * 30);
    console.log('🚀 ~ random_id:47129c ~ this.age ~ person.component.ts', this.age);
  }

}
