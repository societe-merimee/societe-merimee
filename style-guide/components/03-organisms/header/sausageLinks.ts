export const defineSausageLinksCustomElement = () =>
	customElements.define(
		'sausage-links',

		class sausageLinks extends HTMLElement {
			private _sausageLinksElements: HTMLElement | null = null
			private _prevBtn: HTMLButtonElement | null = null
			private _nextBtn: HTMLButtonElement | null = null
			private _currentOverflow = false
			private _currentScrollStart = false
			private _currentScrollEnd = false
			private _scrollTimeoutId?: ReturnType<typeof setTimeout>

			connectedCallback() {
				this._sausageLinksElements = this.querySelector('ul')

				this._prevBtn = this.querySelector('button.prev')
				this._nextBtn = this.querySelector('button.next')

				this._nextBtn?.addEventListener('click', () =>
					this._handleClickNext(1)
				)

				this._prevBtn?.addEventListener('click', () =>
					this._handleClickNext(-1)
				)

				this._checkOverflow()

				window.addEventListener('resize', () => {
					this._checkOverflow()
				})

				this._sausageLinksElements?.addEventListener('scroll', () => {
					if (this._scrollTimeoutId)
						clearInterval(this._scrollTimeoutId)
					this._scrollTimeoutId = setTimeout(() => {
						this._checkScrollPosition()
					}, 100)
				})
			}

			private _handleClickNext(direction: number) {
				if (!this._sausageLinksElements) return
				const nextItem = this._getNextItem(direction)

				if (nextItem instanceof HTMLElement) {
					const center =
						nextItem.offsetLeft +
						nextItem.offsetWidth * 0.5 -
						this._sausageLinksElements.offsetLeft -
						this._sausageLinksElements.clientWidth * 0.5
					this._sausageLinksElements.scrollTo(center, 0)
				} else {
					this._sausageLinksElements.scrollTo(
						direction < 0
							? 0
							: this._sausageLinksElements.scrollWidth,
						0
					)
				}
			}

			private _getNextItem(direction: number) {
				if (!this._sausageLinksElements) return
				const items = Array.from(this._sausageLinksElements.children)
				if (direction < 0) {
					return items.reverse().find((el) => {
						if (!(el instanceof HTMLElement)) return false
						const { left } = el.getBoundingClientRect()
						return left < this._sausageLinksElements!.offsetLeft
					})
				} else
					return items.find((el) => {
						if (!(el instanceof HTMLElement)) return false
						const { right } = el.getBoundingClientRect()
						const containerRight =
							this._sausageLinksElements!.offsetLeft +
							this._sausageLinksElements!.clientWidth
						return right > containerRight
					})
			}

			private _checkOverflow() {
				if (!this._sausageLinksElements) return
				const { scrollWidth, clientWidth } = this._sausageLinksElements
				if (clientWidth < scrollWidth) this._overflow = true
				else this._overflow = false
			}

			private set _overflow(value: boolean) {
				if (value !== this._currentOverflow) {
					this._currentOverflow = value
					if (this._currentOverflow) {
						this._checkScrollPosition()
						this._prevBtn?.removeAttribute('hidden')
						this._nextBtn?.removeAttribute('hidden')
					} else {
						this._prevBtn?.setAttribute('hidden', '')
						this._nextBtn?.setAttribute('hidden', '')
					}
				}
			}

			private _checkScrollPosition() {
				if (!this._sausageLinksElements) return
				this._scrollStart = this._sausageLinksElements.scrollLeft <= 0
				this._scrollEnd =
					this._sausageLinksElements.scrollLeft >=
					this._sausageLinksElements.scrollWidth -
						this._sausageLinksElements.clientWidth
			}

			private set _scrollStart(value: boolean) {
				if (value !== this._currentScrollStart) {
					this._currentScrollStart = value
					if (this._currentScrollStart) {
						this._prevBtn?.setAttribute('disabled', '')
					} else {
						this._prevBtn?.removeAttribute('disabled')
					}
				}
			}

			private set _scrollEnd(value: boolean) {
				if (value !== this._currentScrollEnd) {
					this._currentScrollEnd = value
					if (this._currentScrollEnd) {
						this._nextBtn?.setAttribute('disabled', '')
					} else {
						this._nextBtn?.removeAttribute('disabled')
					}
				}
			}
		}
	)
