import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{



  form!:FormGroup
  constructor( private route:ActivatedRoute, private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.form=this.fb.group({
      Name:['',[Validators.required]],
      Email:['',[Validators.required]],
      Subject:['', [Validators.required]],
      message:['', [Validators.required]]
    })
  }
  onSubmit(){

  }

}
