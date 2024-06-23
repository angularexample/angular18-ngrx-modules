import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {XxxPostGuard} from "./xxx-post/xxx-post.guard";

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>  import('./xxx-user/xxx-user.module').then(m => m.XxxUserModule)
  },
  {
    path: 'post',
    loadChildren: () =>  import('./xxx-post/xxx-post.module').then(m => m.XxxPostModule),
    canActivate: [XxxPostGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
