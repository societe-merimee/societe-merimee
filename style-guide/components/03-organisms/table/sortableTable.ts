import { setAttributes } from '@helpers/dom'

type SortType = 'ascending' | 'descending'

export const defineSortableTableCustomElement = () =>
	customElements.define(
		'sortable-table',

		class Tabs extends HTMLElement {
			connectedCallback() {
				this._init()
			}

			static get observedAttributes() {
				return []
			}

			disconnectedCallback() {}

			private _init() {
				const btnWrappers = this.querySelectorAll('[data-sort]')
				btnWrappers.forEach((wrapper, index) => {
					wrapper.innerHTML = ''
					const btn = document.createElement('button')
					setAttributes(btn, {
						'data-color': 'neutral',
						class: 'btn',
					})
					const key = wrapper.getAttribute('data-sort')
					btn.innerHTML = `
					${key} 
					<svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="up"><use href="#chevron-up-icon"/></svg>
					<svg width="1em" height="1em" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="down"><use href="#chevron-down-icon"/></svg>`
					btn.addEventListener('click', () =>
						this._handleClick(btn, index)
					)
					wrapper.appendChild(btn)
				})
			}
			private _handleClick(button: HTMLButtonElement, colIndex: number) {
				const currentState = button.getAttribute('aria-sort')
				this.querySelectorAll('[aria-sort]').forEach((itm) =>
					itm.removeAttribute('aria-sort')
				)
				const state: SortType =
					currentState === 'ascending' ? 'descending' : 'ascending'
				button.setAttribute('aria-sort', state)
				this._sort(colIndex, state)
			}
			private _sort(colIndex: number, sort: SortType) {
				const tbody = this.querySelector('tbody')
				if (!tbody) return
				const dir = sort === 'ascending' ? 1 : -1
				const rows = Array.from(tbody.querySelectorAll('tbody tr'))
				const sortedRows = rows.sort((rowA, rowB) => {
					const cellA = rowA.querySelector(
						`td:nth-child(${colIndex + 1})`
					)?.textContent
					const cellB = rowB.querySelector(
						`td:nth-child(${colIndex + 1})`
					)?.textContent
					if (!cellA && !cellB) return 0
					if (!cellA) return -1 * dir
					if (!cellB) return 1 * dir
					return (
						cellA.trim().localeCompare(cellB.trim(), 'fr', {
							ignorePunctuation: true,
						}) * dir
					)
				})
				tbody.append(...sortedRows)
			}
		}
	)
