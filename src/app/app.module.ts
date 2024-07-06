import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {XxxHeaderModule} from "./xxx-header/xxx-header.module";
import {XxxLoadingModule} from "./common/xxx-loading/xxx-loading.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    XxxHeaderModule,
    XxxLoadingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}), XxxLoadingModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
  ]
})
export class AppModule {
}
