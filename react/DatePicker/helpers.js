export const makeFormat = ({ ampm, mode, lang }) => {
  switch (mode) {
    case 'date':
      return lang === 'fr' ? 'dd/LL/yyyy' : 'LL/dd/yyyy'
    case 'time':
      return lang === 'fr' ? 'HH:mm' : ampm ? 'HH:mm a' : 'HH:mm'
    case 'dateTime':
      return lang === 'fr'
        ? 'dd/LL/yyyy HH:mm'
        : ampm
        ? 'LL/dd/yyyy HH:mm a'
        : 'LL/dd/yyyy HH:mm'
    default:
      return lang === 'fr' ? 'dd/LL/yyyy' : ampm ? 'LL/dd/yyyy a' : 'LL/dd/yyyy'
  }
}
