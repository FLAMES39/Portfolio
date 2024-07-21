import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portbody',
  standalone: true,
  imports: [],
  templateUrl: './portbody.component.html',
  styleUrl: './portbody.component.css'
})
export class PortbodyComponent {
  constructor(private router:Router , private route:ActivatedRoute){}

}
