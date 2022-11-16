import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfopersComponent } from './infopers/infopers.component';
import { InfoprofComponent } from './infoprof/infoprof.component';
import { InfosocComponent } from './infosoc/infosoc.component';



const routes: Routes = [
    {
        path: 'infopers',
        component: InfopersComponent
    },
    {
        path: 'infoprof',
        component: InfoprofComponent
    },
    {
        path: 'infosoc',
        component: InfosocComponent
    },
    

  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeRoutingModule {}
