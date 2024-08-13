import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
var en = {
  themes: {
    activity: "Activity",
    family: "Family",
    finance: "Finance",
    health: "Health",
    home: "Home",
    identity: "Identity",
    invoice: "Invoice",
    others: "Others",
    transport: "Transport",
    undefined: "Undefined",
    work_study: "Work"
  }
};
var fr = {
  themes: {
    activity: "Loisirs",
    family: "Famille",
    finance: "Finances",
    health: "Sant\xE9",
    home: "Logement",
    identity: "Identit\xE9",
    invoice: "Factures",
    others: "Autres",
    transport: "Transport",
    undefined: "Ind\xE9fini",
    work_study: "Travail"
  }
};
export var locales = {
  en: en,
  fr: fr
};
export default withOnlyLocales(locales);