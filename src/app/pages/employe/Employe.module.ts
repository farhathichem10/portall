import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { Ng5SliderModule } from 'ng5-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbNavModule, NgbDropdownModule, NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfopersComponent } from './infopers/infopers.component';
import { EmployeRoutingModule } from './Employe-routing.module';
import { InfoprofComponent } from './infoprof/infoprof.component';
import { AggridadressComponent } from './aggridadress/aggridadress.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { GridetabComponent } from './gridetab/gridetab.component';
import { MdpComponent } from './mdp/mdp.component';
import { ComptepersComponent } from './comptepers/comptepers.component';
import { ExprienceprofComponent } from './exprienceprof/exprienceprof.component';
import { IndimniteComponent } from './indimnite/indimnite.component';
import { InfosocComponent } from './infosoc/infosoc.component';
import { ConjointComponent } from './conjoint/conjoint.component';
import { EnfantComponent } from './enfant/enfant.component';
import { ScolenfantComponent } from './scolenfant/scolenfant.component';
import { AffilComponent } from './affil/affil.component';


const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 100,
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    InfopersComponent,
    InfoprofComponent,
    AggridadressComponent,
    GridetabComponent,
    MdpComponent,
    ComptepersComponent,
    ExprienceprofComponent,
    IndimniteComponent,
    InfosocComponent,
    ConjointComponent,
    EnfantComponent,
    ScolenfantComponent,
    AffilComponent
    
  ],
  imports: [
    AgGridModule,
    CommonModule,
    EmployeRoutingModule,
    NgbNavModule,
    NgbModalModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbDropdownModule,
    DropzoneModule,
    ReactiveFormsModule,
    UIModule,
    WidgetModule,
    Ng5SliderModule,
    NgSelectModule,
    NgbPaginationModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: config
    }
  ]
})
export class EmployeModule { }
