import { AppComponent } from './app.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestPlanComponent} from 'src/app/test-plan/test-plan.component'
import {TestCaseComponent} from 'src/app/test-case/test-case.component'


const routes: Routes = [
  {path:'',component: AppComponent,},
  {path:'testCase', component: TestCaseComponent},
  {path:'testPlan', component: TestPlanComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
