import { Route } from 'vite-plugin-dedale'
import { newsList, homePage, worksBiblio, criticalBiblio } from './datas'

export const routes = () =>
	[
		{
			url: '/',
			template: 'index.njk',
			data: {
				title: 'Accueil',
				description: homePage,
				news: newsList,
			},
		},
		{
			url: '/bibliographie',
			template: 'biblio.njk',
			data: {
				title: 'Bibliographies',
				worksBiblio,
				criticalBiblio,
			},
		},
	] satisfies Route[]
