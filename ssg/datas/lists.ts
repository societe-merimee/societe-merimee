import { readFileSync } from 'node:fs'
import type {
	Seminars,
	CriticalBibliography,
	NewsList,
	WorkBibliography,
	Cahiers,
} from '../types'
import { parse as parseMd } from 'marked'
import { sortBydate } from '../utils'

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

export const rawSeminars = JSON.parse(
	readFileSync('content/lists/seminars.json', 'utf-8')
).seminars as Seminars

export const seminars = rawSeminars
	.map((itm) => ({
		...itm,
		description: parseMd(itm.description),
	}))
	.sort(sortBydate)
export const rawCahiers = JSON.parse(
	readFileSync('content/lists/cahiers.json', 'utf-8')
).cahiers as Cahiers

export const cahiers = rawCahiers.map((itm) => ({
	...itm,
	description: parseMd(itm.description),
}))
