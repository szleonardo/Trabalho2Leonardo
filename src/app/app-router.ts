import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { CadastroCliente } from './pages/cadastro-cliente/cadastro-cliente';
import { NgModule } from '@angular/core';
import { AlterarSenha } from './pages/alterar-senha/alterar-senha';
import { CadastroUsuario } from './pages/cadastro-usuario/cadastro-usuario';

export const appRoutes: Routes = [

    {
        path: 'cadastrar-cliente',
        component: CadastroCliente
    },{
        path:'alterar-senha',
        component:AlterarSenha
    },{
        path:'cadastrar-usuario',
        component: CadastroUsuario
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoute {
    
    constructor(router: Router) {
    }
}