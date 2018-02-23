import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    `
      h1 {
        font-size: 3rem;
      }
    `
  ],
  template: `
    <h1>Contact Tree</h1>
    <app-menu [data]="contats"></app-menu>
  `
})
export class AppComponent {
  protected contats = [
    {
      id:1,
      name: "Friends",
      type: "Group",
      contacts: [
      {id:2, name: "Udi", type: "Contact"},
      {id:3, name: "Tommy", type: "Contact"},
      {
      id:6,
      name: "Old Friends",
      type: "Group",
      contacts: [
      {id:7, name: "Itay", type: "Contact"},
      ]
      },
      ]
      },
      {
      id:4,
      name: "Family",
      type: "Group",
      contacts: [
      {id:5, name: "Roni", type: "Contact"},
      ]
      },
      {id: 8, name: "Ori", type: "Contact"},
      ];
}
