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

/*

{
		{
			"author": "ANON, C. R. de Claudie Bernard",
			"title1": "Le passé recomposé. Le roman historique français du dix-neuvième siècle",
			"title2": "Forum for Modern Language Studies vol. 35",
			"location": "Paris",
			"editor": "Hachette",
			"date": "1996"
		},
*/
