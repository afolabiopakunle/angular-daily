import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-going-places',
  templateUrl: './going-places.component.html',
  styleUrls: ['./going-places.component.css']
})
export class GoingPlacesComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }
  contacts: any;
  ngOnInit(): void {
    this.contactsService.getContacts()
    .subscribe(data => {
      this.contacts = data;
    });
  }

}
