import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriasComponent } from "src/categorias/categorias.component";
import { TasksRegisterComponent } from "src/tasks-register/tasks-register.component";

const routes:Route[] = [
    {
        path: 'categoria',
        component: CategoriasComponent
    },
    {
        path: 'tarefas',
        component: TasksRegisterComponent
    },

    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'tarefas'
    },//default route
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRountingModule{}