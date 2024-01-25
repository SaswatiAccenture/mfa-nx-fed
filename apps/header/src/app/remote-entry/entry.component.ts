import { Component } from '@angular/core';

@Component({
  selector: 'nx-demo-angular-header-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class HeaderRemoteEntryComponent {
  emitData(event: any) {
    const customEvent = new CustomEvent('searchName', {
      detail: event.target.value,
    });
    window.dispatchEvent(customEvent);
  }
}
