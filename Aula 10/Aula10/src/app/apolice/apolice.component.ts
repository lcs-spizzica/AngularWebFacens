import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent implements OnInit {

  idade:number
  nomeSegurado:string
  valorAutomovel:number
  sexo:string
  formulario:FormGroup

  valorApolice:number = 0

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {  this.formulario = this.formBuilder.group({
    idade: ['',  [Validators.required]],  sexo: ['',  [Validators.required]],  nomeSegurado: ['',  [Validators.required]], valorAutomovel: ['',  [Validators.required]], valorApolice: ['',  [Validators.required]]
  });
  }

  // Apólice de Seguro• Crie um formulário de apólice para seguro automobilístico. Para isso o consultor preencherá: Nome do segurado, o sexo, a idade e o valor do automóvel. Mediante a regra abaixo calcule e exiba o valor da apólice de seguro:
  // • Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
  // • Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
  // • Se sexo for feminino: Valor da apólice = 8% do valor do automóvel

calcularApolice(){

  if (this.sexo == "masculino" && this.idade <= 25) {
    this.valorApolice += (0.15 * this.valorAutomovel)

  }else if (this.sexo == "masculino" && this.idade <= 25) {
    this.valorApolice += (0.10 * this.valorAutomovel)

  } else {
    this.valorApolice += this.valorApolice * (0.08 * this.valorAutomovel)
  }
}

}

