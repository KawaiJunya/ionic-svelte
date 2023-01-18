import type { SvelteComponent } from "svelte/internal"

export const register = (
  tag:            string,
  component:      new (...args: any) => SvelteComponent,
  componentProps: Record<string, any> = {}
) => {
  class SvelteCustomElement extends HTMLElement {
    private _svelteComponent?: SvelteComponent
    constructor() {
      super()
    }
    connectedCallback() {
      this._svelteComponent = new component({
        target: this,
        props:  {...componentProps}
      })
    }
    disconnectedCallback() {
      this._svelteComponent?.$destroy()
    }
  }
  customElements.define(tag, SvelteCustomElement)
}
