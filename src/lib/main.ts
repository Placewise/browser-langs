import { COUNTRIES_DATA, CountryData } from './data/countries-data';
import { LanguageData, LANGUAGES_DATA } from './data/languages-data';

export class Language {
  /**
   * Common name of language (only).
   */
  public languageName: string;
  /**
   * Local name of language (only).
   */
  public languageLocal: string;
  /**
   * ISO 639-1 language code.
   */
  public iso639: string;
  /**
   * Country details if country variety.
   */
  public country?: Country | null;

  constructor(
    languageData: LanguageData,
    countryCode: string = '',
    countryData?: CountryData | null
  ) {
    this.languageName = languageData.name;
    this.languageLocal = languageData.local;
    this.iso639 = languageData.code;

    if (countryData) {
      this.country = {
        name: countryData.name,
        local: countryData.local,
        code: countryCode
      };
    }
  }

  /**
   * Browser language code.
   */
  public get code(): string {
    if (!this.country) {
      return this.iso639;
    }

    return `${this.iso639}-${this.country.code}`;
  }

  /**
   * Common name of language with country.
   */
  public get name(): string {
    if (!this.country) {
      return this.languageName;
    }

    return `${this.languageName} (${this.country.name})`;
  }

  /**
   * Local name of language with country.
   */
  public get local(): string {
    if (!this.country) {
      return this.languageLocal;
    }

    return `${this.languageLocal} (${this.country.local})`;
  }
}

export interface Country {
  /**
   * Common name of country.
   */
  readonly name: string;
  /**
   * Local name of country.
   */
  readonly local: string;
  /**
   * ISO 3166-1 country code.
   */
  readonly code: string;
}

let allCache: Language[];

/**
 * Fetch all available languages.
 */
export function all(): Language[] {
  if (allCache) {
    return allCache;
  }

  prepareAllCache();
  return allCache;
}

/**
 * Find desired language via full language code
 * @param languageCode - language code
 */
export function find(languageCode: string): Language | null {
  if (!allCache) {
    prepareAllCache();
  }

  const lowercasedLanguageCode = languageCode.toLowerCase();
  return (
    allCache.find(l => l.code.toLowerCase() === lowercasedLanguageCode) || null
  );
}

function findCountry(countryCode: string): Country | null {
  const country = COUNTRIES_DATA[countryCode];

  return country ? { ...country, code: countryCode } : null;
}

function prepareAllCache(): void {
  const languages: Language[] = [];

  LANGUAGES_DATA.forEach(l => {
    languages.push(new Language(l));

    if (!l.countries) {
      return;
    }

    l.countries.forEach(countryCode => {
      languages.push(new Language(l, countryCode, findCountry(countryCode)));
    });
  });

  allCache = languages;
}
