import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {NgModule} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {XxxContentModule} from "../common/xxx-content/xxx-content.module";
import {XxxHomeComponent} from "./xxx-home.component";
import {XxxHomeRoutingModule} from "./xxx-home-routing.module";

@NgModule({
    declarations: [XxxHomeComponent],
    imports: [
        AsyncPipe,
        NgIf,
        RouterLink,
        RouterLinkActive,
        XxxContentModule,
        XxxHomeRoutingModule,
        JsonPipe,
    ],
    exports: [XxxHomeComponent]
})
export class XxxHomeModule { }
