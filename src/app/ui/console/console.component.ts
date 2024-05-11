import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrl: './console.component.css'
})
export class ConsoleComponent {
  constructor(private keycloakService: KeycloakService) {}

  logout() {
    this.keycloakService.logout(window.location.origin);
  }
}
