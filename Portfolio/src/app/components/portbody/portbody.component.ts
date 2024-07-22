import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-portbody',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './portbody.component.html',
  styleUrl: './portbody.component.css'
})
export class PortbodyComponent {
  constructor(private router:Router , private route:ActivatedRoute){}

}
