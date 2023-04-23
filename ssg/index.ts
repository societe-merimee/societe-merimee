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
				title: 'Accueil',
				description: homePage,
				news: newsList,
			},
		},
		{
			url: '/biographie',
			template: 'pages/bio.njk',
			data: {
				title: 'Biographie',
				...biographyPage,
			},
		},
		{
			url: '/seminaires',
			template: 'pages/seminars.njk',
			data: {
				title: 'Seminaires',
				seminars,
				description: seminarsDescription,
			},
		},
		{
			url: '/cahiers',
			template: 'pages/cahiers.njk',
			data: {
				title: 'Cahiers',
				cahiers,
				description: cahiersDescription,
			},
		},
		{
			url: '/bibliographie',
			template: 'pages/biblio.njk',
			data: {
				title: 'Bibliographies',
				worksBiblio,
				criticalBiblio,
			},
		},
		...articlesRoutes,
		...categoriesRoutes,
	] satisfies Route[]
