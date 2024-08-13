import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MailService } from '../../Services/mail.service';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{



  form!:FormGroup
  constructor( private route:ActivatedRoute, private fb:FormBuilder, private emailService:MailService){

  }
  ngOnInit(): void {
    this.form=this.fb.group({
      Name:['',[Validators.required]],
      email:['',[Validators.required]],
      Subject:['', [Validators.required]],
      message:['', [Validators.required]]
    })
  }
  onSubmit(){
    if(!this.form.value){
      
    }
  }


  async send(){
    emailjs.init("Wb0RTaUqZLLAeqcyD")
   let response = await emailjs.send("service_bbtvg72","template_nwfw0is",{
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      Subjext: this.form.value.Subject,
      message:this.form.value.message,
      });

      alert("Message sent successfull")
      this.form.reset();
  }
 

}
