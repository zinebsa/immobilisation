import { NgModule } from '@angular/core';

import { ImmobilisationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ImmobilisationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ImmobilisationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ImmobilisationSharedCommonModule {}
