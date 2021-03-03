import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TestPlan } from './TestPlan';

@Component({
  selector: 'app-test-plan',
  templateUrl: './test-plan.component.html',
  styleUrls: ['./test-plan.component.css']
})
export class TestPlanComponent implements OnInit {
  formulario: FormGroup

  constructor(
          private formBuilder: FormBuilder, 
          private http: HttpClient
) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      name: [null],
      areaPath: [null],
      iteration: [null]
    })
  }

   headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Accept': '*/*',
    'Access-Control-Allow-Headers': 'Accept',
    'Authorization': `Basic ${environment.token}`
  }

   requestOptions = {
    headers: new HttpHeaders(this.headers)
  }

  onSubmit(){        
    console.log(this.formulario.value)
     this.http.post(
          'https://dev.azure.com/alexandrequeiroz0023/front-end/_apis/testplan/plans?api-version=6.1-preview.1',
                  JSON.stringify(this.formulario.value), this.requestOptions
     ).subscribe(dados => {
                  console.log(dados)
                })
    }

  resetar(){
    this.formulario.reset();
  }

}
