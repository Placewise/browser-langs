export interface LanguageData {
  readonly name: string;
  readonly local: string;
  readonly code: string;
  readonly countries?: readonly string[];
};

export const LANGUAGES_DATA: ReadonlyArray<LanguageData> = [
  { name: 'Abkhaz', local: 'Аҧсуа', code: 'ab' },
  { name: 'Afar', local: 'Afaraf', code: 'aa' },
  { name: 'Afrikaans', local: 'Afrikaans', code: 'af' },
  { name: 'Akan', local: 'Akan', code: 'ak' },
  { name: 'Albanian', local: 'Shqip', code: 'sq' },
  { name: 'Amharic', local: 'አማርኛ', code: 'am' },
  { name: 'Arabic', local: 'العربية', code: 'ar', countries: ['DZ', 'BH', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'QA', 'SA', 'SY', 'TN', 'AE', 'YE'] },
  { name: 'Aragonese', local: 'Aragonés', code: 'an' },
  { name: 'Armenian', local: 'Հայերեն', code: 'hy' },
  { name: 'Assamese', local: 'অসমীয়া', code: 'as' },
  { name: 'Avaric', local: 'Авар', code: 'av' },
  { name: 'Avestan', local: 'avesta', code: 'ae' },
  { name: 'Aymara', local: 'Aymar', code: 'ay' },
  { name: 'Azerbaijani', local: 'Azərbaycanca', code: 'az' },
  { name: 'Bambara', local: 'Bamanankan', code: 'bm' },
  { name: 'Bashkir', local: 'Башҡортса', code: 'ba' },
  { name: 'Basque', local: 'Euskara', code: 'eu' },
  { name: 'Belarusian', local: 'Беларуская', code: 'be' },
  { name: 'Bengali', local: 'বাংলা', code: 'bn' },
  { name: 'Bihari', local: 'भोजपुरी', code: 'bh' },
  { name: 'Bislama', local: 'Bislama', code: 'bi' },
  { name: 'Bosnian', local: 'Bosanski', code: 'bs' },
  { name: 'Breton', local: 'Brezhoneg', code: 'br' },
  { name: 'Bulgarian', local: 'Български', code: 'bg' },
  { name: 'Burmese', local: 'မြန်မာဘာသာ', code: 'my' },
  { name: 'Catalan', local: 'Català', code: 'ca' },
  { name: 'Chamorro', local: 'Chamoru', code: 'ch' },
  { name: 'Chechen', local: 'Нохчийн', code: 'ce' },
  { name: 'Chichewa', local: 'Chichewa', code: 'ny' },
  { name: 'Chinese', local: '中文', code: 'zh', countries: ['HK', 'CN', 'SG', 'TW'] },
  { name: 'Chuvash', local: 'Чӑвашла', code: 'cv' },
  { name: 'Cornish', local: 'Kernewek', code: 'kw' },
  { name: 'Corsican', local: 'Corsu', code: 'co' },
  { name: 'Cree', local: 'ᓀᐦᐃᔭᐍᐏᐣ', code: 'cr' },
  { name: 'Croatian', local: 'Hrvatski', code: 'hr' },
  { name: 'Czech', local: 'Čeština', code: 'cs' },
  { name: 'Danish', local: 'Dansk', code: 'da' },
  { name: 'Divehi', local: 'Divehi', code: 'dv' },
  { name: 'Dutch', local: 'Nederlands', code: 'nl', countries: ['BE'] },
  { name: 'Dzongkha', local: 'རྫོང་ཁ', code: 'dz' },
  { name: 'English', local: 'English', code: 'en', countries: ['AU', 'BZ', 'CA', 'IE', 'JM', 'NZ', 'PH', 'ZA', 'TT', 'GB', 'US', 'ZW'] },
  { name: 'Esperanto', local: 'Esperanto', code: 'eo' },
  { name: 'Estonian', local: 'Eesti', code: 'et' },
  { name: 'Ewe', local: 'Eʋegbe', code: 'ee' },
  { name: 'Faroese', local: 'Føroyskt', code: 'fo' },
  { name: 'Fijian', local: 'Na Vosa Vaka-Viti', code: 'fj' },
  { name: 'Finnish', local: 'Suomi', code: 'fi' },
  { name: 'French', local: 'Français', code: 'fr', countries: ['BE', 'CA', 'FR', 'LU', 'MC', 'CH'] },
  { name: 'Fula', local: 'Fulfulde', code: 'ff' },
  { name: 'Galician', local: 'Galego', code: 'gl' },
  { name: 'Georgian', local: 'ქართული', code: 'ka' },
  { name: 'German', local: 'Deutsch', code: 'de', countries: ['AT', 'DE', 'LI', 'LU', 'CH'] },
  { name: 'Greek', local: 'Ελληνικά', code: 'el' },
  { name: 'Guaraní', local: "Avañe'ẽ", code: 'gn' },
  { name: 'Gujarati', local: 'ગુજરાતી', code: 'gu' },
  { name: 'Haitian', local: 'Kreyòl Ayisyen', code: 'ht' },
  { name: 'Hausa', local: 'هَوُسَ', code: 'ha' },
  { name: 'Hebrew', local: 'עברית', code: 'he' },
  { name: 'Herero', local: 'Otjiherero', code: 'hz' },
  { name: 'Hindi', local: 'हिन्दी', code: 'hi' },
  { name: 'Hiri Motu', local: 'Hiri Motu', code: 'ho' },
  { name: 'Hungarian', local: 'Magyar', code: 'hu' },
  { name: 'Interlingua', local: 'Interlingua', code: 'ia' },
  { name: 'Indonesian', local: 'Bahasa Indonesia', code: 'id' },
  { name: 'Interlingue', local: 'Interlingue', code: 'ie' },
  { name: 'Irish', local: 'Gaeilge', code: 'ga' },
  { name: 'Igbo', local: 'Igbo', code: 'ig' },
  { name: 'Inupiaq', local: 'Iñupiak', code: 'ik' },
  { name: 'Ido', local: 'Ido', code: 'io' },
  { name: 'Icelandic', local: 'Íslenska', code: 'is' },
  { name: 'Italian', local: 'Italiano', code: 'it', countries: ['CH'] },
  { name: 'Inuktitut', local: 'ᐃᓄᒃᑎᑐᑦ', code: 'iu' },
  { name: 'Japanese', local: '日本語', code: 'ja' },
  { name: 'Javanese', local: 'Basa Jawa', code: 'jv' },
  { name: 'Kalaallisut', local: 'Kalaallisut', code: 'kl' },
  { name: 'Kannada', local: 'ಕನ್ನಡ', code: 'kn' },
  { name: 'Kanuri', local: 'Kanuri', code: 'kr' },
  { name: 'Kashmiri', local: 'كشميري', code: 'ks' },
  { name: 'Kazakh', local: 'Қазақша', code: 'kk' },
  { name: 'Khmer', local: 'ភាសាខ្មែរ', code: 'km' },
  { name: 'Kikuyu', local: 'Gĩkũyũ', code: 'ki' },
  { name: 'Kinyarwanda', local: 'Kinyarwanda', code: 'rw' },
  { name: 'Kyrgyz', local: 'Кыргызча', code: 'ky' },
  { name: 'Komi', local: 'Коми', code: 'kv' },
  { name: 'Kongo', local: 'Kongo', code: 'kg' },
  { name: 'Korean', local: '한국어', code: 'ko', countries: ['KP', 'KR'] },
  { name: 'Kurdish', local: 'Kurdî', code: 'ku' },
  { name: 'Kwanyama', local: 'Kuanyama', code: 'kj' },
  { name: 'Latin', local: 'Latina', code: 'la' },
  { name: 'Luxembourgish', local: 'Lëtzebuergesch', code: 'lb' },
  { name: 'Ganda', local: 'Luganda', code: 'lg' },
  { name: 'Limburgish', local: 'Limburgs', code: 'li' },
  { name: 'Lingala', local: 'Lingála', code: 'ln' },
  { name: 'Lao', local: 'ພາສາລາວ', code: 'lo' },
  { name: 'Lithuanian', local: 'Lietuvių', code: 'lt' },
  { name: 'Luba-Katanga', local: 'Tshiluba', code: 'lu' },
  { name: 'Latvian', local: 'Latviešu', code: 'lv' },
  { name: 'Manx', local: 'Gaelg', code: 'gv' },
  { name: 'Macedonian', local: 'Македонски', code: 'mk' },
  { name: 'Malagasy', local: 'Malagasy', code: 'mg' },
  { name: 'Malay', local: 'Bahasa Melayu', code: 'ms' },
  { name: 'Malayalam', local: 'മലയാളം', code: 'ml' },
  { name: 'Maltese', local: 'Malti', code: 'mt' },
  { name: 'Māori', local: 'Māori', code: 'mi' },
  { name: 'Marathi', local: 'मराठी', code: 'mr' },
  { name: 'Marshallese', local: 'Kajin M̧ajeļ', code: 'mh' },
  { name: 'Mongolian', local: 'Монгол', code: 'mn' },
  { name: 'Nauru', local: 'Dorerin Naoero', code: 'na' },
  { name: 'Navajo', local: 'Diné Bizaad', code: 'nv' },
  { name: 'Northern Ndebele', local: 'isiNdebele', code: 'nd' },
  { name: 'Nepali', local: 'नेपाली', code: 'ne' },
  { name: 'Ndonga', local: 'Owambo', code: 'ng' },
  { name: 'Norwegian Bokmål', local: 'Norsk (Bokmål)', code: 'nb' },
  { name: 'Norwegian Nynorsk', local: 'Norsk (Nynorsk)', code: 'nn' },
  { name: 'Norwegian', local: 'Norsk', code: 'no' },
  { name: 'Nuosu', local: 'ꆈꌠ꒿ Nuosuhxop', code: 'ii' },
  { name: 'Southern Ndebele', local: 'isiNdebele', code: 'nr' },
  { name: 'Occitan', local: 'Occitan', code: 'oc' },
  { name: 'Ojibwe', local: 'ᐊᓂᔑᓈᐯᒧᐎᓐ', code: 'oj' },
  { name: 'Old Church Slavonic', local: 'Словѣ́ньскъ', code: 'cu' },
  { name: 'Oromo', local: 'Afaan Oromoo', code: 'om' },
  { name: 'Oriya', local: 'ଓଡି଼ଆ', code: 'or' },
  { name: 'Ossetian', local: 'Ирон æвзаг', code: 'os' },
  { name: 'Panjabi', local: 'ਪੰਜਾਬੀ', code: 'pa', countries: ['IN', 'PK'] },
  { name: 'Pāli', local: 'पाऴि', code: 'pi' },
  { name: 'Persian', local: 'فارسی', code: 'fa', countries: ['IR'] },
  { name: 'Polish', local: 'Polski', code: 'pl' },
  { name: 'Pashto', local: 'پښتو', code: 'ps' },
  { name: 'Portuguese', local: 'Português', code: 'pt', countries: ['BR'] },
  { name: 'Quechua', local: 'Runa Simi', code: 'qu' },
  { name: 'Romansh', local: 'Rumantsch', code: 'rm' },
  { name: 'Kirundi', local: 'Kirundi', code: 'rn' },
  { name: 'Romanian', local: 'Română', code: 'ro', countries: ['MO'] },
  { name: 'Russian', local: 'Русский', code: 'ru', countries: ['MO'] },
  { name: 'Sanskrit', local: 'संस्कृतम्', code: 'sa' },
  { name: 'Sardinian', local: 'Sardu', code: 'sc' },
  { name: 'Sindhi', local: 'سنڌي‎', code: 'sd' },
  { name: 'Northern Sami', local: 'Sámegiella', code: 'se' },
  { name: 'Samoan', local: 'Gagana Sāmoa', code: 'sm' },
  { name: 'Sango', local: 'Sängö', code: 'sg' },
  { name: 'Serbian', local: 'Српски', code: 'sr' },
  { name: 'Gaelic', local: 'Gàidhlig', code: 'gd', countries: ['IE'] },
  { name: 'Shona', local: 'ChiShona', code: 'sn' },
  { name: 'Sinhala', local: 'සිංහල', code: 'si' },
  { name: 'Slovak', local: 'Slovenčina', code: 'sk' },
  { name: 'Slovene', local: 'Slovenščina', code: 'sl' },
  { name: 'Somali', local: 'Soomaaliga', code: 'so' },
  { name: 'Southern Sotho', local: 'Sesotho', code: 'st' },
  { name: 'Spanish', local: 'Español', code: 'es', countries: ['AR', 'BO', 'CL', 'CO', 'CR', 'DO', 'EC', 'SV', 'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'ES', 'UY', 'VE'] },
  { name: 'Sundanese', local: 'Basa Sunda', code: 'su' },
  { name: 'Swahili', local: 'Kiswahili', code: 'sw' },
  { name: 'Swati', local: 'SiSwati', code: 'ss' },
  { name: 'Swedish', local: 'Svenska', code: 'sv', countries: ['FI', 'SV'] },
  { name: 'Tamil', local: 'தமிழ்', code: 'ta' },
  { name: 'Telugu', local: 'తెలుగు', code: 'te' },
  { name: 'Tajik', local: 'Тоҷикӣ', code: 'tg' },
  { name: 'Thai', local: 'ภาษาไทย', code: 'th' },
  { name: 'Tigrinya', local: 'ትግርኛ', code: 'ti' },
  { name: 'Tibetan Standard', local: 'བོད་ཡིག', code: 'bo' },
  { name: 'Turkmen', local: 'Türkmençe', code: 'tk' },
  { name: 'Tagalog', local: 'Tagalog', code: 'tl' },
  { name: 'Tswana', local: 'Setswana', code: 'tn' },
  { name: 'Tonga', local: 'faka Tonga', code: 'to' },
  { name: 'Turkish', local: 'Türkçe', code: 'tr' },
  { name: 'Tsonga', local: 'Xitsonga', code: 'ts' },
  { name: 'Tatar', local: 'Татарча', code: 'tt' },
  { name: 'Twi', local: 'Twi', code: 'tw' },
  { name: 'Tahitian', local: 'Reo Mā’ohi', code: 'ty' },
  { name: 'Uyghur', local: 'ئۇيغۇرچه', code: 'ug' },
  { name: 'Ukrainian', local: 'Українська', code: 'uk' },
  { name: 'Urdu', local: 'اردو', code: 'ur' },
  { name: 'Uzbek', local: 'O‘zbek', code: 'uz' },
  { name: 'Venda', local: 'Tshivenḓa', code: 've' },
  { name: 'Vietnamese', local: 'Tiếng Việt', code: 'vi' },
  { name: 'Volapük', local: 'Volapük', code: 'vo' },
  { name: 'Walloon', local: 'Walon', code: 'wa' },
  { name: 'Welsh', local: 'Cymraeg', code: 'cy' },
  { name: 'Wolof', local: 'Wolof', code: 'wo' },
  { name: 'Western Frisian', local: 'Frysk', code: 'fy' },
  { name: 'Xhosa', local: 'isiXhosa', code: 'xh' },
  { name: 'Yiddish', local: 'ייִדיש', code: 'yi' },
  { name: 'Yoruba', local: 'Yorùbá', code: 'yo' },
  { name: 'Zhuang', local: 'Cuengh', code: 'za' },
  { name: 'Zulu', local: 'isiZulu', code: 'zu' },
];
