import { readFileSync } from 'node:fs'
import { CriticalBibliography, NewsList, WorkBibliography } from '../types'
import { parse as parseMd } from 'marked'

const rawNews = JSON.parse(readFileSync('content/lists/news.json', 'utf-8'))
	.news as NewsList

export const newsList = rawNews
	.map((itm) => ({
		...itm,
		description: parseMd(itm.description),
	}))
	.sort((a, b) => {
		return Number(new Date(b.date)) - Number(new Date(a.date))
	})

export const worksBiblio = JSON.parse(
	readFileSync('content/lists/works-bibliography.json', 'utf-8')
).entries as WorkBibliography

export const criticalBiblio = JSON.parse(
	readFileSync('content/lists/critical-bibliography.json', 'utf-8')
).entries as CriticalBibliography
