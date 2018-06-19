import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../model/usuario';
@Component({
    selector:'cadastro-usuario',
    templateUrl:'cadastro-usuario.html',
    styleUrls:['cadastro-usuario.scss']
})
export class CadastroUsuario implements OnInit {

    public formGroup:FormGroup;
    public usuario:Usuario = new Usuario();
    constructor(private formBuilder:FormBuilder){
        this.formGroup = this.formBuilder.group({
            codigo:[null ],
            nome:[null, Validators.required],
            cpf:[''],
            email:[null, Validators.required],
            login:[null, Validators.required],
            senha:[null, Validators.required],
            confirmesenha:[null, Validators.required],
            apelido:[null, Validators.required],
            telefone:[null, Validators.required],
            celular:[null, Validators.required],
            grupousuario:[null, Validators.required]
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