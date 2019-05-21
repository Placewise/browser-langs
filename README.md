# Browser Langs

## What's inside?

[BCP47](https://tools.ietf.org/html/bcp47) defines standard for language codes that browser should use. Specification is quite wide but we will use most common setup which is used today:

```
<2 letter ISO 639>
// e.g. "no", "ca", "nl"
```

or

```
<2 letter ISO 639>-<ISO 3166-1>
// e.g. "es-mx", "ar-sa", "nl-be"
```

## Installation

```bash
npm i browser-langs
# or
yarn add browser-langs
```

## Documentation

```typescript
import { all, find } from 'browser-langs';

// get list of all cultural (and not only) language codes
all() // list of `Language` objects returned

// find language matching language code
find('en') // English Language object will be returned
find('en-gb') // English (United Kingdom) Language object will be returned

// detect currently selected language in browser
detect() // current (most matching) Language object will be returned

// detect currently selected languages in browser (based on priority)
detectAll() // returns list of current Language objects
```

## Credits

* Language codes: https://github.com/adlawson/nodejs-langs
* Original list of countries: https://github.com/mledoze/countries

## License

Please see [LICENSE.txt](LICENSE.txt)

## Author

![Boostcom](boostcom-logo.png)

**[Boostcom](https://boostcom.com/)** - we provide the most powerful management- and loyalty platform built for the needs of shopping centres.
