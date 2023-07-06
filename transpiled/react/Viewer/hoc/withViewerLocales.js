import withLocales from "cozy-ui/transpiled/react/I18n/withLocales";
var en = {
  Viewer: {
    actions: {
      download: "Download",
      forward: "Send"
    },
    alert: {
      preparing: "Preparing your files\u2026"
    },
    close: "close",
    download: "Download",
    error: {
      downloadFile: {
        offline: "You should be connected to download this file"
      },
      generic: "An error occurred when opening this file, please try again.",
      missing: "This file is missing",
      network: "This file could not be loaded. Do you have a working internet connection right now?",
      noapp: "No application on your device can open this file with mime type: %{fileMime} ",
      offline: "You should be connected to open this file"
    },
    goto: "Go to %{url}",
    next: "Next",
    openWith: "Open with...",
    openInOnlyOffice: "Open with Only Office",
    panel: {
      certifications: {
        carbonCopy: {
          title: "Carbon Copy",
          caption: "Indicates whether the document is defined as \"authentic and original\" by Cozy Cloud, the host of your Cozy, as it can claim that it comes directly from a third-party service, without having undergone any modification."
        },
        electronicSafe: {
          title: "Electronic Safe",
          caption: "Indicates whether the original document is secured by your personal digital safe with the certifications that give it probative value and a 50-year retention guarantee beyond its deposit."
        }
      },
      qualification: {
        date: {
          title: {
            datetime: "Added on",
            AObtentionDate: "License A, delivered on",
            BObtentionDate: "License B, delivered on",
            CObtentionDate: "License C, delivered on",
            DObtentionDate: "License D, delivered on",
            issueDate: "Delivered on",
            expirationDate: "Expiration date",
            referencedDate: "Referenced date",
            shootingDate: "Shooting date",
            obtentionDate: "Date obtained",
            date: "Document date"
          }
        },
        information: {
          title: {
            caf: {
              number: "CAF file number"
            },
            payment_proof_family_allowance: {
              number: "CAF file number"
            },
            vehicle_registration: {
              number: "Vehicle registration number (VIN)"
            },
            national_id_card: {
              number: "National ID card number"
            },
            bank_details: {
              number: "IBAN number"
            },
            passport: {
              number: "Passport number"
            },
            driver_license: {
              number: "License number"
            },
            residence_permit: {
              number: "License number"
            },
            national_health_insurance_card: {
              number: "National health insurance card number"
            },
            country: "Beneficiary nationality",
            refTaxIncome: "Reference tax income",
            contractType: "Contract type",
            noticePeriod: "Expiration alert"
          },
          day: "day |||| days"
        },
        contact: "Owner",
        page: "Side of the document",
        front: "Front side",
        back: "Back side",
        qualification: "Qualification",
        noInfo: "No information",
        actions: {
          copy: "Copy",
          copyClipboard: "Copy to clipboard",
          edit: "Edit"
        },
        expired: "Expired",
        expiresIn: "Expires in %{duration}"
      },
      expiration: {
        description: "This document expires in %{duration}, consider renewing it",
        dismiss: "I understood"
      },
      title: "Useful information"
    },
    previous: "Previous",
    retry: "Retry",
    scaledown: "Zoom out",
    scaleup: "Zoom in",
    share: {
      title: "Link to my document %{name}",
      text: "Here is a link to my document %{name}: ",
      error: "Problem with link recovery: %{error}",
      success: "Your file has been shared with success"
    },
    snackbar: {
      copiedToClipboard: {
        success: "Copied to clipboard",
        error: "Cannot copy to clipboard"
      }
    }
  }
};
var fr = {
  Viewer: {
    actions: {
      download: "T\xE9l\xE9charger",
      forward: "Envoyer"
    },
    alert: {
      preparing: "Preparation de vos fichiers\u2026"
    },
    close: "Fermer",
    download: "T\xE9l\xE9charger",
    error: {
      downloadFile: {
        offline: "Vous devez \xEAtre connect\xE9 pour t\xE9l\xE9charger ce fichier"
      },
      generic: "Une erreur s'est produite lors de l'ouverture de ce fichier, veuillez r\xE9essayer.",
      missing: "Le fichier est manquant",
      network: "Ce fichier n'a pas pu \xEAtre charg\xE9. Avez-vous une connexion internet qui fonctionne actuellement ?",
      noapp: "Aucune application de votre appareil ne peut ouvrir ce fichier avec le type mime : %{fileMime} ",
      offline: "Vous devez \xEAtre connect\xE9 pour ouvrir ce fichier"
    },
    goto: "Ouvrir %{url}",
    next: "Suivante",
    openWith: "Ouvrir avec...",
    openInOnlyOffice: "Ouvrir avec Only Office",
    panel: {
      certifications: {
        carbonCopy: {
          title: "Copie conforme",
          caption: "Le document est d\xE9fini \"authentique et original\" par Cozy Cloud, l'h\xE9bergeur de votre Cozy, car il peut affirmer qu'il provient directement des services de son \xE9metteur sans avoir subi aucune modification."
        },
        electronicSafe: {
          title: "Coffre-fort \xE9lectronique",
          caption: "Indique si le document original est s\xE9curis\xE9 par votre coffre-fort num\xE9rique personnel avec les certifications qui lui conf\xE8rent une valeur probante et une garantie de conservation de 50 ans au-del\xE0 de son d\xE9p\xF4t."
        }
      },
      qualification: {
        date: {
          title: {
            datetime: "Ajout\xE9 le",
            AObtentionDate: "Permis A, d\xE9livr\xE9 le",
            BObtentionDate: "Permis B, d\xE9livr\xE9 le",
            CObtentionDate: "Permis C, d\xE9livr\xE9 le",
            DObtentionDate: "Permis D, d\xE9livr\xE9 le",
            issueDate: "D\xE9livr\xE9 le",
            expirationDate: "Date d'expiration",
            referencedDate: "Date de r\xE9f\xE9rence",
            shootingDate: "Date de prise de vue",
            obtentionDate: "Date d'obtention",
            date: "Date du document"
          }
        },
        information: {
          title: {
            caf: {
              number: "Num\xE9ro de dossier CAF"
            },
            payment_proof_family_allowance: {
              number: "Num\xE9ro de dossier CAF"
            },
            vehicle_registration: {
              number: "Num\xE9ro de la carte grise (VIN)"
            },
            national_id_card: {
              number: "Num\xE9ro de la carte d'identit\xE9"
            },
            bank_details: {
              number: "Num\xE9ro d'IBAN"
            },
            passport: {
              number: "Num\xE9ro du passeport"
            },
            driver_license: {
              number: "Num\xE9ro du permis"
            },
            residence_permit: {
              number: "Num\xE9ro du permis"
            },
            national_health_insurance_card: {
              number: "Num\xE9ro de la carte vitale"
            },
            country: "Nationalit\xE9 du b\xE9n\xE9ficiaire",
            refTaxIncome: "Revenu fiscal de r\xE9f\xE9rence",
            contractType: "Type de contrat",
            noticePeriod: "Alerte d\u2019expiration"
          },
          day: "jour |||| jours"
        },
        contact: "Titulaire",
        page: "Face du document",
        front: "Face avant",
        back: "Face arri\xE8re",
        qualification: "Qualification",
        noInfo: "Non renseign\xE9(e)",
        actions: {
          copy: "Copier",
          copyClipboard: "Copier dans le presse-papier",
          edit: "Modifier"
        },
        expired: "Expir\xE9",
        expiresIn: "Expire dans %{duration}"
      },
      expiration: {
        description: "Ce document expire dans %{duration}, pensez \xE0 le renouveler",
        dismiss: "J'ai compris"
      },
      title: "Informations utiles"
    },
    previous: "Pr\xE9c\xE9dente",
    retry: "R\xE9essayer",
    scaledown: "Zoom arri\xE8re",
    scaleup: "Zoom avant",
    share: {
      title: "Lien vers mon document %{name}",
      text: "Voici un lien vers mon document %{name} : ",
      error: "Probl\xE8me avec la r\xE9cup\xE9ration du lien : %{error}",
      success: "Votre fichier a \xE9t\xE9 partag\xE9 avec succ\xE8s"
    },
    snackbar: {
      copiedToClipboard: {
        success: "Copi\xE9 dans le presse-papier",
        error: "Impossible de copier dans le presse-papier"
      }
    }
  }
};
export var locales = {
  en: en,
  fr: fr
};
export var withViewerLocales = withLocales(locales);