import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { initializeKeycloak } from './keycloak.init';
import { UserComponent } from './ui/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    KeycloakAngularModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
