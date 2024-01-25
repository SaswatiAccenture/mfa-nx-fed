import { Component } from '@angular/core';

@Component({
  selector: 'nx-demo-angular-item-details-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class ItemDetailsRemoteEntryComponent {
  dataFetched:any;

  

  ngOnInit(): void {
    window.addEventListener('searchName',(response:any) => {
      this.dataFetched = response?.detail;
      console.log('data',response)
    })
  }
}
