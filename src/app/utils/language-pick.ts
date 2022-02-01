import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class LanguagePick {

  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    this.flagsDiv = document.querySelector('#flags') as HTMLElement;
  }

  flags: any[] = [
    {
      id: 'pt',
      class: 'flag selected',
      src: 'assets/img/pt.png',
      title: 'Português',
      alt: 'Freepik\'s Brazilian flag (International Flags pack)'
    },
    {
      id: 'en',
      class: 'flag',
      src: 'assets/img/en.png',
      title: 'English',
      alt: 'Freepik\'s United Kingdom flag (International Flags pack)'
    }
  ];

  flagsDiv: HTMLElement | undefined;

  init(): void {
    this.createAndInsertImagesElementOnHtml();
  }

  createAndInsertImagesElementOnHtml(): void {
    if (!this.flagsDiv)
      return;

    this.flags.forEach((flagInfo) => {
      const flag = this.renderer.createElement('img');

      for (var property in flagInfo) {
        if (property == 'class') {
          let classes: string[] = flagInfo[property].split(' ');

          classes?.forEach((cl: string) => {
            this.renderer.addClass(flag, cl);
          });

          continue;
        }

        this.renderer.setProperty(flag, property, flagInfo[property]);
      }

      this.renderer.listen(flag, 'click', () => this.changeLanguage(flagInfo.id));

      this.renderer.appendChild(this.flagsDiv, flag);
    });
  }

  changeLanguage = (selectedLanguage: string) => {
    const className = 'selected';

    let selectedFlag = document.getElementById(selectedLanguage);
    let deselectedFlag = document.getElementById(selectedLanguage == 'pt' ? 'en' : 'pt');

    if (selectedFlag && deselectedFlag && !selectedFlag.classList.contains(className)) {
      selectedFlag.classList.toggle(className);

      deselectedFlag.classList.toggle(className);
    }
  }
}