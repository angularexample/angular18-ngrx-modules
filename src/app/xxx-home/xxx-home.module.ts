import { NgModule } from '@angular/core';
import {XxxHomeComponent} from "./xxx-home.component";
import {RouterLinkActive, RouterLink} from "@angular/router";


@NgModule({
    declarations: [XxxHomeComponent],
  imports: [
    RouterLink,
    RouterLinkActive
  ],
    exports: [
        XxxHomeComponent
    ]
})
export class XxxHomeModule { }
