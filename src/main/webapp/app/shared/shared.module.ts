import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImmobilisationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ImmobilisationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ImmobilisationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImmobilisationSharedModule {
  static forRoot() {
    return {
      ngModule: ImmobilisationSharedModule
    };
  }
}
