import { Component } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})

export class MainNavbarComponent {


  isMenuOpened1: boolean = false;
  isMenuOpened2: boolean = false;
  isMenuOpened3: boolean = false;

  isMobileMenuOpened: boolean = false;

  changeArrow1: boolean = false;
  changeArrow2: boolean = false;
  changeArrow3: boolean = false;
  changeArrow4: boolean = false;

  toggleMenu1(): void {
    this.isMenuOpened1 = !this.isMenuOpened1;
  }

  toggleMenu2(): void {
    this.isMenuOpened2 = !this.isMenuOpened2;
  }

  toggleMenu3(): void {
    this.isMenuOpened3 = !this.isMenuOpened3;
  }

  changeArrowFunc1(): void {
    this.changeArrow1 = !this.changeArrow1;
  }
  changeArrowFunc2(): void {
    this.changeArrow2 = !this.changeArrow2;
  }
  changeArrowFunc3(): void {
    this.changeArrow3 = !this.changeArrow3;
  }
  changeArrowFunc4(): void {
    this.changeArrow4 = !this.changeArrow4;
  }


  showMobileMenu(): void {
    this.isMobileMenuOpened = !this.isMobileMenuOpened;

    let overlay = document.querySelector<HTMLElement>('.overlay');

    if (overlay != null) {
      overlay.style.opacity = '1';
      overlay.style.visibility = 'visible';
    }
  }


  hideModileMenu() {
    let overlay = document.querySelector<HTMLElement>('.overlay');

    if (overlay != null) {
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
    }

    this.isMobileMenuOpened = false;  
  }

}
