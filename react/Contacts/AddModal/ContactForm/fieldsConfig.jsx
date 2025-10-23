import React from 'react'

import Icon from '../../../Icon'
import BottomIcon from '../../../Icons/Bottom'
import CalendarIcon from '../../../Icons/Calendar'
import CloudIcon from '../../../Icons/Cloud'
import CommentIcon from '../../../Icons/Comment'
import CompanyIcon from '../../../Icons/Company'
import EmailIcon from '../../../Icons/Email'
import LocationIcon from '../../../Icons/Location'
import MatrixIcon from '../../../Icons/Matrix'
import PeopleIcon from '../../../Icons/People'
import RelationshipIcon from '../../../Icons/Relationship'
import TelephoneIcon from '../../../Icons/Telephone'
import InputAdornment from '../../../InputAdornment'

/**
 * @type {import('../types').Field[]}
 */
export const fields = [
  {
    name: 'gender',
    icon: PeopleIcon,
    select: true,
    options: [
      {
        value: 'male',
        label: 'Contacts.AddModal.ContactForm.gender.man'
      },
      {
        value: 'female',
        label: 'Contacts.AddModal.ContactForm.gender.woman'
      }
    ]
  },
  {
    name: 'givenName',
    icon: null,
    type: 'text',
    layout: 'accordion',
    subFields: [
      {
        name: 'additionalName',
        icon: null,
        type: 'text'
      },
      {
        name: 'surname',
        icon: null,
        type: 'text'
      }
    ]
  },
  {
    name: 'familyName',
    icon: null,
    type: 'text'
  },
  {
    name: 'company',
    icon: CompanyIcon,
    type: 'text',
    layout: 'accordion',
    subFields: [
      {
        name: 'jobTitle',
        icon: null,
        type: 'text'
      }
    ]
  },
  {
    name: 'phone',
    icon: TelephoneIcon,
    type: 'tel',
    layout: 'array',
    label: {
      name: 'phoneLabel',
      select: true,
      customLabelOptions: {
        defaultType: '',
        defaultLabel: 'home'
      },
      options: [
        {
          value: '',
          label: 'Contacts.AddModal.ContactForm.label.none'
        },
        {
          value: '{"type":"cell","label":"home"}',
          label: 'Contacts.AddModal.ContactForm.label.phone.cell-home'
        },
        {
          value: '{"type":"cell","label":"work"}',
          label: 'Contacts.AddModal.ContactForm.label.phone.cell-work'
        },
        {
          value: '{"type":"voice","label":"home"}',
          label: 'Contacts.AddModal.ContactForm.label.phone.voice-home'
        },
        {
          value: '{"type":"voice","label":"work"}',
          label: 'Contacts.AddModal.ContactForm.label.phone.voice-work'
        },
        {
          value: '{"type":"fax","label":"home"}',
          label: 'Contacts.AddModal.ContactForm.label.phone.fax-home'
        },
        {
          value: '{"type":"fax","label":"work"}',
          label: 'Contacts.AddModal.ContactForm.label.phone.fax-work'
        }
      ]
    }
  },
  {
    name: 'email',
    icon: EmailIcon,
    type: 'email',
    layout: 'array',
    label: {
      name: 'emailLabel',
      select: true,
      customLabelOptions: {
        defaultType: '',
        defaultLabel: 'home'
      },
      options: [
        {
          value: '',
          label: 'Contacts.AddModal.ContactForm.label.none'
        },
        {
          value: '{"label":"home"}',
          label: 'Contacts.AddModal.ContactForm.label.home'
        },
        {
          value: '{"label":"work"}',
          label: 'Contacts.AddModal.ContactForm.label.work'
        }
      ]
    }
  },
  {
    name: 'matrix',
    icon: MatrixIcon,
    type: 'text'
  },
  {
    name: 'address',
    icon: LocationIcon,
    type: 'text',
    layout: 'array',
    InputProps: {
      readOnly: true
    },
    subFields: [
      {
        name: 'street',
        icon: null,
        type: 'text'
      },
      {
        name: 'number',
        icon: null,
        type: 'text'
      },
      {
        name: 'building',
        icon: null,
        type: 'text'
      },
      {
        name: 'stairs',
        icon: null,
        type: 'text'
      },
      {
        name: 'floor',
        icon: null,
        type: 'text'
      },
      {
        name: 'apartment',
        icon: null,
        type: 'text'
      },
      {
        name: 'entrycode',
        icon: null,
        type: 'text'
      },
      {
        name: 'locality',
        icon: null,
        type: 'text'
      },
      {
        name: 'code',
        icon: null,
        type: 'text'
      },
      {
        name: 'city',
        icon: null,
        type: 'text'
      },
      {
        name: 'region',
        icon: null,
        type: 'text'
      },
      {
        name: 'country',
        icon: null,
        type: 'text'
      }
    ],
    label: {
      name: 'addressLabel',
      select: true,
      customLabelOptions: {
        defaultType: '',
        defaultLabel: 'home'
      },
      options: [
        {
          value: '',
          label: 'Contacts.AddModal.ContactForm.label.none'
        },
        {
          value: '{"label":"home"}',
          label: 'Contacts.AddModal.ContactForm.label.address.home'
        },
        {
          value: '{"label":"work"}',
          label: 'Contacts.AddModal.ContactForm.label.address.work'
        }
      ]
    }
  },
  {
    name: 'note',
    icon: CommentIcon,
    type: 'text',
    multiline: true
  },
  {
    name: 'cozy',
    icon: CloudIcon,
    type: 'url',
    isSecondary: true,
    label: {
      name: 'cozyLabel',
      select: true,
      customLabelOptions: {
        defaultType: '',
        defaultLabel: 'home'
      },
      options: [
        {
          value: '',
          label: 'Contacts.AddModal.ContactForm.label.none'
        },
        {
          value: '{"label":"home"}',
          label: 'Contacts.AddModal.ContactForm.label.home'
        },
        {
          value: '{"label":"work"}',
          label: 'Contacts.AddModal.ContactForm.label.work'
        }
      ]
    }
  },
  {
    name: 'birthday',
    icon: CalendarIcon,
    type: 'date',
    isSecondary: true,
    InputLabelProps: { shrink: true }
  },
  {
    name: 'birthplace',
    icon: null,
    type: 'text',
    isSecondary: true
  },
  {
    name: 'relatedContact',
    icon: RelationshipIcon,
    layout: 'array',
    isSecondary: true,
    InputProps: {
      readOnly: true,
      endAdornment: (
        <InputAdornment position="end">
          <Icon icon={BottomIcon} color="var(--iconTextColor)" />
        </InputAdornment>
      )
    },
    label: {
      name: 'relatedContactLabel',
      select: true,
      options: [
        {
          value: '',
          label: 'Contacts.AddModal.ContactForm.label.none'
        },
        {
          value: '{"type":"parent"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.parent'
        },
        {
          value: '{"type":"child"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.child'
        },
        {
          value: '{"type":"sibling"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.sibling'
        },
        {
          value: '{"type":"spouse"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.spouse'
        },
        {
          value: '{"type":"coResident"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.coResident'
        },
        {
          value: '{"type":"friend"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.friend'
        },
        {
          value: '{"type":"colleague"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.colleague'
        },
        {
          value: '{"type":"coWorker"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.coWorker'
        },
        {
          value: '{"type":"acquaintance"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.acquaintance'
        },
        {
          value: '{"type":"helper"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.helper'
        },
        {
          value: '{"type":"recipient"}',
          label: 'Contacts.AddModal.ContactForm.label.relationship.recipient'
        }
      ]
    }
  }
]
