import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:'first', component: PersonComponent},
  {path:'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
