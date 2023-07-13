import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { label: 'Menu 1', isActive: true },
    { label: 'Menu 2', isActive: false },
    {
      label: 'Menu 3',
      isActive: false,
      subItems: [
        { label: 'Submenu 1' },
        { label: 'Submenu 2' },
        { label: 'Submenu 3' }
      ]
    }
  ];

  constructor(private renderer: Renderer2) {}

  toggleMenuItem(item: any) {
    item.isActive = !item.isActive;
  }

  selectSubItem(subItem: any) {
    // Lógica para lidar com a seleção de subitens do menu
  }
}
