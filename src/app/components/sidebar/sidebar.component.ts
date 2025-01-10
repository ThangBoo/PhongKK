import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() breadcrumbChange = new EventEmitter<string[]>();

  emitBreadcrumb(breadcrumb: string[]): void {
    this.breadcrumbChange.emit(breadcrumb);
  }
}
