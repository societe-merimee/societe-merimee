export const defineDetailsCustomElement = () =>
	customElements.define(
		'animated-details',
		class AnimatedDetails extends HTMLDetailsElement {
			private _closedHeight = 0
			private _openHeight = 0

			connectedCallback() {
				const contentElements = Array.from(this.children).filter(
					(el) => el.tagName !== 'SUMMARY'
				) as HTMLElement[]
				const contentHeight = this._getHeight(contentElements)
				this._openHeight =
					this.offsetHeight + (this.open ? 0 : contentHeight)
				this._closedHeight =
					this.offsetHeight - (this.open ? contentHeight : 0)
				this._setHeight()
				this.addEventListener('toggle', this._setHeight)
			}

			disconnectedCallback() {
				this.removeEventListener('toggle', this._setHeight)
			}

			private _setHeight = () => {
				if (this.open) {
					this.style.setProperty('height', `${this._openHeight}px`)
				} else {
					this.style.setProperty('height', `${this._closedHeight}px`)
				}
			}

			private _getHeight = (elements: HTMLElement[]) =>
				elements.reduce((acc, element) => {
					const offsetHeight = element.offsetHeight
					return acc + offsetHeight
				}, 0)
		},
		{
			extends: 'details',
		}
	)
