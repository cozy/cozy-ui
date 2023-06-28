import Alerter from 'cozy-ui/transpiled/react/deprecated/Alerter'

export const renameFile = async (client, file, name) => {
  try {
    return await client.save({
      ...file,
      name
    })
  } catch (error) {
    if (error.message.includes('Missing name argument')) {
      Alerter.error('RenameInput.filenameMissing')
    } else if (error.message.includes('Invalid filename:')) {
      Alerter.error('RenameInput.filenameIllegalName', {
        name
      })
    } else if (
      error.message.includes(
        'Invalid filename containing illegal character(s):'
      )
    ) {
      Alerter.error(
        'RenameInput.filenameIllegalCharacters',
        {
          name,
          characters: error.message.split(
            'Invalid filename containing illegal character(s): '
          )[1]
        },
        { duration: 2000 }
      )
    } else {
      Alerter.error('RenameInput.fileExisting', { name })
    }
  }
}
