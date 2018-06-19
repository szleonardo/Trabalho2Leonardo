import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../model/cliente';
@Component({
    selector:'cadastro-cliente',
    styleUrls:['cadastro-cliente.scss'],
    templateUrl:'cadastro-cliente.html'
})
export class CadastroCliente implements OnInit {

    public formGroup:FormGroup;
    public cliente:Cliente = new Cliente();
    constructor(private formBuilder:FormBuilder){
         this.formGroup = this.formBuilder.group({
            codigo:[null ],
            razaosocial:[null, Validators.required],
            fantasia:[null, Validators.required],
            cpfcnpj:[null, Validators.required],
            rg:[''],
            cep:[null, Validators.required],
            celular:[null, Validators.required],
            telefone:[null, Validators.required],
            datanasci:[null, Validators.required],
            email:[null, Validators.required],
            estado:[null, Validators.required],
            cidade:[null, Validators.required],
            bairro:[null, Validators.required],
            rua:[null, Validators.required],
            numero:[null, Validators.required],
            complemento:[null, Validators.required]
        });
    }
    ngOnInit(){
        
        console.log(this.formGroup);
    }
    public salvar(){
        if (this.formGroup.invalid){
            return;
        }
        alert('Salvo com sucesso!');
    }
}