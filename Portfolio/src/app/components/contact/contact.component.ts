import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  isSending = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

    emailjs.init('afyXvAydRYgIjmyjW'); 
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.errorMessage = 'Please fill out all required fields.';
      return;
    }
console.log('Sending with payload:', this.form.value);

    this.isSending = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const response = await emailjs.send('service_asfj9ln', 'template_0cfnp7m', {
        from_name: this.form.value.name,
        from_email: this.form.value.email,
        subject: this.form.value.subject,
        message: this.form.value.message,
      });

      if (response.status === 200) {
        this.successMessage = 'Message sent successfully!';
        this.form.reset();
      } else {
        this.errorMessage = 'Failed to send message. Please try again.';
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      this.errorMessage = 'Network or API error. Try again.';
    } finally {
      this.isSending = false;
    }
  }
}
