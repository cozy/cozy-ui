const dayFirstDateFormats = {
  fr: 'dd/LL/yyyy',
  es: 'dd/LL/yyyy',
  it: 'dd/LL/yyyy',
  de: 'dd.LL.yyyy'
}

export const makeFormat = ({ ampm, mode, lang }) => {
  const dayFirstDate = dayFirstDateFormats[lang]

  switch (mode) {
    case 'date':
      return dayFirstDate || 'LL/dd/yyyy'
    case 'time':
      return dayFirstDate ? 'HH:mm' : ampm ? 'HH:mm a' : 'HH:mm'
    case 'dateTime':
      return dayFirstDate
        ? `${dayFirstDate} HH:mm`
        : ampm
        ? 'LL/dd/yyyy HH:mm a'
        : 'LL/dd/yyyy HH:mm'
    default:
      return dayFirstDate || (ampm ? 'LL/dd/yyyy a' : 'LL/dd/yyyy')
  }
}
