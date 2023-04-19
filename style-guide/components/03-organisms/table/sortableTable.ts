import { v4 as uuid } from 'uuid'
import { setAttributes } from '@helpers/dom'

type SortType = 'ascending' | 'descending'

export const defineSortableTableCustomElement = () =>
	customElements.define(
		'sortable-table',

		class Tabs extends HTMLElement {
			private _tbodyElement: HTMLTableSectionElement | null = null
			connectedCallback() {
				this._init()
			}

			static get observedAttributes() {
				return []
			}

			disconnectedCallback() {}

			private _init() {
				this._tbodyElement = this.querySelector('tbody')
				this._addSearchForm()
				this._addSortBtns()
			}

			private _addSearchForm() {
				if (!this._tbodyElement) return
				const searchForm = document.createElement('form')
				setAttributes(searchForm, {
					role: 'search',
					'aria-label': 'On table',
					class: 'searchForm',
				})
				const id = uuid()
				searchForm.innerHTML = `
					<label for="${id}">Rechercher :</label>
					<input type="search" id="${id}" name="search">
					<button class="btn" data-color="neutral" title="rechercher">
						<svg width="1em" height="1em" viewbox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<use href="#glass-icon"/>
						</svg>
					</button>`
				const table = this.querySelector('table')
				searchForm.addEventListener(
					'submit',
					this._handleSearch.bind(this)
				)
				this.insertBefore(searchForm, table)
			}

			private _handleSearch(e: SubmitEvent) {
				e.preventDefault()
				if (!e.target || !this._tbodyElement) return
				const form = e.target as HTMLFormElement
				const data = new FormData(form)
				const searchValue = data.get('search')
				const rows = Array.from(this._tbodyElement.rows)
				rows.forEach((row) => {
					const show =
						searchValue === null ||
						row.textContent
							?.toLowerCase()
							.includes(searchValue.toString().toLowerCase())
					if (show) row.removeAttribute('hidden')
					else row.setAttribute('hidden', '')
				})
			}

			private _addSortBtns() {
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
				if (!this._tbodyElement) return
				const dir = sort === 'ascending' ? 1 : -1
				const rows = Array.from(this._tbodyElement.rows)
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
				this._tbodyElement.append(...sortedRows)
			}
		}
	)
