// Must use ?inline because ?inline prevents vite from inserting the styles in
// a <style> the <head>
import styles from './my-element.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import litLogo from './assets/Logotix-Bluetext.svg';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  // This is safe to use if the sass styles are compiled statically and without
  // user input.
  static styles = unsafeCSS(styles);

  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Exemple de texte'


  render() {
    return html`
      <div>
        <a href="https://www.stanrobotix6622.com/" target="_blank">
          <img src=${litLogo} class="logo" alt="logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button part="button">
          Click
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
