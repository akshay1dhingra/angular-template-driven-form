import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  dropdownOptions = [
    { id: 1, category: 'one' },
    { id: 2, category: 'two' },
    { id: 3, category: 'three' }
  ];

  myStyles = {
    'font-weight': 'bold'
  };

  log(x) { console.log(x); }

  submit(f) {
    console.log(f);
  }

  reset() {
    console.log("reset worked")
  }

}
