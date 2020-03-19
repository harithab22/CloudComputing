import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../local-storage.service';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyForm: FormGroup;
  constructor(public fb: FormBuilder, public http: HttpClient, public localStorage: LocalStorageService) { }

  ngOnInit() {
    this.surveyForm = this.fb.group({
      Nameoftheemployee : ['', [Validators.required, Validators.minLength(6)]],
      Gender : ['', [Validators.required]],
      Recommend : ['', [Validators.required]],
      latetowork : ['' , [Validators.required]],
      timeworked : ['' , [Validators.required]],
      attention : ['' , [Validators.required]],
      deadlines : ['' , [Validators.required]],
      productive : ['' , [Validators.required]],
      friendly : ['' , [Validators.required]],
      independent : ['' , [Validators.required]],
      proactive : ['' , [Validators.required]],
      criticism : ['' , [Validators.required]],
      priorities : ['' , [Validators.required]],
      listareas : ['' , [Validators.required]],
      improvement : ['']
    });
  }

  store() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://127.0.0.1:5000/store?username=' + this.localStorage.getUserEmail()
      + '&Nameoftheemployee=' + this.surveyForm.get('Nameoftheemployee').value
      + '&latetowork=' + this.surveyForm.get('latetowork').value
      + '&attention=' + this.surveyForm.get('attention').value
      + '&Recommend=' + this.surveyForm.get('Recommend').value
      + '&deadlines=' + this.surveyForm.get('deadlines').value
      + '&productive=' + this.surveyForm.get('productive').value
      + '&friendly=' + this.surveyForm.get('friendly').value
      + '&independent=' + this.surveyForm.get('independent').value
      + '&proactive=' + this.surveyForm.get('proactive').value
      + '&criticism=' + this.surveyForm.get('criticism').value
      + '&priorities=' + this.surveyForm.get('priorities').value
      + '&listareas=' + this.surveyForm.get('listareas').value
      + '&improvement=' + this.surveyForm.get('improvement').value
      + '&Gender=' + this.surveyForm.get('Gender').value).subscribe();
  }
}
