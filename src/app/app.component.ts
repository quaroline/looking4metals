import { AfterViewInit, Component, HostListener } from '@angular/core';
import { LanguagePick } from './utils/language-pick';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Looking 4 Metals';

  scrolled: boolean = false;

  constructor(private languagePick: LanguagePick) {
    this.languagePick.init();
  }

  @HostListener('document:mousewheel', ['$event'])
  onDocumentMousewheelEvent() {
    this.customizeNavbar();
  }

  customizeNavbar(): void {
    let element = document.querySelector('#navbar') as HTMLElement;

    if (element) {
      if (document.body.scrollTop >= element.clientHeight) {
        this.scrolled = true;

        element.classList.add('scrolled');
      } else {
        this.scrolled = false;

        element.classList.remove('scrolled');
      }
    }
  }
}
