import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { I18nPluralPipeComponent } from './i18n-plural-pipe/i18n-plural-pipe.component';
import { I18nSelectPipeComponent } from './i18n-select-pipe/i18n-select-pipe.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { SimplePipesComponent } from './simple-pipes/simple-pipes.component';
import { SlicePipeComponent } from './slice-pipe/slice-pipe.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { UsingCustomPipeComponent } from './using-custom-pipe/using-custom-pipe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple-pipes', component: SimplePipesComponent },
  { path: 'slice-pipe', component: SlicePipeComponent },
  { path: 'i18nPlural-pipe', component: I18nPluralPipeComponent },
  { path: 'i18nSelect-pipe', component: I18nSelectPipeComponent },
  { path: 'async-pipe', component: AsyncPipeComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'using-custom-pipe', component: UsingCustomPipeComponent },
];