import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {xxxPostReducer} from "./xxx-post.reducer";
import {XxxPostComponent} from "./xxx-post.component";
import {XxxPostEffects} from "./xxx-post.effects";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {xxxPostFeatureName} from "./xxx-post.types";
import {AsyncPipe, CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [XxxPostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(xxxPostFeatureName, {xxxPostReducer: xxxPostReducer}),
    EffectsModule.forFeature([XxxPostEffects]),
    AsyncPipe,
    ReactiveFormsModule,
  ],
})
export class XxxPostModule {
}
