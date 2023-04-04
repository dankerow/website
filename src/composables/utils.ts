export function formatDate(string: string) {
	const { format } = Intl.DateTimeFormat('us', {
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	})

	const date = typeof string === 'string' ? new Date(string) : string
	return format(date)
}
