import { v4 as uuid } from 'uuid'
import { setAttributes } from '@helpers/dom'

export const defineTabsCustomElement = () =>
	customElements.define(
		'nav-tabs',

		class Tabs extends HTMLElement {
			private _panels: HTMLElement[] = []
			private _tabs: HTMLElement[] = []

			connectedCallback() {
				this._panels = Array.from(this.children) as HTMLElement[]
				this._initPanels()
				const tabList = this._createTabList()
				this._tabs = Array.from(tabList.children) as HTMLElement[]
				const firstChild = this._panels[0]
				if (firstChild) this.insertBefore(tabList, firstChild)

				this.activeTab = 0
			}

			static get observedAttributes() {
				return ['activetab']
			}

			attributeChangedCallback(
				name: string,
				oldValue: string,
				newValue: string
			) {
				if (name === 'activetab' && oldValue !== newValue)
					this.activeTab = parseInt(newValue)
			}

			disconnectedCallback() {}

			private _initPanels() {
				this._panels.forEach((panel) => {
					const panelId = uuid()
					setAttributes(panel, {
						role: 'tabpanel',
						tabindex: '0',
						hidden: '',
						id: panelId,
					})
				})
			}

			private _createTabList() {
				const tabList = document.createElement('div')
				setAttributes(tabList, {
					role: 'tablist',
					'aria-label': 'tabs',
				})
				this._panels.forEach((panel, index) => {
					const id = uuid()
					const tab = document.createElement('button')
					panel.setAttribute('aria-labelledby', id)
					setAttributes(tab, {
						role: 'tab',
						'aria-selected': 'false',
						'aria-controls': panel.id,
						id,
						tabindex: '-1',
						class: 'tab-btn',
						'data-color': 'neutral',
					})
					tab.textContent =
						panel.getAttribute('data-label') ?? `tab ${index}`
					tab.addEventListener(
						'click',
						() => (this.activeTab = index)
					)
					tabList.appendChild(tab)
				})
				tabList.addEventListener('keydown', this._handleKeyDown)
				return tabList
			}

			private _handleKeyDown = ({ key }: KeyboardEvent) => {
				switch (key) {
					case 'ArrowLeft':
						this.activeTab--
						break
					case 'ArrowRight':
						this.activeTab++
						break
					case 'End':
						this.activeTab = this._numberOftabs - 1
						break
					case 'Home':
						this.activeTab = 0
						break
				}
			}

			private get _numberOftabs() {
				return Math.min(this._tabs.length, this._panels.length)
			}

			get activeTab() {
				return parseInt(this.getAttribute('activetab') ?? '')
			}

			set activeTab(index: number) {
				index %= this._numberOftabs
				if (index < 0) index = this._numberOftabs - 1
				const currentPanel = this._panels[index]
				const currentTab = this._tabs[index]
				if (!currentPanel || !currentTab) return
				this.setAttribute('activetab', index.toString())
				this._panels.forEach((panel) => {
					panel.setAttribute('hidden', '')
				})
				this._tabs.forEach((tab) => {
					setAttributes(tab, {
						'aria-selected': 'false',
						tabindex: '-1',
					})
				})
				currentPanel.removeAttribute('hidden')
				setAttributes(currentTab, {
					'aria-selected': 'true',
					tabindex: '0',
				})
				currentTab.focus()
			}
		}
	)
