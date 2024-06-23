import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {XxxUserComponent} from "./xxx-user.component";
import {XxxUserRoutingModule} from "./xxx-user-routing.module";
import {XxxUserStateModule} from "./xxx-user.state.module";

@NgModule({
  declarations: [
    XxxUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    XxxUserRoutingModule,
    XxxUserStateModule,
    AsyncPipe,
    JsonPipe,
  ],
})
export class XxxUserModule {
}
