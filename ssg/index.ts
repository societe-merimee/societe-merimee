import { Route } from 'vite-plugin-dedale'
import {
	newsList,
	homePage,
	worksBiblio,
	criticalBiblio,
	biographyPage,
	seminars,
	cahiers,
	cahiersDescription,
	seminarsDescription,
	articlesRoutes,
	categoriesRoutes,
} from './datas'

export const routes = () =>
	[
		{
			url: '/',
			template: 'pages/home.njk',
			data: {
				title: 'accueil',
				description: homePage,
				news: newsList,
			},
		},
		{
			url: '/biographie/',
			template: 'pages/bio.njk',
			data: {
				title: 'biographie',
				...biographyPage,
			},
		},
		{
			url: '/seminaires/',
			template: 'pages/detailsList.njk',
			data: {
				title: 'séminaires',
				list: seminars,
				description: seminarsDescription,
			},
		},
		{
			url: '/cahiers/',
			template: 'pages/detailsList.njk',
			data: {
				title: 'cahiers',
				list: cahiers,
				description: cahiersDescription,
			},
		},
		{
			url: '/bibliographie/',
			template: 'pages/biblio.njk',
			data: {
				title: 'bibliographie',
				worksBiblio,
				criticalBiblio,
			},
		},
		...articlesRoutes,
		...categoriesRoutes,
	] satisfies Route[]
