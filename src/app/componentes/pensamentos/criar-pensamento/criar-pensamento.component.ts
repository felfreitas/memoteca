import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


  formulario!: FormGroup;

  constructor(private service: PensamentoService,
    private router: Router,
    private formBuilder : FormBuilder
  ) {
   }

  ngOnInit(): void {
    this.buildForm();

  }

  buildForm(){
    this.formulario = this.formBuilder.group({
      conteudo:['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|s)*\S(.|s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      modelo:['modelo1'],
    });

  }

  criarPensamento(){
    console.log("o formulario esta aqui: ", this.formulario);
    console.log("o formulario esta aqui: ", this.formulario.get('autoria')?.errors);

    if(this.formulario.valid){
      console.log("estpa valido??");

      this.service.criar(this.formulario.value).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(){
    console.log("formulario está valid? ", this.formulario);

    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }


}
