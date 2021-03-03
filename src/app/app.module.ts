import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestPlanComponent } from './test-plan/test-plan.component';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { TestCaseComponent } from './test-case/test-case.component';
import {AppRoutingModule} from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestPlanComponent,
    FormDebugComponent,
    TestCaseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
