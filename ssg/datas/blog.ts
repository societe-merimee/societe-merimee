import { Route, loadAllMdFilesFrom } from 'vite-plugin-dedale'
import { BlogArticleFrontmatter } from '../types'
import { slugify, sortByFrontmatterDate, sortBydate } from '../utils'
import { formatDate } from '../utils/formatDate'

const rawArticles = loadAllMdFilesFrom<BlogArticleFrontmatter>(
	'content/blog'
).sort(sortByFrontmatterDate)

export const articlesRoutes: Route[] = rawArticles.map((raw) => {
	const { category, title, thumbnail, date } = raw.frontmatter
	const formatedDate = formatDate(date)
	const { content, filename } = raw
	const slugCategory = slugify(category)
	return {
		url: `/articles/${slugCategory}/${filename}/`,
		template: 'pages/article.njk',
		data: {
			category,
			slugCategory,
			title,
			thumbnail,
			date,
			formatedDate,
			content,
		},
	}
})

const categories = Array.from(
	new Set(rawArticles.map((itm) => itm.frontmatter.category))
).sort((a, b) => a.localeCompare(b))

export const categoriesRoutes: Route[] = categories.map((category) => {
	const slugCategory = slugify(category)
	const filteredArticles = rawArticles.filter(
		(itm) => itm.frontmatter.category === category
	)
	const articles = filteredArticles.map((article) => ({
		resume: article.frontmatter.resume,
		url: `/articles/${slugCategory}/${article.filename}/`,
		thumbnail: article.frontmatter.thumbnail,
		title: article.frontmatter.title,
	}))
	return {
		url: `/articles/${slugCategory}/`,
		template: 'pages/articlesList.njk',
		data: {
			title: category,
			articles,
		},
	}
})
