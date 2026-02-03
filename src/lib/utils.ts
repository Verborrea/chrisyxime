export const capitalize = (text: string | null) => {
	if (!text) return null;
	return text
		.trim()
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};