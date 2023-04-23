import { loadMdFile } from 'vite-plugin-dedale'

export const homePage = loadMdFile('content/pages/home.md').content

type BiographyFile = {
	picture: string
}

const biographyPageFile = loadMdFile<BiographyFile>(
	'content/pages/biography.md'
)

export const biographyPage = {
	picture: biographyPageFile.frontmatter.picture,
	content: biographyPageFile.content,
	headings: biographyPageFile.headings,
}

export const cahiersDescription = loadMdFile('content/pages/cahiers.md').content
export const seminarsDescription = loadMdFile(
	'content/pages/seminars.md'
).content
