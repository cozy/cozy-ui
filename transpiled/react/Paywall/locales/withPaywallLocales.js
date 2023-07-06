import withOnlyLocales from "cozy-ui/transpiled/react/I18n/withOnlyLocales";
var en = {
  mobileApp: {
    action: "I understand"
  },
  onlyOfficePaywall: {
    premium: {
      title: "Upgrade your Cozy!",
      content: "To unlock this feature, or simply support us, you can change your Cozy offer.",
      action: "Check our plans"
    },
    "public": {
      title: "Information",
      content: "You cannot edit this file online. Please ask the document owner to update their Cozy subscription.",
      action: "I understand"
    },
    "default": {
      title: "Information",
      content: "Your current offer does not allow you to take advantage of this feature.",
      action: "I understand"
    }
  },
  passwordSharingPaywall: {
    premium: {
      title: "Upgrade your Cozy!",
      content: "To unlock this feature, or simply support us, you can change your Cozy offer.",
      action: "Check our plans"
    },
    "default": {
      title: "Information",
      content: "Your current offer does not allow you to take advantage of this feature.",
      action: "I understand"
    }
  },
  maxAccountsByKonnectorPaywall: {
    premium: {
      title: "Upgrade your Cozy!",
      content: "Your offer allows you to connect %{smart_count} account %{konnectorName} in your Cozy.\n\nTo unlock this feature, or simply support us, you can change your Cozy offer. |||| Your offer allows you to connect %{smart_count} accounts %{konnectorName} in your Cozy.\n\nTo unlock this feature, or simply support us, you can change your Cozy offer.",
      action: "Check our plans"
    },
    "default": {
      title: "Information",
      content: "Your current offer does not allow you to take advantage of this feature.",
      action: "I understand"
    }
  },
  maxAccountsPaywall: {
    premium: {
      title: "Upgrade your Cozy!",
      content: "Your offer allows you to connect %{smart_count} account in your Cozy.\n\nTo unlock this feature, or simply support us, you can change your Cozy offer. |||| Your offer allows you to connect %{smart_count} accounts in your Cozy.\n\nTo unlock this feature, or simply support us, you can change your Cozy offer.",
      action: "Check our plans"
    },
    "default": {
      title: "Information",
      content: "Your current offer does not allow you to take advantage of this feature.",
      action: "I understand"
    }
  },
  maxPapersPaywall: {
    premium: {
      title: "Upgrade your Cozy!",
      content: "Your offer allows you to manually add up to %{smart_count} paper.\n\nTo unlock this feature, or simply support us, you can modify the offer of your Cozy. |||| Your offer allows you to manually add up to %{smart_count} papers.\n\nTo unlock this feature, or simply support us, you can modify the offer of your Cozy.",
      action: "Check our plans"
    },
    "default": {
      title: "Information",
      content: "Your current offer does not allow you to take advantage of this feature.",
      action: "I understand"
    }
  }
};
var fr = {
  mobileApp: {
    action: "J'ai compris"
  },
  onlyOfficePaywall: {
    premium: {
      title: "Augmenter votre Cozy !",
      content: "Pour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy.",
      action: "Voir les offres"
    },
    "public": {
      title: "Information",
      content: "Vous ne pouvez pas \xE9diter ce fichier en ligne. Merci de demander au propri\xE9taire du document de mettre \xE0 jour son abonnement Cozy.",
      action: "J'ai compris"
    },
    "default": {
      title: "Information",
      content: "Votre offre actuelle ne vous permet pas de profiter de cette fonctionnalit\xE9.",
      action: "J'ai compris"
    }
  },
  passwordSharingPaywall: {
    premium: {
      title: "Augmenter votre Cozy !",
      content: "Pour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy.",
      action: "Voir les offres"
    },
    "default": {
      title: "Information",
      content: "Votre offre actuelle ne vous permet pas de profiter de cette fonctionnalit\xE9.",
      action: "J'ai compris"
    }
  },
  maxAccountsByKonnectorPaywall: {
    premium: {
      title: "Augmenter votre Cozy !",
      content: "Votre offre vous permet de connecter %{smart_count} compte %{konnectorName} dans votre Cozy.\n\nPour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy. |||| Votre offre vous permet de connecter %{smart_count} comptes %{konnectorName} dans votre Cozy.\n\nPour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy.",
      action: "Voir les offres"
    },
    "default": {
      title: "Information",
      content: "Votre offre actuelle ne vous permet pas de profiter de cette fonctionnalit\xE9.",
      action: "J'ai compris"
    }
  },
  maxAccountsPaywall: {
    premium: {
      title: "Augmenter votre Cozy !",
      content: "Votre offre vous permet de connecter %{smart_count} compte dans votre Cozy.\n\nPour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy. |||| Votre offre vous permet de connecter %{smart_count} comptes dans votre Cozy.\n\nPour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy.",
      action: "Voir les offres"
    },
    "default": {
      title: "Information",
      content: "Votre offre actuelle ne vous permet pas de profiter de cette fonctionnalit\xE9.",
      action: "J'ai compris"
    }
  },
  maxPapersPaywall: {
    premium: {
      title: "Augmenter votre Cozy !",
      content: "Votre offre vous permet d'ajouter manuellement jusqu'\xE0 %{smart_count} papier.\n\nPour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy. |||| Votre offre vous permet d'ajouter manuellement jusqu'\xE0 %{smart_count} papiers.\n\nPour d\xE9bloquer cette fonctionnalit\xE9, ou simplement nous soutenir, vous pouvez modifier l'offre de votre Cozy.",
      action: "Voir les offres"
    },
    "default": {
      title: "Information",
      content: "Votre offre actuelle ne vous permet pas de profiter de cette fonctionnalit\xE9.",
      action: "J'ai compris"
    }
  }
};
export var locales = {
  en: en,
  fr: fr
};
export default withOnlyLocales(locales);