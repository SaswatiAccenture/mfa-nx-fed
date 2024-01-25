import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule, } from '@nx/angular/mf';
@Component({
  selector: 'nx-demo-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell-app';
  updateCurrentUser(user: any) {
    //To Be Implemented Later
  }



  @ViewChild('headerPlaceHolder', { read: ViewContainerRef })
  headerContainerRef!: ViewContainerRef;
  
  @ViewChild('footerPlaceHolder', { read: ViewContainerRef })
  footerContainerRef!: ViewContainerRef;

  @ViewChild('sideNavPlaceHolder', { read: ViewContainerRef })
  sideNavContainerRef!: ViewContainerRef;

  @ViewChild('itemDetailsPlaceHolder', { read: ViewContainerRef })
  itemDetailsContainerRef!: ViewContainerRef;

  constructor(private ref: ViewContainerRef) {
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  async ngOnInit() {
    const { SideNavRemoteEntryComponent} = await import('side-nav/component');
    const { FooterRemoteEntryComponent} = await import('footer/component');
    const { HeaderRemoteEntryComponent} = await import('header/component');
    const { ItemDetailsRemoteEntryComponent} = await import('item-details/component');
    
    this.headerContainerRef.createComponent(HeaderRemoteEntryComponent);
    this.sideNavContainerRef.createComponent(SideNavRemoteEntryComponent);
    this.itemDetailsContainerRef.createComponent(ItemDetailsRemoteEntryComponent);
    this.footerContainerRef.createComponent(FooterRemoteEntryComponent);
}
}