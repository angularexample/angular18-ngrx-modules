import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {XxxUserComponent} from "./xxx-user.component";
import {XxxUserRoutingModule} from "./xxx-user-routing.module";
import {XxxUserStateModule} from "./xxx-user.state.module";
import {XxxContentModule} from "../common/xxx-content/xxx-content.module";

@NgModule({ declarations: [
        XxxUserComponent
    ], imports: [CommonModule,
        XxxUserRoutingModule,
        XxxUserStateModule,
        AsyncPipe,
        JsonPipe, XxxContentModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class XxxUserModule {
}
