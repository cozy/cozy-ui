Works with `final-form`, `final-form-arrays`, `react-final-form` and `react-final-form-arrays` packages under the hood.

⚠️ Must be used within `AlertProvider`.

```jsx
import { useState } from 'react'
import StarIcon from 'cozy-ui/transpiled/react/Icons/Star'
import TextField from 'cozy-ui/transpiled/react/TextField'
import ContactsAddModal from 'cozy-ui/transpiled/react/Contacts/AddModal'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import AlertProvider from 'cozy-ui/transpiled/react/providers/Alert'
import Button from 'cozy-ui/transpiled/react/Buttons'
import { johnDoeContact } from 'cozy-ui/transpiled/react/Contacts/AddModal/mocks'
import contacts from 'cozy-ui/transpiled/react/ContactsList/_mockContacts.json'
import Variants from 'cozy-ui/docs/components/Variants'

initialState = { showModal: isTesting() }
initialVariants = [{ withContact: false, withCustomFields: false }]

const open = () => setState({ showModal: true })
const close = () => setState({ showModal: false })

const handleSubmit = async formData => {
  console.info('formData :', formData)
}

const customFields = [{ name: 'customField', icon: StarIcon, type: 'text', position: 5, component: TextField }]

;

<DemoProvider dictRequire={() => ({ Contacts: {AddModal: {ContactForm: {fields: {customField: 'Custom field'}}}} })}>
  <AlertProvider>
    <Variants initialVariants={initialVariants}>
      {variant => (
        <>
          <Button onClick={open} label="Open Modal" />
          {state.showModal && (
            <ContactsAddModal
              contacts={{ data: contacts }}
              contact={variant.withContact ? {...johnDoeContact, customField: "Custom field value"} : undefined}
              customFieldsProps={variant.withCustomFields && {
                fields: customFields,
                makeCustomFieldsFormValues: formValues => ({ customField: formValues.customField }),
                makeCustomContactValues: contact => ({ customField: contact.customField })
              }}
              onSubmit={handleSubmit}
              onClose={close}
            />
          )}
        </>
      )}
    </Variants>
  </AlertProvider>
</DemoProvider>
```