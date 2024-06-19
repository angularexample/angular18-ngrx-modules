import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {XxxUserComponent} from "./xxx-user.component";
import {XxxUserRoutingModule} from "./xxx-user-routing.module";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {XxxUserStateModule} from "./xxx-user.state.module";

@NgModule({
  declarations: [
    XxxUserComponent
  ],
  imports: [
    HttpClientModule,
    XxxUserRoutingModule,
    XxxUserStateModule,
    AsyncPipe,
    JsonPipe,
  ],
})
export class XxxUserModule {
}
