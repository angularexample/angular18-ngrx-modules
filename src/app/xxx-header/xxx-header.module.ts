import { NgModule } from '@angular/core';
import {XxxHeaderComponent} from "./xxx-header.component";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";


@NgModule({
    declarations: [XxxHeaderComponent],
  imports: [
    RouterLinkWithHref,
    RouterLinkActive
  ],
    exports: [
        XxxHeaderComponent
    ]
})
export class XxxHeaderModule { }
