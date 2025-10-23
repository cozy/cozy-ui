import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
var en = {
  common: {
    day: "%{smart_count} day |||| %{smart_count} days"
  },
  ListItem: {
    attributes: {
      birthday: "Birthday",
      birthcity: "Birth city",
      address: "Address",
      email: "Email address",
      phone: "Phone number",
      company: "Company",
      jobTitle: "Job title",
      metadata: {
        datetime: "Added on",
        issueDate: "Delivered on",
        expirationDate: "Expiration date",
        referencedDate: "Referenced date",
        shootingDate: "Shooting date",
        obtentionDate: "Date obtained",
        date: "Document date",
        country: "Country of delivery",
        refTaxIncome: "Reference tax income",
        contractType: "Contract type",
        noticePeriod: "Expiration alert",
        cafFileNumber: "CAF file number",
        vinNumber: "Vehicle registration number (VIN)",
        cardNumber: "National ID card number",
        ibanNumber: "IBAN number",
        bicNumber: "BIC number",
        passportNumber: "Passport number",
        netSocialAmount: "Net social amount",
        vehicle: {
          licenseNumber: "Vehicle registration number",
          confidentialNumber: "Confidential vehicle registration code"
        },
        number: {
          pay_sheet: "Gross remuneration",
          tax_return: "Reference tax number",
          tax_notice: "Reference tax number",
          real_estate_tax: "Reference tax number",
          tax_timetable: "Reference tax number",
          fine: "Amount of the fine",
          fidelity_card: "Card number",
          driver_license: "License number",
          caf: "CAF file number",
          payment_proof_family_allowance: "CAF file number",
          vehicle_registration: "Vehicle registration number (VIN)",
          national_id_card: "National ID card number",
          bank_details: "IBAN number",
          passport: "Passport number",
          residence_permit: "License number"
        }
      }
    },
    file: {
      page: {
        back: "Back side",
        front: "Front side"
      }
    },
    snackbar: {
      copyToClipboard: {
        success: "Copied to clipboard",
        error: "Cannot copy to clipboard"
      }
    },
    renameModal: {
      title: "Rename",
      content: "You are about to change the file extension. Do you want to continue?",
      cancel: "Cancel",
      submit: "Continue"
    }
  }
};
var fr = {
  common: {
    day: "%{smart_count} jour |||| %{smart_count} jours"
  },
  ListItem: {
    attributes: {
      birthday: "Date de naissance",
      birthcity: "Lieu de naissance",
      address: "Adresse",
      email: "Adresse e-mail",
      phone: "Num\xE9ro de t\xE9l\xE9phone",
      company: "Entreprise",
      jobTitle: "Fonction",
      metadata: {
        datetime: "Ajout\xE9 le",
        issueDate: "D\xE9livr\xE9 le",
        expirationDate: "Date d'expiration",
        referencedDate: "Date de r\xE9f\xE9rence",
        shootingDate: "Date de prise de vue",
        obtentionDate: "Date d'obtention",
        date: "Date du document",
        country: "Pays de d\xE9livrance",
        refTaxIncome: "Revenu fiscal de r\xE9f\xE9rence",
        contractType: "Type de contrat",
        noticePeriod: "Alerte d\u2019expiration",
        cafFileNumber: "Num\xE9ro de dossier CAF",
        vinNumber: "Num\xE9ro de la carte grise (VIN)",
        cardNumber: "Num\xE9ro de la carte d'identit\xE9",
        ibanNumber: "Num\xE9ro d'IBAN",
        bicNumber: "Num\xE9ro BIC",
        passportNumber: "Num\xE9ro du passeport",
        netSocialAmount: "Montant net social",
        vehicle: {
          licenseNumber: "Plaque d'immatriculation",
          confidentialNumber: "Code confidentiel de la carte grise"
        },
        number: {
          pay_sheet: "R\xE9mun\xE9ration brute",
          tax_return: "Num\xE9ro fiscal de r\xE9f\xE9rence",
          tax_notice: "Num\xE9ro fiscal de r\xE9f\xE9rence",
          real_estate_tax: "Num\xE9ro fiscal de r\xE9f\xE9rence",
          tax_timetable: "Num\xE9ro fiscal de r\xE9f\xE9rence",
          fine: "Montant de l'amende",
          fidelity_card: "Num\xE9ro de la carte",
          driver_license: "Num\xE9ro du permis",
          caf: "Num\xE9ro de dossier CAF",
          payment_proof_family_allowance: "Num\xE9ro de dossier CAF",
          vehicle_registration: "Num\xE9ro de la carte grise (VIN)",
          national_id_card: "Num\xE9ro de la carte d'identit\xE9",
          bank_details: "Num\xE9ro d'IBAN",
          passport: "Num\xE9ro du passeport",
          residence_permit: "Num\xE9ro du permis"
        }
      }
    },
    file: {
      page: {
        back: "Face arri\xE8re",
        front: "Face avant"
      }
    },
    snackbar: {
      copyToClipboard: {
        success: "Copi\xE9 dans le presse-papier",
        error: "Impossible de copier dans le presse-papier"
      }
    },
    renameModal: {
      title: "Renommer",
      content: "Vous \xEAtes sur le point de changer l'extension du fichier. Voulez-vous continuer\xA0?",
      cancel: "Annuler",
      submit: "Continuer"
    }
  }
};
var ru = {
  common: {
    day: "%{smart_count} \u0434\u0435\u043D\u044C |||| %{smart_count} \u0434\u043D\u0435\u0439"
  },
  ListItem: {
    attributes: {
      birthday: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
      birthcity: "\u0413\u043E\u0440\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",
      address: "\u0410\u0434\u0440\u0435\u0441",
      email: "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
      phone: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
      company: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
      jobTitle: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
      metadata: {
        datetime: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E",
        issueDate: "\u0412\u044B\u0434\u0430\u043D\u043E",
        expirationDate: "\u0421\u0440\u043E\u043A \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044F",
        referencedDate: "\u0414\u0430\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0438",
        shootingDate: "\u0414\u0430\u0442\u0430 \u0441\u044A\u0435\u043C\u043A\u0438",
        obtentionDate: "\u0414\u0430\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F",
        date: "\u0414\u0430\u0442\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",
        country: "\u0421\u0442\u0440\u0430\u043D\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",
        refTaxIncome: "\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0439 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0434\u043E\u0445\u043E\u0434",
        contractType: "\u0422\u0438\u043F \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0430",
        noticePeriod: "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0431 \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u0438",
        cafFileNumber: "\u041D\u043E\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 CAF",
        vinNumber: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 (VIN)",
        cardNumber: "\u041D\u043E\u043C\u0435\u0440 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",
        ibanNumber: "\u041D\u043E\u043C\u0435\u0440 IBAN",
        bicNumber: "\u041D\u043E\u043C\u0435\u0440 BIC",
        passportNumber: "\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430",
        netSocialAmount: "\u0427\u0438\u0441\u0442\u0430\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
        vehicle: {
          licenseNumber: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430",
          confidentialNumber: "\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0434 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430"
        },
        number: {
          pay_sheet: "\u0412\u0430\u043B\u043E\u0432\u043E\u0435 \u0432\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435",
          tax_return: "\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0439 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",
          tax_notice: "\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0439 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",
          real_estate_tax: "\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0439 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",
          tax_timetable: "\u0420\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u043D\u044B\u0439 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",
          fine: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0442\u0440\u0430\u0444\u0430",
          fidelity_card: "\u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B",
          driver_license: "\u041D\u043E\u043C\u0435\u0440 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438",
          caf: "\u041D\u043E\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 CAF",
          payment_proof_family_allowance: "\u041D\u043E\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 CAF",
          vehicle_registration: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 (VIN)",
          national_id_card: "\u041D\u043E\u043C\u0435\u0440 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438",
          bank_details: "\u041D\u043E\u043C\u0435\u0440 IBAN",
          passport: "\u041D\u043E\u043C\u0435\u0440 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0430",
          residence_permit: "\u041D\u043E\u043C\u0435\u0440 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438"
        }
      }
    },
    file: {
      page: {
        back: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430",
        front: "\u041B\u0438\u0446\u0435\u0432\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430"
      }
    },
    snackbar: {
      copyToClipboard: {
        success: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
        error: "\u041D\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430"
      }
    },
    renameModal: {
      title: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
      content: "\u0412\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430. \u0425\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C?",
      cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
      submit: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"
    }
  }
};
var vi = {
  common: {
    day: "%{smart_count} ng\xE0y |||| %{smart_count} ng\xE0y"
  },
  ListItem: {
    attributes: {
      birthday: "Sinh nh\u1EADt",
      birthcity: "Th\xE0nh ph\u1ED1 sinh",
      address: "\u0110\u1ECBa ch\u1EC9",
      email: "\u0110\u1ECBa ch\u1EC9 email",
      phone: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
      company: "C\xF4ng ty",
      jobTitle: "Ch\u1EE9c v\u1EE5",
      metadata: {
        datetime: "\u0110\u01B0\u1EE3c th\xEAm v\xE0o",
        issueDate: "\u0110\u01B0\u1EE3c giao v\xE0o",
        expirationDate: "Ng\xE0y h\u1EBFt h\u1EA1n",
        referencedDate: "Ng\xE0y tham chi\u1EBFu",
        shootingDate: "Ng\xE0y ch\u1EE5p",
        obtentionDate: "Ng\xE0y c\xF3 \u0111\u01B0\u1EE3c",
        date: "Ng\xE0y t\xE0i li\u1EC7u",
        country: "Qu\u1ED1c gia ph\xE1t h\xE0nh",
        refTaxIncome: "Thu nh\u1EADp thu\u1EBF tham chi\u1EBFu",
        contractType: "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng",
        noticePeriod: "C\u1EA3nh b\xE1o h\u1EBFt h\u1EA1n",
        cafFileNumber: "S\u1ED1 h\u1ED3 s\u01A1 CAF",
        vinNumber: "S\u1ED1 \u0111\u0103ng k\xFD xe (VIN)",
        cardNumber: "S\u1ED1 th\u1EBB c\u0103n c\u01B0\u1EDBc",
        ibanNumber: "S\u1ED1 IBAN",
        bicNumber: "S\u1ED1 BIC",
        passportNumber: "S\u1ED1 h\u1ED9 chi\u1EBFu",
        netSocialAmount: "S\u1ED1 ti\u1EC1n x\xE3 h\u1ED9i r\xF2ng",
        vehicle: {
          licenseNumber: "S\u1ED1 \u0111\u0103ng k\xFD xe",
          confidentialNumber: "M\xE3 \u0111\u0103ng k\xFD xe b\xED m\u1EADt"
        },
        number: {
          pay_sheet: "Th\xF9 lao g\u1ED1c",
          tax_return: "S\u1ED1 thu\u1EBF tham chi\u1EBFu",
          tax_notice: "S\u1ED1 thu\u1EBF tham chi\u1EBFu",
          real_estate_tax: "S\u1ED1 thu\u1EBF tham chi\u1EBFu",
          tax_timetable: "S\u1ED1 thu\u1EBF tham chi\u1EBFu",
          fine: "S\u1ED1 ti\u1EC1n ph\u1EA1t",
          fidelity_card: "S\u1ED1 th\u1EBB",
          driver_license: "S\u1ED1 gi\u1EA5y ph\xE9p",
          caf: "S\u1ED1 h\u1ED3 s\u01A1 CAF",
          payment_proof_family_allowance: "S\u1ED1 h\u1ED3 s\u01A1 CAF",
          vehicle_registration: "S\u1ED1 \u0111\u0103ng k\xFD xe (VIN)",
          national_id_card: "S\u1ED1 th\u1EBB c\u0103n c\u01B0\u1EDBc",
          bank_details: "S\u1ED1 IBAN",
          passport: "S\u1ED1 h\u1ED9 chi\u1EBFu",
          residence_permit: "S\u1ED1 gi\u1EA5y ph\xE9p"
        }
      }
    },
    file: {
      page: {
        back: "M\u1EB7t sau",
        front: "M\u1EB7t tr\u01B0\u1EDBc"
      }
    },
    snackbar: {
      copyToClipboard: {
        success: "\u0110\xE3 sao ch\xE9p v\xE0o clipboard",
        error: "Kh\xF4ng th\u1EC3 sao ch\xE9p v\xE0o clipboard"
      }
    },
    renameModal: {
      title: "\u0110\u1ED5i t\xEAn",
      content: "B\u1EA1n s\u1EAFp thay \u0111\u1ED5i ph\u1EA7n m\u1EDF r\u1ED9ng t\u1EADp tin. B\u1EA1n c\xF3 mu\u1ED1n ti\u1EBFp t\u1EE5c kh\xF4ng?",
      cancel: "H\u1EE7y",
      submit: "Ti\u1EBFp t\u1EE5c"
    }
  }
};
export var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};
export default withLocales(locales);