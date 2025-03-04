export const formatDateToLocal = (dateStr: string, locale: string = "fr") => {
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = {
		day: "numeric",
		month: "short",
		year: "numeric",
	};
	const formatter = new Intl.DateTimeFormat(locale, options);
	return formatter.format(date);
};
