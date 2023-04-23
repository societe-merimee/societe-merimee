const monthsName = [
	'janvier',
	'février',
	'mars',
	'avril',
	'mai',
	'juin',
	'juillet',
	'août',
	'septembre',
	'octobre',
	'novembre',
	'décembre',
]

export const formatDate = (dateStr: string) => {
	const date = new Date(dateStr)
	const year = date.getFullYear()
	const month = monthsName[date.getMonth()]
	const day = date.getDate()
	return `${day} ${month} ${year}`
}
