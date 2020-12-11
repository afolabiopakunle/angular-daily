import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {
  girls: any[];

  constructor(public contactsService: ContactsService,
              http: HttpClient) { 
                http.get('http://jsonplaceholder.typicode.com/posts')
                .subscribe(value => {
                  this.girls = value
                })
              }

  ngOnInit(): void {
    this.girls = this.contactsService.getGirls();
  }

}
