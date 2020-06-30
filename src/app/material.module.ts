import { ModuleWithProviders, NgModule} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
  ]
})
export class MaterialModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: [MatIconRegistry]
    };
  }
}
