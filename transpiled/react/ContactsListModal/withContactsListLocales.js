var en = {
  cancel: "Cancel",
  save: "Save",
  newContact: "New contact",
  coordinates: "Coordinates",
  givenName: "Firstname",
  familyName: "Lastname",
  addContact: "Add a contact",
  searchContact: "Search a contact",
  emptyContact: "No contact"
};
var fr = {
  cancel: "Annuler",
  save: "Enregistrer",
  newContact: "Nouveau contact",
  coordinates: "Coordonn\xE9es",
  givenName: "Pr\xE9nom",
  familyName: "Nom",
  addContact: "Ajouter un contact",
  searchContact: "Rechercher un contact",
  emptyContact: "Aucun contact"
};
import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
export var locales = {
  en: en,
  fr: fr
};
export var withContactsListLocales = withLocales(locales);