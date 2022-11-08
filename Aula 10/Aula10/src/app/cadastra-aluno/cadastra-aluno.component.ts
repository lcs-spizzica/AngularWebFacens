import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastra-aluno',
  templateUrl: './cadastra-aluno.component.html',
  styleUrls: ['./cadastra-aluno.component.css']
})
export class CadastraAlunoComponent implements OnInit {

  nome:string
  ra:string
  email:string
  celular:string

  formAluno:boolean = false

  @Input() num1 : number=3;
  @Output() num1Change = new EventEmitter<number>();
  inativo : boolean = false;
  estiloBotao : string = "btn btn-primary"
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['',  [Validators.required]],  ra: ['',  [Validators.required]],  email: ['',  [Validators.required]],  celular: ['',  [Validators.required]], 
    });
  }
  mudarValorNum1(){
    this.num1 = this.num1 * 2;
    this.num1Change.emit(this.num1);
  }

}
