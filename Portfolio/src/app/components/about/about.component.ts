import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor ( private route:ActivatedRoute){}
  
downloadCV(): void {
  const link = document.createElement('a');
  link.href = 'assets/CHRISTIANABIODUNCURRICULUM.pdf';
  link.download = 'Christian_Abiodun_CV.pdf';
  link.click();
}
  ngAfterViewInit(): void {
    const circles = document.querySelectorAll('.progress-item');
    circles.forEach((item: any) => {
      const circle = item.querySelector('svg circle:last-child');
      const percentage = item.getAttribute('data-percentage');
      const radius = 50;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percentage / 100) * circumference;

      // Small delay so animation runs smoothly after DOM is painted
      setTimeout(() => {
        circle.style.strokeDashoffset = offset.toString();
      }, 300);
    });
  }
}
