import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  status: any = 'waiting';
  data: Observable<string>

  constructor() { }

  ngOnInit(): void {
  this.data =  new Observable(observ =>{
      setTimeout(() => {
        observ.next('checking')
      }, 4000)

      setTimeout(() => {
        observ.next('re-checking')
      }, 6000)

      setTimeout(() => {
        observ.next('online')
      }, 10000)

      setTimeout(() => {
        observ.complete()
      }, 11000)
    });
    
    this.data.subscribe(report => {
      this.status = report;
    })

  }

}
