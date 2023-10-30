# Vefforritun 1, 2023: Verkefni 9, JS #3

[Kynning í fyrirlestri](https://youtu.be/2e6hEheac2w).

## Markmið

- Forrita á móti API með `fetch` og lesa gögn úr JSON.
- Forrita „single page app“ og nota History API.
- Notkun a `eslint` og `prettier`.

## Grunnur

Gefin er grunnur að verkefni:

- `package.json` með uppsetningu á `browser-sync`, `lint` og `prettier` scriptum.
- `index.html` með leiðbeiningum og tengingu við `main.js` sem einingu (_module_).
- Grunnur að forriti í `./src` með athugasemdir og tillögur að útfærslum eru í skjölunum. Kemur eftir fyrirlestur 30. október.

## Virkni

Tengjast skal [Launch Library API frá „The Space Devs“](https://ll.thespacedevs.com/2.2.0/swagger/) og leyfa leit og birtingu á geimskotum.

Nota þarf endapunkta fyrir leit og upplýsingar um geimskot, í grunninn á slóðinni: `https://ll.thespacedevs.com/2.2.0/swagger/` sem skjalar vefþjónustu með Swagger. Nota skal endapunktana:

- `https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search=<leitarorð>` þar sem `<leitarorð>` er það sem leitað er að.
- `https://ll.thespacedevs.com/2.2.0/launch/<id>` þar sem `<id>` er auðkenni geimskots.

Athugið að raun endapunktur er „rate limited“, þ.e.a.s. aðeins má gera `15` köll á klukkustund frá hverri IP tölu. Í þróun skal nota þróunarslóð sem hefur eldri gögn en ekki takmarkanir: `https://lldev.thespacedevs.com/docs/`, slóðir verða þá:

- `https://lldev.thespacedevs.com/2.2.0/launch/?mode=list&search=<leitarorð>`
- `https://lldev.thespacedevs.com/2.2.0/launch/<id>`

### Forsíða

Ef síða er opnuð án leitar eða vísunar í geimskot er birt forsíða með leitarformi.

Ef síða er opnuð með leitarstreng í querystring er sú leit keyrð og niðurstöður leitar birtar.

### Leit

Þegar leitað er skal birta upplýsingar um að verið sé að sækja gögn og birta síðan niðurstöður leitarinnar.

Ef engar niðurstöður eru fundnar skal birta skilaboð um það.

Ef villa kemur upp við leit skal birta upplýsingar um það.

Í leitarniðurstöðum skal birta a.m.k.:

- Titil geimskots (`name`), skal vera hlekkur á síðu fyrir nánari upplýsingar um geimskotið.
- Stöðu geimskots (`status.name`).
- Nafn geimferðar (`mission`).

Þegar leit er framkvæmd skal setja í URL query-string `query` með leitarstreng (t.d. `/?query=nasa`). Þegar síða er opnuð með þessum skal framkvæma leit með þeim streng.

### Stakt geimskot

Vísa skal á geimskot með `id` query-string sem nýtir auðkenni hjá vefþjónustu (t.d. `/?id=e3df2ecd-c239-472f-95e4-2b89b4f75800`).

Sækja skal gögn um geimskotið með kalli í vefþjónustu og birta upplýsingar um það, a.m.k.:

- Titill (`name`).
- „Gluggi“ geimskots, `window.start` og `window.end`.
- Mynd (`image`).
- Stöðu og lýsingu (`status.name` og `status.description`).
- Nafn geimferðar og lýsing (`mission.name` og `mission.description`).

Ef geimskot fannst ekki skal birta skilaboð um það.

## History API

Þegar farið er á milli forsíðu og flokka skal ekki sækja nýja síðu, heldur skal yfirskrifa virkni `<a href>` og nota [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API) til að útfæra skiptingu á milli síða. Sérstaklega þarf að passa upp á að back takkinn virki með því að hlusta á [`popstate`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate) atburðinn.

Forsíða (`/`) sýnir yfirlit. Fyrir hvern flokk skal nota querystring (hægt að sækja úr `window.location.search` og með `URLSearchParams`), t.d. `/?query=nasa`.

## eslint og prettier

Í verkefni er `eslint` og `prettier` uppsett með stillingum fyrir bæði. `eslint` stilling notar `airbnb` sem grunn en setur nokkrar sértækar reglur í `.eslintrc.js`.

Mælt er með að setja upp extension í ritli fyrir `eslint` og `prettier` til að nýta að fullu.

Hægt er að keyra `npm run prettier` til að láta `prettier` laga þær skrá sem hægt er.

Keyra skal `npm run lint` og skila án nokkurra villa.

Leyfilegt er að slökkva á ákveðnum villum _ef ástæða er til_ og skal tilltaka þá ástæðu.

## Útlit

Útfæra skal a.m.k. mjög einfalt, skalanlegt útlit með CSS.

## Netlify

Skila skal verkefninu keyrandi á Netlify. Útbúa þarf `build` script í `package.json` og setja upp build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef. Þetta verður til þess að þau gögn sem eru i möppu og eru ekki fyrir almenning (t.d. `package.json`) eru ekki birt, heldur aðeins:

- `index.html`.
- `styles.css`.
- `src` möppu.

## Mat

- 20% Tenging við API útfærð og tekið tillit til mismunandi staða í svari.
- 20% Leitarniðurstöður birtar.
- 20% Stakt geimskot birt.
- 20% History API virkni útfærð.
- 10% Verkefni sett upp á GitHub og tengt Netlify.
- 10% Engar `eslint` villur þegar `npm run lint` er keyrt.

## Sett fyrir

Verkefni sett fyrir mánudaginn 30. október 2023.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 9. nóvember 2023.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `ahp9`
  - `dawidniescier`
  - `osk`
  - `polarparsnip`
  - `sturla-freyr`

Skila má eins oft og þið viljið þar til skilafrestur rennur út.

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
