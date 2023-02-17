import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AsignaturaModel } from 'src/app/model/asignatura-model';
import { AsignaturaService } from 'src/app/service/asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.sass']
})
export class AsignaturaComponent implements OnInit {

  listAsignatura: AsignaturaModel [] = [];
  formAsignatura: FormGroup = new FormGroup({});

  constructor(private asignaturaservice: AsignaturaService){}

  ngOnInit(): void {
    this.list();
    this.formAsignatura = new FormGroup({
      codAsignatura: new FormControl(''),
      nomAsignatura: new FormControl(''),
      numCredAsignatura: new FormControl('')
    })
  }

  list(){
    this.asignaturaservice.getAsignatura().subscribe(resp=>{
      if(resp){
        this.listAsignatura = resp;
      }
    })
  }
  

}
