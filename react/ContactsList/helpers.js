export const getInitials = name => {
  if (!name) return ''
  return ['givenName', 'familyName']
    .map(part => name[part] || '')
    .map(name => name[0])
    .join('')
}
