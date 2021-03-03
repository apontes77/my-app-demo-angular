import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit {
  formulario: FormGroup

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      testPlanName: [null],
      areaPath: [null],
      iteration: [null],
      steps: [null]
    })
  }

  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization': `Basic ${environment.token}`
  }

   requestOptions = {
    headers: new HttpHeaders(this.headers)
  }

  onSubmit(){        
    console.log(this.formulario.value)
     this.http.post(
          'https://dev.azure.com/alexandrequeiroz0023/front-end/_apis/wit/workitems/$Test Case?api-version=6.0',
                  JSON.stringify(this.formulario.value), this.requestOptions
     ).subscribe(dados => {
                  console.log(dados)
                })
    }

  resetar(){
    this.formulario.reset();
  }

}
