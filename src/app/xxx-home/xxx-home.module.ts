import { NgModule } from '@angular/core';
import {XxxHomeComponent} from "./xxx-home.component";
import {RouterLinkActive, RouterLink} from "@angular/router";
import {XxxHomeRoutingModule} from "./xxx-home-routing.module";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";


@NgModule({
    declarations: [XxxHomeComponent],
  imports: [
    RouterLink,
    RouterLinkActive,
    XxxHomeRoutingModule,
    AsyncPipe,
    NgIf,
    JsonPipe
  ],
    exports: [
        XxxHomeComponent
    ]
})
export class XxxHomeModule { }
