# VOADES Honduras

README di stato del progetto. Questo file descrive il sito per come esiste oggi nel repository: pagine reali, componenti montati, logiche presenti, asset, placeholder, limiti attuali e materiale già preparato ma non attualmente usato nelle route.

## Stato generale

- Progetto frontend realizzato con React + Vite.
- Routing client-side con `react-router-dom`.
- UI già costruita per 5 pagine pubbliche:
  - `/`
  - `/about`
  - `/courses`
  - `/volunteer`
  - `/contact`
- Layout globale già presente con:
  - header sticky
  - menu mobile
  - skip link accessibile
  - footer
  - floating WhatsApp desktop
  - mobile contact bar fissa
  - meta title e description dinamici
  - structured data JSON-LD base
  - scroll to top su cambio route
- Stato task tracking:
  - `TASK_PROGRESS.md` riporta completate le attività da `TASK 001` a `TASK 147`, `TASK 149`, `TASK 150`
  - `TASK 148` (`npm run preview`) risulta non eseguita per limite dell’ambiente

## Stack tecnico

- `react` `^19.2.4`
- `react-dom` `^19.2.4`
- `react-router-dom` `^7.13.2`
- `vite` `^8.0.1`
- `eslint` configurato

Script disponibili:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`
- `npm run qa` esegue `lint + build`

## Architettura reale del progetto

Struttura principale:

- `src/pages`: pagine route-level
- `src/components/layout`: shell globale e comportamenti di layout
- `src/components/sections`: sezioni editoriali di pagina
- `src/components/ui`: componenti riusabili
- `src/data`: contenuti statici e configurazioni del sito
- `src/styles/global.css`: design system CSS globale
- `public/404.html`: redirect per GitHub Pages / SPA fallback
- `vite.config.js`: base path `/voades-honduras/`

Routing attuale in `src/App.jsx`:

- `/` -> `HomePage`
- `/about` -> `AboutPage`
- `/courses` -> `CoursesPage`
- `/volunteer` -> `VolunteerPage`
- `/contact` -> `ContactPage`

## Stato UI globale

### Layout condiviso

`src/components/layout/Layout.jsx` monta sempre:

- skip link `Saltar al contenido`
- `StructuredData`
- `ScrollToTop`
- `Header`
- `Footer`
- `FloatingWhatsApp`
- `MobileContactBar`

### Header

`src/components/layout/Header.jsx`

- logo testuale `VOADES Honduras`
- navigazione principale con active state tramite `NavLink`
- bottone hamburger su mobile
- apertura/chiusura menu mobile con `useState`
- lock dello scroll body con classe `menu-open`
- stato `isScrolled` con `useEffect` su `window.scrollY > 12`
- backdrop cliccabile per chiudere il menu
- CTA globali in header:
  - WhatsApp
  - Llamar

### Footer

`src/components/layout/Footer.jsx`

- blocco brand
- navigazione ripetuta
- blocco contatti
- blocco social
- link esterni con `target="_blank"` dove previsto

### Contatti persistenti

- `FloatingWhatsApp.jsx`: pulsante desktop fisso `WA`
- `MobileContactBar.jsx`: barra fissa mobile con due CTA full width
  - WhatsApp
  - Llamar ahora

## Design system e stile

Il sito usa un CSS globale unico in `src/styles/global.css`.

Elementi già definiti:

- variabili CSS di brand
- tipografia globale
- container responsive
- spacing scale
- card system
- button variants
- utility stack
- griglie `grid-2` / `grid-3`
- pill / eyebrow
- focus state
- layout responsive

Palette attuale:

- blu primario `#1d7fbf`
- verde secondario `#2f9f6b`
- testo scuro `#163047`
- sfondi chiari azzurro-bianco

Impronta visiva attuale:

- tono pulito, istituzionale, umano
- CTA molto evidenti
- gerarchia editoriale semplice
- uso di immagini esterne Unsplash
- approccio mobile-first con elementi di contatto sempre visibili

## Pagine e contenuti effettivamente montati

### Home `/`

`src/pages/HomePage.jsx`

Contenuto attualmente montato:

- `HeroSection`
- `TrustPointsSection`

#### Hero

`src/components/sections/HeroSection.jsx`

- hero in formato poster
- brand mark testuale `voades / VOCES AMIGAS DE ESPERANZA`
- headline principale:
  - `ESCUCHAR, ORIENTAR Y ACOMPAÑAR CON ESPERANZA`
- lead orientata a supporto psicologico e contatto facile
- pannello informazioni rapide:
  - WhatsApp
  - telefono
  - orario
- immagine hero con alt text
- CTA:
  - `Escribir por WhatsApp`
  - `Llamar ahora`
  - `Conocer talleres`

#### Trust / contatti rapidi

`src/components/sections/TrustPointsSection.jsx`

- testo introduttivo di fiducia
- 4 icone SVG inline custom
- contatti rapidi come link diretti:
  - WhatsApp
  - Llamar
  - Facebook
  - Instagram

#### Nota importante sulla Home

La Home oggi è volutamente ridotta a 2 blocchi montati. Nel repository esistono molte altre sezioni home già costruite, ma attualmente non vengono renderizzate nella route `/`:

- `AboutPreviewSection`
- `HelpAreasSection`
- `CoursesPreviewSection`
- `VolunteerCTASection`
- `ContactQuickSection`
- `GeneralFAQSection`
- `FinalCtaStripSection`

Questo significa che il codice per quei blocchi esiste, ma lo stato di fatto della Home corrente è più minimale rispetto al task plan originale.

### About `/about`

`src/pages/AboutPage.jsx`

Contenuto montato:

- `AboutPageHeroSection`
- `AboutHistorySection`
- `AboutMissionSection`
- `AboutFinalCtaSection`

#### Hero About

- hero testuale + visual card
- copy basata su `organization.tagline`
- immagine `communityJoy`
- pill `Servicio humano`

#### Sezione storia

- 3 blocchi:
  - Origen
  - Camino
  - Presente
- citazione finale in blockquote

#### Missione / visione / valori

- 3 `ValueCard`
  - mission
  - vision
  - values
- sottosezione interna `Nuestro trabajo hoy`
- 3 card derivate da `helpAreas`

#### CTA finale About

- pulsanti verso:
  - `/contact`
  - `/volunteer`
  - WhatsApp

### Courses `/courses`

`src/pages/CoursesPage.jsx`

Contenuto montato:

- `PageIntro`
- breadcrumb
- filtro categorie
- griglia corsi
- stato vuoto filtro
- FAQ corsi
- callout finale iscrizione

#### Logiche presenti

- `useState` per `activeCategory`
- categorie derivate dinamicamente da `courses`
- filtro client-side:
  - `Todos`
  - categorie reali presenti nei dati
- empty state quando il filtro non restituisce risultati
- generazione CTA WhatsApp per singolo corso

#### Dati corsi attuali

4 corsi presenti in `src/data/courses.js`:

- Acompañamiento comunitario
- Atención básica a familias
- Habilidades para el voluntariado
- Liderazgo de servicio

Per ogni corso oggi esistono:

- titolo
- categoria
- short description
- long description placeholder
- target
- durata placeholder
- messaggio WhatsApp dedicato

#### Limitazioni attuali corsi

- nessuna pagina dettaglio corso
- date non definite
- durata non definita
- descrizioni lunghe ancora placeholder
- `buildWhatsAppHref()` in `CoursesPage.jsx` usa `50400000000`, non il numero reale presente in `contacts.js`
- la stessa incongruenza esiste in `CoursesPreviewSection.jsx`, che comunque non è montata

### Volunteer `/volunteer`

`src/pages/VolunteerPage.jsx`

Contenuto montato:

- `PageIntro`
- breadcrumb
- sezione benefici
- `SocialProofStrip`
- sezione `Cómo funciona`
- sezione profilo ideale
- FAQ volontariato
- callout finale

#### Logiche e struttura

- contenuti misti tra data file e array locali nel componente
- 4 benefit locali renderizzati con `ValueCard`
- 3 step presi da `src/data/volunteerSteps.js`
- 3 punti profilo ideale renderizzati in card testuale
- FAQ via `FAQAccordion`

#### Posizionamento del messaggio

La pagina insiste su:

- accesso semplice
- nessuna esperienza necessaria
- orientamento progressivo
- contatto diretto WhatsApp o telefono

### Contact `/contact`

`src/pages/ContactPage.jsx`

Contenuto montato:

- `PageIntro`
- breadcrumb
- quick actions
- 4 `ContactCard`
- area ubicazione / mappa
- form UI semplice
- FAQ contatti
- final reassurance block

#### Logiche presenti

- `useState(false)` per `isSubmitted`
- submit del form intercettato con `preventDefault()`
- nessun invio backend
- al submit compare messaggio:
  - `Mensaje preparado. Este formulario es solo demostrativo por ahora.`

#### Contatti esposti

- telefono
- WhatsApp
- Facebook
- ubicazione / mappa

#### Limitazioni attuali contatti

- il form non salva dati e non invia email
- la mappa è un placeholder card con link esterno, non un embed reale
- `facebookHref` punta a `https://facebook.com/`
- `mapsHref` punta a `https://maps.google.com/`
- quindi Facebook e Maps non sono ancora finalizzati con URL definitivi

## Componenti UI riusabili già presenti

In `src/components/ui`:

- `Button`
- `SectionTitle`
- `IconCircle`
- `ContactCard`
- `CourseCard`
- `ValueCard`
- `StepCard`
- `FAQAccordion`
- `Breadcrumb`
- `CalloutBanner`
- `SocialProofStrip`
- `PageIntro`
- `TrustItem`

### Logiche UI principali

#### `Button.jsx`

- supporta rendering come:
  - `Link` interno
  - `a` esterno
  - `button`
- riconosce href interni con `/`
- apre link `http` in nuova tab
- supporta varianti:
  - `primary-green`
  - `secondary-blue`
  - `outline-blue`
  - `ghost`
- supporta `fullWidth`

#### `FAQAccordion.jsx`

- usa `useState`
- prima FAQ aperta di default (`openIndex = 0`)
- una sola FAQ aperta per volta
- clic sulla stessa domanda la chiude impostando `-1`

#### `PageIntro.jsx`

- hero standard riusabile per pagine interne
- supporta eyebrow, title, subtitle, actions, image
- visual card laterale con pill e testo di supporto costante

#### `CourseCard.jsx`

- mostra category pill
- meta `Dirigido a` + `Duración`
- CTA WhatsApp dedicata

#### `ContactCard.jsx`

- icona testuale dentro `IconCircle`
- gestione semplice di link esterni / interni via anchor

## Data layer statico

Il progetto oggi è completamente statico lato contenuti.

File principali:

- `src/data/organization.js`
- `src/data/contacts.js`
- `src/data/courses.js`
- `src/data/faqs.js`
- `src/data/helpAreas.js`
- `src/data/volunteerSteps.js`
- `src/data/nav.js`
- `src/data/socialLinks.js`
- `src/data/siteImages.js`
- `src/data/trustPoints.js`

### Stato reale dei contenuti

- i testi mission, vision e history sono presenti ma sintetici
- i corsi sono impostati come catalogo base, non come offerta definitiva
- FAQ presenti per:
  - general
  - volunteer
  - courses
  - contact
- immagini caricate tramite URL remoti Unsplash, non asset locali ottimizzati

### Nota su file dati non usati

Nel repository esistono anche file che oggi non risultano usati dalle route attuali:

- `trustPoints.js`
- alcuni section component legacy/home-preparati

Sono materiale già prodotto, ma non parte del rendering corrente.

## SEO, metadata e deploy

### SEO tecnica già presente

- `PageMeta.jsx` aggiorna `document.title`
- `PageMeta.jsx` aggiorna o crea il meta `description`
- ogni pagina ha `title` e `description` propri
- `StructuredData.jsx` inserisce JSON-LD tipo `NGO`
- `index.html` ha lingua `es`
- favicon configurata

### Stato structured data

Il JSON-LD include:

- name
- description
- telephone
- address
- sameAs
- url

Limite attuale:

- `url` è ancora placeholder:
  - `https://example.github.io/voades-honduras/`

### Deploy / hosting

Config presente per GitHub Pages / SPA statica:

- `vite.config.js` usa `base: '/voades-honduras/'`
- `public/404.html` gestisce redirect SPA fallback
- `index.html` contiene script di reinstradamento del path dopo redirect
- cartella `dist/` già presente nel repository

## Accessibilità e UX già implementate

In base al codice e al task progress, sono già presenti:

- skip link
- focus state CSS
- active nav state
- target touch evidenti su CTA principali
- `aria-label` sul floating WhatsApp
- `aria-expanded` nel menu mobile
- `aria-controls` nel menu mobile
- breadcrumb con `aria-current`
- accordion FAQ con `aria-expanded`
- alt text sulle immagini principali

## Limiti, placeholder e punti da rifinire

Questa è la parte più importante dello stato di fatto: cosa non è ancora definitivo.

- `README` precedente era vuoto, ora sostituito con documentazione reale.
- la Home attuale non monta tutte le sezioni già sviluppate nel repository.
- il form contatti è solo UI dimostrativa, senza backend.
- Facebook e Google Maps usano link generici, non URL finali.
- structured data usa ancora URL placeholder.
- alcuni contenuti corsi sono ancora placeholder.
- le CTA WhatsApp dei corsi usano un numero placeholder `50400000000`.
- le immagini sono remote da Unsplash, non gestite come media finali proprietari.
- non esiste integrazione CMS, backend, analytics o form handling.
- non esistono test automatici applicativi oltre a lint/build.
- la preview di produzione non risulta verificata nel task tracking.

## Componenti e file presenti ma non montati nelle route correnti

Sezioni già costruite ma non attualmente usate:

- `src/components/sections/AboutPreviewSection.jsx`
- `src/components/sections/AboutTrustCalloutSection.jsx`
- `src/components/sections/AboutWorkTodaySection.jsx`
- `src/components/sections/ContactQuickSection.jsx`
- `src/components/sections/CoursesPreviewSection.jsx`
- `src/components/sections/FinalCtaStripSection.jsx`
- `src/components/sections/GeneralFAQSection.jsx`
- `src/components/sections/HelpAreasSection.jsx`
- `src/components/sections/VolunteerCTASection.jsx`

Componenti UI presenti ma non chiaramente usati nel rendering corrente:

- `src/components/ui/TrustItem.jsx`

Questo materiale non è da considerare “mancante”: esiste nel codice, ma non fa parte dell’esperienza utente attuale perché non importato dalle pagine correnti.

## Stato QA documentato nel repository

Da `TASK_PROGRESS.md`:

- inizializzazione progetto completata
- struttura dati completata
- component library base completata
- layout e navigazione completati
- pagine Home/About/Courses/Volunteer/Contact completate
- lavoro accessibilità base completato
- SEO base completata
- build production completata
- polish finale dichiarato completato
- preview production non verificata nell’ambiente

Checklist manuale residua in `DEPLOY_CHECKLIST.md`:

- verifica cross-breakpoint
- conferma contatti finali
- conferma testi definitivi
- esecuzione `npm run qa`
- verifica `npm run preview`
- controllo link esterni
- revisione visiva finale

## Riassunto operativo

Il sito oggi è una web app frontend statica già navigabile e strutturata, con una base UI solida, contatto diretto molto evidente e 5 pagine pubbliche funzionanti. La parte più matura è la presentazione istituzionale e il percorso di contatto. Le aree ancora da finalizzare sono soprattutto contenuti definitivi, URL reali esterni, precisione dei dati corsi, eventuale backend del form e decisione finale su quali sezioni home tenere effettivamente montate.

## Sezione estesa per analisi AI

Questa sezione serve come contesto operativo per un agente o un sistema AI che debba leggere, modificare o valutare il progetto senza dover inferire troppo dal codice.

### Obiettivo pratico del repository

Il repository implementa un sito istituzionale statico per VOADES Honduras. Il focus non è un prodotto SaaS né una dashboard, ma una presenza pubblica orientata a:

- spiegare in modo semplice chi è VOADES
- offrire accesso immediato al contatto
- presentare corsi e volontariato
- rendere il sito leggibile e credibile su mobile

La logica applicativa è leggera. Quasi tutto il valore sta in:

- struttura dei contenuti
- chiarezza delle CTA
- organizzazione delle sezioni
- consistenza del layout
- qualità dei dati statici

### Dati quantitativi utili

Dimensioni attuali lette dal filesystem:

- `README.md`: 575 linee prima di questa estensione
- `src/styles/global.css`: 1716 linee
- codice totale campionato tra app, pagine, layout, sections, ui e data: 4369 linee

Questo è utile per capire il peso relativo del progetto:

- la maggior parte della complessità vive nel CSS globale
- la logica React è semplice e relativamente distribuita
- il progetto è piccolo abbastanza da poter essere analizzato integralmente

## Modello di esecuzione dell'app

### Bootstrap runtime

Entrypoint in `src/main.jsx`:

- importa `StrictMode`
- importa `createRoot`
- importa `App`
- importa `global.css`
- monta `App` dentro `#root`

Non ci sono:

- provider globali
- context provider
- store Redux/Zustand
- suspense boundary custom
- error boundary custom
- data fetching iniziale

### Albero top-level

Gerarchia runtime effettiva:

1. `main.jsx`
2. `App.jsx`
3. `BrowserRouter`
4. `Layout`
5. route page attiva

`Layout` è sempre presente, quindi header/footer/contatti persistenti non dipendono dalla pagina.

### Conseguenze architetturali

- il sito è completamente client-side
- i contenuti sono bundle-time statici
- non esistono side effect di business oltre a DOM metadata, scroll e interazioni UI locali
- la navigazione dipende da browser history standard del router
- il deploy è compatibile con hosting statico

## Mappa di rendering per route

### Route `/`

Albero:

1. `HomePage`
2. `PageMeta`
3. `HeroSection`
4. `TrustPointsSection`

Dipendenze dati:

- `contacts`
- `siteImages`

Stato locale:

- nessuno

Interazioni:

- click CTA hero
- click canali rapidi trust section

### Route `/about`

Albero:

1. `AboutPage`
2. `PageMeta`
3. `AboutPageHeroSection`
4. `AboutHistorySection`
5. `AboutMissionSection`
6. `AboutFinalCtaSection`

Dipendenze dati:

- `organization`
- `helpAreas`
- `siteImages`
- `contacts`

Stato locale:

- nessuno

Interazioni:

- solo navigazione/CTA

### Route `/courses`

Albero:

1. `CoursesPage`
2. `PageMeta`
3. `PageIntro`
4. `Breadcrumb`
5. `SectionTitle`
6. filtro categorie
7. lista `CourseCard`
8. `FAQAccordion`
9. `CalloutBanner`

Dipendenze dati:

- `contacts`
- `courses`
- `faqs.courses`
- `siteImages.communityMeeting`

Stato locale:

- `activeCategory`

Interazioni:

- cambio filtro categoria
- click CTA per corso
- apertura/chiusura FAQ

### Route `/volunteer`

Albero:

1. `VolunteerPage`
2. `PageMeta`
3. `PageIntro`
4. `Breadcrumb`
5. `SectionTitle`
6. `SocialProofStrip`
7. lista `ValueCard` benefici
8. lista `StepCard`
9. sezione profilo ideale
10. `FAQAccordion`
11. `CalloutBanner`

Dipendenze dati:

- `contacts`
- `faqs.volunteer`
- `siteImages.communityJoy`
- `volunteerSteps`

Stato locale:

- solo lo stato interno di `FAQAccordion`

### Route `/contact`

Albero:

1. `ContactPage`
2. `PageMeta`
3. `PageIntro`
4. `Breadcrumb`
5. quick actions
6. griglia `ContactCard`
7. placeholder mappa
8. form
9. `FAQAccordion`
10. CTA finale

Dipendenze dati:

- `contacts`
- `faqs.general`
- `faqs.contact`
- `siteImages.supportEmbrace`

Stato locale:

- `isSubmitted`
- stato interno di `FAQAccordion`

Interazioni:

- click contatti
- submit form dimostrativo
- toggle FAQ

## Inventory dei componenti con stato

Per un’analisi AI è utile sapere che quasi tutto il codice è stateless. I componenti stateful sono pochi.

### `Header.jsx`

State:

- `isMenuOpen`
- `isScrolled`

Side effects:

- listener `scroll`
- toggle classe `body.menu-open`

Responsabilità:

- navigazione principale
- menu mobile
- lock scroll pagina quando menu aperto
- styling sticky/scrolled

### `CoursesPage.jsx`

State:

- `activeCategory`

Responsabilità:

- derivare categorie dai dati corsi
- filtrare lista visibile
- mostrare empty state se necessario

### `ContactPage.jsx`

State:

- `isSubmitted`

Responsabilità:

- emulare submit del form
- mostrare messaggio di conferma UI

### `FAQAccordion.jsx`

State:

- `openIndex`

Responsabilità:

- aprire una FAQ per volta
- chiudere FAQ aperta al secondo click

### `PageMeta.jsx`

Non usa `useState`, ma usa `useEffect`, quindi è comunque un punto rilevante per side effects.

Responsabilità:

- aggiornare `document.title`
- aggiornare/creare `<meta name="description">`

### `ScrollToTop.jsx`

Non usa `useState`, ma usa `useEffect`.

Responsabilità:

- chiamare `window.scrollTo({ top: 0, behavior: 'auto' })` al cambio pathname

## Inventory dei side effects

Il progetto ha side effects in pochi punti. Questo semplifica molto il reasoning automatico.

- `Header.jsx`
  - event listener su `scroll`
  - toggle classe sul `body`
- `PageMeta.jsx`
  - mutazione `document.title`
  - creazione/aggiornamento meta description
- `ScrollToTop.jsx`
  - scroll automatico top route change
- `StructuredData.jsx`
  - iniezione script JSON-LD nel DOM
- `ContactPage.jsx`
  - intercetta submit e blocca default browser behavior

Non esistono side effects di:

- fetch HTTP
- localStorage
- sessionStorage
- cookies
- auth
- websocket
- analytics
- feature flag

## Flussi dati reali

### Flusso dei contatti

`src/data/contacts.js` è il punto centrale.

Da lì derivano:

- header CTA
- footer contatti
- floating WhatsApp
- mobile contact bar
- hero home
- page intro actions
- contact cards
- callout finali
- social links indiretti

Implicazione:

- cambiare `contacts.js` propaga quasi tutto il contatto del sito
- è uno dei file più sensibili del repository

### Flusso della navigazione

`src/data/nav.js` alimenta:

- `Header.jsx`
- `Footer.jsx`

Implicazione:

- aggiungere una route richiede almeno:
  - update `App.jsx`
  - update `nav.js` se la route deve comparire in navigazione

### Flusso social

`src/data/socialLinks.js` deriva da `contacts.js`, quindi non replica manualmente gli URL.

Uso attuale:

- `Footer.jsx`

### Flusso corsi

`src/data/courses.js` alimenta:

- `CoursesPage.jsx`
- `CoursesPreviewSection.jsx` non montata

Ogni corso contiene già il messaggio WhatsApp da usare, ma la funzione che costruisce l'href nelle pagine usa attualmente un numero placeholder.

### Flusso FAQ

`src/data/faqs.js` alimenta:

- corsi
- volontariato
- contatti
- FAQ generali

Pattern:

- la pagina decide quale slice del file usare
- l’accordion non conosce il dominio del contenuto

## Convenzioni del repository

### Convenzione di naming

- file componenti: PascalCase
- file data: camelCase o lowercase descrittivo
- pagine: `SomethingPage.jsx`
- sezioni: `SomethingSection.jsx`
- UI: componenti piccoli riusabili in `src/components/ui`

### Convenzione linguistica

Il repository è multilingua nel senso pratico:

- codice e nomi file: inglese
- UI del sito: principalmente spagnolo
- documentazione operativa interna: italiano

Questo è importante per l’AI:

- non bisogna “uniformare” automaticamente le lingue senza una decisione esplicita
- i testi utente in spagnolo sono intenzionali
- i nomi tecnici inglesi sono coerenti con la codebase

### Convenzione di styling

- quasi tutto lo styling vive in `src/styles/global.css`
- non ci sono CSS modules
- non c’è styled-components
- non c’è Tailwind
- i nomi classe sono descrittivi e orientati al blocco

Esempi di famiglie classe:

- `site-header*`
- `site-footer*`
- `hero-poster*`
- `page-hero*`
- `final-cta-strip*`
- `home-*`
- `about-*`
- `course-card*`
- `faq-item*`

### Convenzione di composizione

Pattern prevalente:

- page compone sections / ui
- sections consumano data file o props minime
- ui component tende a essere presentazionale

## Mappa file per file

Questa sezione è volutamente ridondante. Serve a un AI agent per sapere velocemente dove intervenire.

### Root

#### `package.json`

- definisce dipendenze runtime e dev
- espone script `dev`, `build`, `lint`, `preview`, `qa`

#### `vite.config.js`

- usa plugin React
- imposta `base: '/voades-honduras/'`
- segnala deploy pensato per sottopercorso statico

#### `index.html`

- documento HTML base
- meta description default
- favicon
- script di gestione redirect SPA dopo fallback GitHub Pages

#### `public/404.html`

- redirect script per deep link su hosting statico

#### `DEPLOY_CHECKLIST.md`

- checklist manuale pre-pubblicazione

#### `TASK_PROGRESS.md`

- log task-oriented del lavoro svolto
- utile per capire cosa era pianificato rispetto a ciò che è montato davvero

### `src/main.jsx`

- bootstrap dell’app
- importa CSS globale
- renderizza `App` in `StrictMode`

### `src/App.jsx`

- definisce router e mapping route -> page
- nessuna logica extra

### `src/pages/AboutPage.jsx`

- assembly della pagina About
- si limita a comporre sezioni

### `src/pages/HomePage.jsx`

- assembly della Home attuale
- volutamente minimal nella versione corrente

### `src/pages/CoursesPage.jsx`

- pagina interna con più logica locale
- filtro categorie
- mapping corsi
- FAQ
- CTA finale

### `src/pages/VolunteerPage.jsx`

- assembly più narrativo/editoriale
- contiene array locali per benefici e social proof

### `src/pages/ContactPage.jsx`

- pagina con maggiore densità di interazioni utente
- form solo dimostrativo

### `src/components/layout/Layout.jsx`

- shell globale
- definisce cosa è persistente in ogni route

### `src/components/layout/Header.jsx`

- principale componente navigazionale
- uno dei componenti più importanti per UX cross-page

### `src/components/layout/Footer.jsx`

- riepilogo sito + contatti + social

### `src/components/layout/FloatingWhatsApp.jsx`

- CTA fissa desktop minimale

### `src/components/layout/MobileContactBar.jsx`

- CTA fissa mobile, importante per conversione

### `src/components/layout/PageMeta.jsx`

- metadata dinamici per route

### `src/components/layout/ScrollToTop.jsx`

- reset scroll on navigation

### `src/components/layout/StructuredData.jsx`

- SEO semantico base via JSON-LD

### `src/components/sections/HeroSection.jsx`

- hero home attuale
- uno dei blocchi visivamente più forti del sito

### `src/components/sections/TrustPointsSection.jsx`

- trust/contact shortcut section
- usa SVG inline specifici

### `src/components/sections/AboutPageHeroSection.jsx`

- hero about

### `src/components/sections/AboutHistorySection.jsx`

- storia in 3 blocchi + quote

### `src/components/sections/AboutMissionSection.jsx`

- mission/vision/values + work today

### `src/components/sections/AboutFinalCtaSection.jsx`

- CTA finale about

### `src/components/sections/AboutPreviewSection.jsx`

- sezione pronta ma non montata
- adatta per reintrodurre una Home più completa

### `src/components/sections/AboutTrustCalloutSection.jsx`

- callout standalone non montato

### `src/components/sections/AboutWorkTodaySection.jsx`

- variante standalone della parte “Nuestro trabajo hoy”
- logica concettualmente già assorbita dentro `AboutMissionSection`

### `src/components/sections/ContactQuickSection.jsx`

- sezione home pronta ma non montata
- utile se si vuole rendere la Home più conversion-oriented

### `src/components/sections/CoursesPreviewSection.jsx`

- preview corsi pronta ma non montata
- contiene stessa incongruenza sul numero WhatsApp placeholder

### `src/components/sections/FinalCtaStripSection.jsx`

- finale home CTA non montato

### `src/components/sections/GeneralFAQSection.jsx`

- FAQ home generica non montata

### `src/components/sections/HelpAreasSection.jsx`

- sezione editoriale home non montata

### `src/components/sections/VolunteerCTASection.jsx`

- CTA volontariato per home non montata

### `src/components/ui/Button.jsx`

- wrapper unificato per link interno, esterno o button

### `src/components/ui/SectionTitle.jsx`

- titolo standard di sezione

### `src/components/ui/IconCircle.jsx`

- contenitore icona testuale/corta

### `src/components/ui/ContactCard.jsx`

- card contatto

### `src/components/ui/CourseCard.jsx`

- card corso con CTA dedicata

### `src/components/ui/ValueCard.jsx`

- card generica per principi/benefici/aree

### `src/components/ui/StepCard.jsx`

- card step numerata

### `src/components/ui/FAQAccordion.jsx`

- accordion semplice ad apertura singola

### `src/components/ui/Breadcrumb.jsx`

- breadcrumb minimale

### `src/components/ui/CalloutBanner.jsx`

- blocco CTA largo

### `src/components/ui/SocialProofStrip.jsx`

- strip semplice con value/label

### `src/components/ui/PageIntro.jsx`

- hero standard per pagine interne

### `src/components/ui/TrustItem.jsx`

- componente presente ma non usato

### `src/data/contacts.js`

- file più sensibile per conversione e correttezza
- centralizza:
  - telefono
  - WhatsApp
  - Facebook
  - Instagram
  - indirizzo
  - orario
  - map link

### `src/data/organization.js`

- identità istituzionale sintetica

### `src/data/courses.js`

- catalogo corsi attuale

### `src/data/faqs.js`

- dataset FAQ diviso per dominio

### `src/data/helpAreas.js`

- 3 aree di servizio

### `src/data/volunteerSteps.js`

- 3 step del processo volontariato

### `src/data/nav.js`

- navigazione globale

### `src/data/socialLinks.js`

- link social derivati da `contacts`

### `src/data/siteImages.js`

- immagini remote con `src`, `alt`, `credit`

### `src/data/trustPoints.js`

- contenuto trust presente ma non usato dalla Home attuale

## Incongruenze e debito tecnico concreto

Questa è la parte che un AI dovrebbe considerare prioritaria durante un audit.

### 1. Home semplificata rispetto all’inventario sezioni

Il repository contiene più sezioni Home di quante ne siano attualmente montate.

Possibili interpretazioni:

- scelta intenzionale di riduzione
- refactor incompleto
- fase intermedia del progetto

Per un AI è importante non assumere automaticamente che “unused” significhi “dead code”.

### 2. Numero WhatsApp placeholder nelle CTA corsi

In:

- `src/pages/CoursesPage.jsx`
- `src/components/sections/CoursesPreviewSection.jsx`

la funzione `buildWhatsAppHref()` usa:

- `https://wa.me/50400000000?...`

mentre il numero reale in `contacts.js` è:

- `+504 3295-5521`

Questa è una vera incongruenza funzionale.

### 3. URL esterni ancora generici

Valori da finalizzare:

- `contacts.facebookHref`
- `contacts.mapsHref`
- `StructuredData.url`

Impatto:

- UX incompleta
- SEO semantico incompleto
- riduzione credibilità percepita

### 4. Form contatti non integrato

Il form in `ContactPage.jsx`:

- non valida in modo robusto
- non invia dati
- non persiste nulla
- non usa API

È UI placeholder, non feature reale.

### 5. CSS centralizzato molto grande

`global.css` ha 1716 linee.

Questo non è necessariamente un problema, ma implica:

- conoscenza diffusa delle classi
- rischio regressioni visuali quando si toccano blocchi shared
- difficile isolare cambiamenti senza leggere il contesto CSS

### 6. Nessun test automatico applicativo

Esistono verifiche di:

- lint
- build

Non esistono:

- unit test
- component test
- e2e test

## Guida operativa per modifiche future

Questa sezione aiuta un AI a sapere dove mettere le mani in base al tipo di richiesta.

### Se il task riguarda numeri, link o contatti

Partire da:

- `src/data/contacts.js`

Poi verificare:

- `Header.jsx`
- `Footer.jsx`
- `HeroSection.jsx`
- `ContactPage.jsx`
- `FloatingWhatsApp.jsx`
- `MobileContactBar.jsx`
- `StructuredData.jsx`
- `socialLinks.js`
- eventuali `buildWhatsAppHref()` hardcoded

### Se il task riguarda aggiungere una nuova pagina

Toccare almeno:

- `src/pages/NewPage.jsx`
- `src/App.jsx`
- `src/data/nav.js` se in menu
- `src/components/layout/PageMeta.jsx` tramite uso nella nuova pagina
- `src/styles/global.css` per classi dedicate se necessarie

### Se il task riguarda copy/about/mission

Partire da:

- `src/data/organization.js`
- `src/components/sections/About*`

### Se il task riguarda corsi

Partire da:

- `src/data/courses.js`
- `src/pages/CoursesPage.jsx`
- `src/components/ui/CourseCard.jsx`
- `src/components/sections/CoursesPreviewSection.jsx` se si vuole riusarla

### Se il task riguarda volontariato

Partire da:

- `src/pages/VolunteerPage.jsx`
- `src/data/volunteerSteps.js`

### Se il task riguarda la Home

Verificare prima una decisione di prodotto:

- Home corta attuale
- oppure Home estesa riattivando sezioni già costruite

File rilevanti:

- `src/pages/HomePage.jsx`
- tutti i componenti in `src/components/sections/*` orientati alla Home

### Se il task riguarda SEO

Partire da:

- `PageMeta.jsx`
- `StructuredData.jsx`
- `index.html`
- `public/404.html`
- `vite.config.js`

## Assunzioni che un AI non dovrebbe fare

- Non assumere che i link Facebook e Maps siano finali.
- Non assumere che il form contatti sia funzionante lato business.
- Non assumere che le sezioni non montate siano codice da eliminare.
- Non assumere che la lingua dei file debba combaciare con la lingua del contenuto.
- Non assumere che `dist/` sia fonte di verità rispetto a `src/`.
- Non assumere che il task plan in `TASK_PROGRESS.md` corrisponda esattamente al rendering attuale.

## Stato di maturità per area

### Alta maturità

- layout globale
- routing base
- CTA principali
- struttura pagine
- coerenza visiva di base
- deploy statico

### Media maturità

- contenuti About
- contenuti Volunteer
- pagina Courses come struttura
- SEO base
- accessibilità base

### Bassa maturità o placeholder

- precisione dati esterni
- iscrizione corsi reale
- form contatto reale
- dettaglio corsi
- testing automatizzato
- contenuti definitivi di alcuni dataset

## Priorità consigliate se si vuole alzare la qualità

1. Correggere tutti gli URL placeholder e il numero WhatsApp hardcoded nei corsi.
2. Decidere in modo esplicito se la Home deve restare corta o reintrodurre le sezioni già pronte.
3. Finalizzare i contenuti dati in `contacts.js`, `organization.js`, `courses.js`.
4. Decidere se il form contatti deve diventare reale oppure essere rimosso/sostituito con CTA esterna.
5. Ripulire o documentare meglio i componenti non montati per evitare ambiguità future.
6. Valutare una suddivisione del CSS se il progetto cresce ancora.

## Conclusione estesa

Questo repository non è grande, ma contiene già due livelli distinti che un AI deve leggere separatamente:

- il livello “esperienza attuale”, cioè ciò che viene effettivamente renderizzato nelle 5 route
- il livello “materiale preparato”, cioè componenti e sezioni già sviluppate ma non attive

La differenza tra questi due livelli è il punto più importante dell’intero progetto. Se un agente non la coglie, rischia di:

- documentare feature non realmente visibili
- cancellare codice preparatorio utile
- sottostimare il lavoro già fatto
- introdurre regressioni su CTA e contatti

La strategia corretta per lavorare su questa codebase è:

- partire sempre da `App.jsx`, `HomePage.jsx` e dai data file
- verificare cosa è montato davvero
- trattare `contacts.js` come file sensibile
- considerare `global.css` come sorgente di complessità principale
- distinguere chiaramente tra placeholder, feature reali e codice pronto ma non attivo
