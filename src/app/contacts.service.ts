import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(public http: HttpClient) { }
getContacts() {
 return  this.http.get("http://localhost:3000/contacts")
}
  getGirls() {
    let girls = [{
      id: 1,
      name: "Ronke",
      nickname: "Ronky"
    }, {
      id: 2,
      name: "Dupe",
      nickname: "Dupsy"
    }, {
      id: 3,
      name: "Shade",
      nickname: "Shady"
    }
    ]
    return girls
  }

}
