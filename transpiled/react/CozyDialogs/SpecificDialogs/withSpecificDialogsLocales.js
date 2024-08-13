import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
var en = {
  cancel: "Cancel",
  allow: "Allow",
  "allow-location-dialog": {
    title: "Allow access to your location",
    description: "Your Cozy needs to always be authorised to access your phone's location in order to memorise and help you analyse your movements, even when the app is not in use.\n\nIt will NEVER be passed on to anyone without your request.\n\nYou can deactivate this feature from the Coach CO2 app settings."
  },
  "install-flagship-app-dialog": {
    title: "Scan the QR Code",
    text: "or go directly to the <img src=%{iosIconSrc} /> <a href='%{iosUrl}' class='u-link' target='_blank' rel='noopener'>App Store</a><br>or <img src=%{androidIconSrc} /> <a href='%{androidUrl}' class='u-link' target='_blank' rel='noopener'>Play Store</a> to install the Cozy Cloud app",
    a11n: "Go to the Cozy Cloud application download page"
  },
  "authentification-dialog": {
    title: "Login",
    "title-oidc": "Cozy Pass",
    subtitle: "For security, please confirm your identity",
    label: "Cozy password",
    "label-oidc": "Cozy Pass password",
    abort: "Leave",
    unlock: "Unlock",
    "forgotten-password": "I forgot my password",
    errors: {
      invalid_password: "Incorrect password, try again.",
      server_error: "Something went wrong with the server. Please, reload the page."
    }
  }
};
var fr = {
  cancel: "Annuler",
  allow: "Autoriser",
  "allow-location-dialog": {
    title: "Autoriser l'acc\xE8s \xE0 votre position",
    description: "Votre Cozy a besoin d'\xEAtre toujours autoris\xE9 \xE0 acc\xE9der \xE0 la position de votre t\xE9l\xE9phone pour m\xE9moriser, et vous aider \xE0 analyser vos d\xE9placements, m\xEAme lorsque l'app n'est pas utilis\xE9e ou affich\xE9e.\n\nElle ne sera JAMAIS transmise \xE0 qui que ce soit sans votre demande.\n\nVous pourrez d\xE9sactiver cette fonctionnalit\xE9 depuis les param\xE8tres de l'app Coach CO2."
  },
  "install-flagship-app-dialog": {
    title: "Scannez le QR Code",
    text: "ou rendez vous directement sur <img src=%{iosIconSrc} /> <a href='%{iosUrl}' class='u-link' target='_blank' rel='noopener'>l\u2019App Store</a><br>ou sur le <img src=%{androidIconSrc} /> <a href='%{androidUrl}' class='u-link' target='_blank' rel='noopener'>Play Store</a> pour installer l\u2019app Cloud Personnel Cozy",
    a11n: "Aller sur la page de t\xE9l\xE9chargement de l'application Cloud Personnel Cozy"
  },
  "authentification-dialog": {
    title: "Authentification",
    "title-oidc": "Cozy Pass",
    subtitle: "Par s\xE9curit\xE9, merci de confirmer votre identit\xE9",
    label: "Mot de passe Cozy",
    "label-oidc": "Mot de passe Cozy Pass",
    abort: "Quitter",
    unlock: "D\xE9verrouiller",
    "forgotten-password": "J'ai oubli\xE9 mon mot de passe",
    errors: {
      invalid_password: "Mot de passe incorrect, essayer \xE0 nouveau.",
      server_error: "Une erreur s'est produite. Merci de recharger la page."
    }
  }
};
export var locales = {
  en: en,
  fr: fr
};
export default withOnlyLocales(locales);