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
    'Authorization': `Bearer ${environment.token}`,
    'client_id':'232018A4-CFE2-41B9-B415-C5982EBCF6CA',
    'response_type':'Assertion',
    'scope':'vso.analytics vso.auditlog vso.auditstreams_delete vso.auditstreams_manage vso.code_full vso.connected_server vso.dashboards_manage vso.entitlements vso.environment_manage vso.extension.data_write vso.extension_manage vso.gallery_acquire vso.gallery_manage vso.graph_manage vso.identity_manage vso.loadtest_write vso.machinegroup_manage vso.memberentitlementmanagement_write vso.notification_diagnostics vso.notification_manage vso.packaging_manage vso.profile_write vso.project_manage vso.release_manage vso.securefiles_manage vso.security_manage vso.serviceendpoint_manage vso.symbols_manage vso.taskgroups_manage vso.test_write vso.tokenadministration vso.tokens vso.variablegroups_manage vso.wiki_write vso.work_full',
    'redirect_uri':'https://wonderful-wave-0bae67a10.azurestaticapps.net/'

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
