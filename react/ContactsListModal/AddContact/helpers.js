export const handleSubmit = async ({
  client,
  contactValues,
  onCreate,
  onListClose
}) => {
  const { givenName, familyName } = contactValues

  if (!givenName && !familyName) return

  const { data: contact } = await client.save({
    _type: 'io.cozy.contacts',
    name: { familyName, givenName }
  })

  onCreate(contact)
  onListClose()
}
