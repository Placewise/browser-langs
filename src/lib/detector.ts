import { find, Language } from './language';

/**
 * Detects current browser's language.
 */
export function detect(): Language | null {
  const languageCode = getCurrentLanguageCode();
  if (!languageCode) {
    return null;
  }

  return processLanguageCode(languageCode);
}

/**
 * Detects all available browser's languages.
 */
export function detectAll(): Array<Language | null> | null {
  let languageCodes = getCurrentLanguageCodes();
  if (!languageCodes) {
    languageCodes = [];
  }
  const languages = languageCodes
    .map(code => processLanguageCode(code))
    .filter(l => l != null);

  if (languages) {
    return languages;
  }

  const language = detect();
  return language ? [language] : null;
}

function processLanguageCode(code: string): Language | null {
  let language = find(code);

  if (!language) {
    // retry with first part of language code
    if (code.indexOf('-') !== -1) {
      code = code.split('-')[0];
    }

    if (code.indexOf('_') !== -1) {
      code = code.split('_')[0];
    }

    language = find(code);
  }

  return language;
}

function getCurrentLanguageCode(): string | null {
  if (
    typeof window === 'undefined' ||
    typeof window.navigator === 'undefined'
  ) {
    return null;
  }

  let browserCultureLang: any = window.navigator.languages
    ? window.navigator.languages[0]
    : null;
  browserCultureLang =
    browserCultureLang ||
    window.navigator.language ||
    (window.navigator as any).browserLanguage ||
    (window.navigator as any).userLanguage;

  return browserCultureLang;
}

function getCurrentLanguageCodes(): string[] | null {
  if (
    typeof window === 'undefined' ||
    typeof window.navigator === 'undefined'
  ) {
    return null;
  }

  return (window.navigator as any).languages || null;
}
