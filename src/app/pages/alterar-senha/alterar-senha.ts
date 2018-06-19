import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { alterarSenha } from '../../model/alterarSenha';

@Component({
    selector:'alterar-senha',
    styleUrls:['alterar-senha.scss'],
    templateUrl:'alterar-senha.html'
})
export class AlterarSenha implements OnInit {
    public formGroup:FormGroup;
    public senhaAtual:string;
    public alterarSenha:alterarSenha = new alterarSenha();
    public confirmeSenha:string;

    constructor(private fb:FormBuilder){}

    ngOnInit(){
        const senhaAtual = new FormControl('', Validators.required);
        const novaSenha = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(50)]));
        const confirmeSenha = new FormControl('', Validators.required);
        
        this.formGroup = this.fb.group({
            usuario: ['', Validators.compose([Validators.required])],
            senhaAtual: senhaAtual,
            novasenha: novaSenha,
            confirmeSenha: confirmeSenha
        });

        let user = localStorage.getItem('alterarSenha');
        if (user != null){
            this.alterarSenha = JSON.parse(user);
        }
    }


    public onChangeNewSenha(){
        if ( this.confirmeSenha != null && this.alterarSenha.novasenha != null){
            if (this.confirmeSenha != this.alterarSenha.novasenha ){
                this.formGroup.controls.confirmeSenha.setErrors({ senhaNaoConfere: true} );
            }else {
                this.formGroup.controls.confirmeSenha.setErrors(null);
            }
        }
    }

    public alterar(){
        console.log(this.alterarSenha);
        let user = JSON.stringify(this.alterarSenha);
        localStorage.setItem('alterarSenha', user);
        alert('Alterou o Usuário nos logs');
    }

}