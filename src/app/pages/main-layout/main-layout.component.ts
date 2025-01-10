import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  breadcrumbItems: string[] = [];
  updateBreadcrumb(newBreadcrumb: string[]): void {
    this.breadcrumbItems = newBreadcrumb;
  }
}
