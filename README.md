# Olimax Rail — Landing Page

Profesjonalna strona typu Landing Page dla firmy logistycznej Olimax Rail.  
Stack: **React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React**

---

## Wymagania wstępne

Przed uruchomieniem upewnij się, że masz zainstalowane:

| Narzędzie | Minimalna wersja | Sprawdź komendą |
|-----------|-----------------|-----------------|
| Node.js   | 18+             | `node -v`       |
| npm       | 9+              | `npm -v`        |

Jeśli nie masz Node.js → pobierz ze strony: https://nodejs.org (wersja LTS)

---

## Instalacja i uruchomienie

### Windows — PowerShell (domyślny terminal)

PowerShell domyślnie blokuje uruchamianie skryptów. Jednorazowo odblokuj dla swojego konta:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Następnie zainstaluj zależności i uruchom projekt:

```powershell
cd C:\ścieżka\do\OlimaxRail
npm install
npm run dev
```

### Windows — Command Prompt (cmd.exe)

Jeśli wolisz uniknąć zmiany polityk PowerShell, użyj zwykłego cmd:

```cmd
cd C:\ścieżka\do\OlimaxRail
npm install
npm run dev
```

### macOS / Linux

```bash
cd /ścieżka/do/OlimaxRail
npm install
npm run dev
```

Po uruchomieniu otwórz przeglądarkę pod adresem: **http://localhost:5173**

---

## Dodanie filmu w tle (Hero Section)

Strona działa bez filmu — sekcja Hero wyświetla wtedy eleganckie czarne tło z siatką.  
Aby dodać wideo:

1. Przygotuj plik wideo w formacie **MP4** (koder H.264 dla najlepszej kompatybilności)
2. Utwórz folder `public/videos/` w katalogu projektu
3. Wrzuć plik do tego folderu i nazwij go dokładnie: **`rail-transport.mp4`**

```
OlimaxRail/
└── public/
    └── videos/
        └── rail-transport.mp4   ← tutaj
```

### Wskazówki dotyczące wideo

- **Rozdzielczość:** 1920×1080 lub wyżej
- **Długość:** 10–30 sekund (pętla działa automatycznie)
- **Rozmiar pliku:** optymalnie poniżej 15 MB (skompresuj np. w HandBrake: https://handbrake.fr)
- **Treść:** pędzący pociąg towarowy, kontenery, infrastruktura kolejowa, nocne tory z refleksami świateł
- **Darmowe źródła wideo:** https://www.pexels.com/search/videos/train lub https://pixabay.com/videos

---

## Struktura projektu

```
OlimaxRail/
├── public/
│   └── videos/
│       └── rail-transport.mp4   ← wideo w tle (dodaj samodzielnie)
├── src/
│   ├── App.jsx                  ← cały kod strony (jeden plik)
│   ├── main.jsx                 ← punkt wejścia React
│   └── index.css                ← Tailwind CSS + globalne style
├── index.html                   ← szkielet HTML + czcionka Inter
├── package.json                 ← lista zależności
├── vite.config.js               ← konfiguracja Vite
├── tailwind.config.js           ← konfiguracja Tailwind
└── postcss.config.js            ← konfiguracja PostCSS
```

---

## Dostosowanie treści

Wszystkie treści są w jednym pliku: `src/App.jsx`

| Co zmienić | Gdzie szukać w App.jsx |
|---|---|
| Tytuł i podtytuł Hero | komponent `Hero` → tag `<h1>` |
| Dane statystyk | komponent `Stats` → tablica `items` |
| Opisy usług | komponent `Services` → tablica `services` |
| Miasta na mapie | komponent `RouteMap` → tablica `cities` |
| Dane kontaktowe | komponent `Contact` → tablica w sekcji "Left — info" |
| Logo / nazwa firmy | komponenty `Nav` i `Footer` |

---

## Budowanie wersji produkcyjnej

```bash
npm run build
```

Gotowe pliki znajdziesz w folderze `dist/` — wgraj je na dowolny hosting statyczny  
(np. Netlify, Vercel, GitHub Pages, hostinger).

---

## Najczęstsze problemy

### `npm : ...running scripts is disabled`
Uruchom w PowerShell jako Administrator lub wykonaj:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### `npm install` kończy się błędem ENOENT
Upewnij się, że jesteś w folderze projektu (tam gdzie jest `package.json`):
```bash
cd C:\ścieżka\do\OlimaxRail
```

### Port 5173 zajęty
Vite automatycznie wybierze następny wolny port. Sprawdź terminal — wyświetli aktualny adres.

### Brakuje czcionki Inter / wygląd jest inny niż oczekiwano
Sprawdź połączenie z internetem — czcionka ładuje się z Google Fonts przy pierwszym uruchomieniu.
