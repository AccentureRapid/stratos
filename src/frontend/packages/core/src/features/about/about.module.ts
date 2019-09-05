import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CustomImportModule } from '../../custom-import.module';
import { SharedModule } from '../../shared/shared.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutRoutingModule } from './about.routing';
import { EulaPageComponent } from './eula-page/eula-page.component';
import { DiagnosticsPageComponent } from './diagnostics-page/diagnostics-page.component';
import { StratosComponentsModule } from '@stratos/shared';



@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    StratosComponentsModule,
    AboutRoutingModule,
    CustomImportModule
  ],
  declarations: [
    AboutPageComponent,
    EulaPageComponent,
    DiagnosticsPageComponent
  ]
})
export class AboutModule { }
