import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  constructor(private keycloakService: KeycloakService) {}

  async onLogin() {
    await this.keycloakService.login({
      redirectUri: window.location.origin
    });
  }
}
