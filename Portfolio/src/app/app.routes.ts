import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: 'Home', loadComponent: () => import ('../app/components/portbody/portbody.component').then(h=>h.PortbodyComponent) },
    {path: 'about', loadComponent: ()=> import ('../app/components/about/about.component').then(a=>a.AboutComponent)},
    {path: 'projects', loadComponent: () => import ('../app/components/projects/projects.component').then(p=>p.ProjectsComponent)},
    {path: 'services', loadComponent: ()=> import ('../app/components/services/services.component').then(s=>s.ServicesComponent)},
    {path:'contact', loadComponent: ()=> import ('../app/components/contact/contact.component').then(c=>c.ContactComponent)} 
];
