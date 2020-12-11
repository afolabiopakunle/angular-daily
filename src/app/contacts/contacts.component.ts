import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any;
  girls = [];
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(data => this.contacts = data)
    this.girls = this.contactsService.getGirls()
  }

}
