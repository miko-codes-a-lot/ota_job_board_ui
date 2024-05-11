import { Component, OnInit } from '@angular/core';

import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ota_jboard_ui';

  profile?: KeycloakProfile;

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    if (this.keycloakService.isLoggedIn()) {
      this.keycloakService.loadUserProfile().then(profile => {
        this.profile = profile;
        console.log(this.profile, 'profile')
      })
    }
  }
}
