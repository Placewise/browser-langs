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
   * Local (cultural) name of language with country.
   */
  public get local(): string {
    if (!this.country) {
      return this.languageLocal;
    }

    return `${this.languageLocal} (${this.country.local})`;
  }

  /**
   * Returns serialized Language object (some libraries aren't handling objects correctly e.g. select2)
   */
  public serialized(): any {
    return {
      languageName: this.languageName,
      languageLocal: this.languageLocal,
      iso639: this.iso639,
      code: this.code,
      name: this.name,
      local: this.local
    };
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
 * Fetch all available countries.
 */
export function allCountries(): Country[] {
  return Object.keys(COUNTRIES_DATA).map(code => {
    const countryData = COUNTRIES_DATA[code];
    return { code, name: countryData[0], local: countryData[1] };
  });
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

export function findCountry(countryCode: string): Country | null {
  const country = COUNTRIES_DATA[countryCode];

  return country
    ? { name: country[0], local: country[1], code: countryCode }
    : null;
}

function prepareAllCache(): void {
  const languages: Language[] = [];

  LANGUAGES_DATA.forEach(l => {
    const languageData: LanguageData = {
      name: l[0],
      local: l[1],
      code: l[2],
      countries: l[3]
    };
    languages.push(new Language(languageData));

    if (!languageData.countries) {
      return;
    }

    languageData.countries.forEach(countryCode => {
      languages.push(
        new Language(languageData, countryCode, findCountry(countryCode))
      );
    });
  });

  allCache = languages;
}
