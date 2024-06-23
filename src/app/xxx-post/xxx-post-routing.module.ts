import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {XxxPostComponent} from "./xxx-post.component";

const routes: Routes = [
  {path: '', component: XxxPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XxxPostRoutingModule {
}
