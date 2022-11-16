import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeAutorisationComponent } from './demande-autorisation/demande-autorisation.component';
import { DemandeCongeComponent } from './demande-conge/demande-conge.component';
import { DemandeDocumentComponent } from './demande-document/demande-document.component';
import { DemandeFormationComponent } from './demande-formation/demande-formation.component';
import { DemandePretAvanceComponent } from './demande-pret-avance/demande-pret-avance.component';
import { DemandeSituationComponent } from './demande-situation/demande-situation.component';



const routes: Routes = [
    {
        path: 'PretAvance',
        component: DemandePretAvanceComponent
    },
    {
        path: 'Autorisation',
        component: DemandeAutorisationComponent
    },
    {
        path: 'Situation',
        component: DemandeSituationComponent
    },
    {
        path: 'Formation',
        component: DemandeFormationComponent
    },
    {
        path: 'Document',
        component: DemandeDocumentComponent
    },
    {
        path: 'Conge',
        component: DemandeCongeComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CryptoRoutingModule { }