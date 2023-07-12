import { Component } from '@angular/core';

interface Subcategory {
  name: string;
}

interface Category {
  name: string;
  isOpen: boolean;
  subcategories?: Subcategory[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;
  categories: Category[] = [
    {
      name: 'Category 1',
      isOpen: false,
      subcategories: [
        { name: 'Subcategory 1.1' },
        { name: 'Subcategory 1.2' }
      ]
    },
    {
      name: 'Category 2',
      isOpen: false,
      subcategories: [
        { name: 'Subcategory 2.1' },
        { name: 'Subcategory 2.2' }
      ]
    },
    {
      name: 'Category 3',
      isOpen: false
    }
  ];

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  expandSidebar() {
    this.isCollapsed = false;
  }

  collapseSidebar() {
    this.isCollapsed = true;
  }

  toggleCategory(category: Category) {
    category.isOpen = !category.isOpen;
  }
}
