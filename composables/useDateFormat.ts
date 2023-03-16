const useDateFormat = (date: Date | null): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
  }
  if (!date) return "Aujourd'hui"
  return new Date(date).toLocaleDateString('fr-FR', options)
}

export default useDateFormat
