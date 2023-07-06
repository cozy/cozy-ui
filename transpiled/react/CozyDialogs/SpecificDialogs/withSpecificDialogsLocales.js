import withOnlyLocales from "cozy-ui/transpiled/react/I18n/withOnlyLocales";
var en = {
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