import {NgModule} from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {xxxUserReducer} from "./xxx-user.reducer";
import {XxxUserComponent} from "./xxx-user.component";
import {xxxUserFeatureName} from "./xxx-user.types";
import {XxxUserEffects} from "./xxx-user.effects";
import {XxxUserRoutingModule} from "./xxx-user-routing.module";

@NgModule({
  declarations: [
    XxxUserComponent
  ],
  imports: [
    HttpClientModule,
    XxxUserRoutingModule,
    StoreModule.forFeature(xxxUserFeatureName, {xxxUserReducer: xxxUserReducer}),
    EffectsModule.forFeature([XxxUserEffects]),
  ],
})
export class XxxUserModule {
}
