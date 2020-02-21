import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ["React", "Angular", "Sql", "Java"];

  userModel: User = {
    "name": "ajeet",
    "email": "ajeet@wdg.com",
    "phone": "7827817872",
    "subscribe": true,
    "timepreference": "Morning",
    "topic": "default",
    "address": {
      "street": "89",
      "city": "kanpur",
      "state": "UP",
      "pincode": "873878"
    }

  }

  topicHasError = true;

  validate(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit() {
    console.log(this.userModel);
  }
}
