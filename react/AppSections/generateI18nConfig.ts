export const generateI18nConfig = (
  categories?: Record<string, string>
): {
  en: Record<string, string>
  fr: Record<string, string>
} => {
  if (!categories) return { en: {}, fr: {} }

  const i18nConfig: Record<string, string> = {}

  for (const [key, value] of Object.entries(categories)) {
    // Extract the final part of the path as the display name
    const displayName =
      value.split('/').pop() ?? ''.replace(/([A-Z])/g, ' $1').trim()

    i18nConfig[`app_categories.${key}`] = displayName
  }

  return {
    en: i18nConfig,
    fr: i18nConfig
  }
}
