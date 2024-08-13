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
export var locales = {
  en: en,
  fr: fr
};
export default withLocales(locales);