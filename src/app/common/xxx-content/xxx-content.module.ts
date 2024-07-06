import {NgModule} from '@angular/core';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {XxxContentStateModule} from "./xxx-content.state.module";

@NgModule({
  imports: [XxxContentStateModule],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class XxxContentModule {
}
