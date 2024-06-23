import {NgModule} from '@angular/core';
import {XxxPostComponent} from "./xxx-post.component";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {XxxPostStateModule} from "./xxx-post.state.module";
import {XxxPostRoutingModule} from "./xxx-post-routing.module";

@NgModule({
  declarations: [XxxPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AsyncPipe,
    ReactiveFormsModule,
    XxxPostStateModule,
    XxxPostRoutingModule
  ],
})
export class XxxPostModule {
}
