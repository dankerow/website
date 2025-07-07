export default function (string: string) {
  const { format } = Intl.DateTimeFormat('us', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })

  return format(new Date(string))
}
