type WithDate = {
	date: string
}

export const sortBydate = <T extends WithDate>(a: T, b: T) => {
	return Number(new Date(b.date)) - Number(new Date(a.date))
}

type WithDateInFrontmatter = {
	frontmatter: { date: string }
}

export const sortByFrontmatterDate = <T extends WithDateInFrontmatter>(
	a: T,
	b: T
) => {
	return (
		Number(new Date(b.frontmatter.date)) -
		Number(new Date(a.frontmatter.date))
	)
}
