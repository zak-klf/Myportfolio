import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private renderer: Renderer2) {

  }

  showMenu = false;

  @ViewChild('menuBtn') menuBtn!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('menuNav') menuNav!: ElementRef;
  @ViewChild('menuBranding') menuBranding!: ElementRef;
  @ViewChild('navItems') navItems!: ElementRef;

  toggleNavbar() {
    this.showMenu = !this.showMenu;

    if (this.showMenu) {
      this.renderer.addClass(this.menuBtn.nativeElement, 'close');
      this.renderer.addClass(this.menu.nativeElement, 'show');
      this.renderer.addClass(this.menuNav.nativeElement, 'show');
      this.renderer.addClass(this.menuBranding.nativeElement, 'show');

      const navItems = this.navItems.nativeElement.children;
      for (let i = 0; i < navItems.length; i++) {
        this.renderer.addClass(navItems[i], 'show');
      }
    } else {
      this.renderer.removeClass(this.menuBtn.nativeElement, 'close');
      this.renderer.removeClass(this.menu.nativeElement, 'show');
      this.renderer.removeClass(this.menuNav.nativeElement, 'show');
      this.renderer.removeClass(this.menuBranding.nativeElement, 'show');

      const navItems = this.navItems.nativeElement.children;
      for (let i = 0; i < navItems.length; i++) {
        this.renderer.removeClass(navItems[i], 'show');
      }
    }
  }
}
