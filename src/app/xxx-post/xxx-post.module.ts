import {NgModule} from '@angular/core';
import {XxxPostComponent} from "./xxx-post.component";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {XxxPostStateModule} from "./xxx-post.state.module";
import {XxxPostRoutingModule} from "./xxx-post-routing.module";
import {XxxPostEditComponent} from "./xxx-post-edit/xxx-post-edit.component";

@NgModule({
  declarations: [
    XxxPostComponent,
    XxxPostEditComponent
  ],
  imports: [
    CommonModule,
        AsyncPipe,
        ReactiveFormsModule,
        XxxPostStateModule,
        XxxPostRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class XxxPostModule {
}
