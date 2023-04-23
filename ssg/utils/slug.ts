export const slugify = (str: string) => {
	const specialCharacters =
		'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
	const validCharacters =
		'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
	const specialCharactersRegExp = new RegExp(
		specialCharacters.split('').join('|'),
		'g'
	)

	return str
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(specialCharactersRegExp, (c) =>
			validCharacters.charAt(specialCharacters.indexOf(c))
		)
		.replace(/[^\w\-]+/g, '')
		.replace(/\-\-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}
