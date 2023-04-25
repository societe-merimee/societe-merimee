export type NewsList = News[]

type News = {
	date: string
	title: string
	description: string
	thumbnail?: ImageInfos
}

type ImageInfos = {
	image: string
	alt: string
}
export type WorkBibliography = WorkBibliographyItem[]

type WorkBibliographyItem = {
	title1: string
	title2?: string
	location?: string
	editor: string
	date: string
	scientificEditor?: string
}

export type CriticalBibliography = CriticalBibliographyItem[]

type CriticalBibliographyItem = {
	author: string
	title1: string
	title2?: string
	location?: string
	editor: string
	date: string
}

export type Seminars = {
	title: string
	date: string
	description: string
}[]

export type Cahiers = {
	title: string
	description: string
	url: string
}[]

export type BlogArticleFrontmatter = {
	title: string
	category: string
	date: string
	resume: string
	thumbnail: {
		alt: string
		image: string
	}
}

export type Nav = { url: string; label: string }[]
