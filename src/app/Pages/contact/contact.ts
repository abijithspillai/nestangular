import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  onSubmit() {
    if (this.name && this.email && this.message) {
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        message: this.message
      });
      this.submitted = true;
      // Reset form
      this.name = '';
      this.email = '';
      this.message = '';
      setTimeout(() => this.submitted = false, 3000);
    }
  }
}