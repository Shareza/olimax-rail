# Olimax Rail — Landing Page

Profesjonalna strona Landing Page dla firmy logistycznej Olimax Rail.  
Repozytorium: **https://github.com/Shareza/olimax-rail**

---

## Instrukcja dla początkujących — od zera do działającej strony

Wykonaj kroki **po kolei**. Każdy krok to kilka kliknięć lub wklejenie komendy do terminala.

---

### KROK 1 — Otwórz PowerShell

Naciśnij **Windows + R**, wpisz `powershell`, naciśnij Enter.  
Otworzy się czarne okno z niebieskim tłem — to jest PowerShell, tu będziesz wklejać komendy.

> Jak wkleić komendę: skopiuj tekst → kliknij prawym przyciskiem myszy w oknie PowerShell → Enter.

---

### KROK 2 — Zainstaluj Node.js

Node.js to silnik, który uruchamia aplikację.

```powershell
winget install OpenJS.NodeJS.LTS
```

Po zakończeniu **zamknij i otwórz PowerShell ponownie**, żeby zmiany weszły w życie.  
Sprawdź czy instalacja się udała:

```powershell
node -v
```

Powinno wyświetlić coś w stylu `v20.x.x`. Jeśli tak — OK.

---

### KROK 3 — Zainstaluj Git

Git to narzędzie do pobierania kodu z internetu.

```powershell
winget install Git.Git
```

Po zakończeniu **zamknij i otwórz PowerShell ponownie**.  
Sprawdź:

```powershell
git --version
```

Powinno wyświetlić `git version 2.x.x`.

---

### KROK 4 — Odblokuj uruchamianie skryptów (jednorazowo)

Windows domyślnie blokuje skrypty. To jednorazowa zmiana dla Twojego konta:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Jeśli pojawi się pytanie — wpisz `T` i naciśnij Enter.

---

### KROK 5 — Pobierz projekt z GitHuba

Przejdź do folderu Pulpit i pobierz projekt:

```powershell
cd $HOME\Desktop
git clone https://github.com/Shareza/olimax-rail.git
```

Powstanie folder `olimax-rail` na Pulpicie.

---

### KROK 6 — Wejdź do folderu projektu

```powershell
cd $HOME\Desktop\olimax-rail
```

---

### KROK 7 — Zainstaluj zależności projektu

```powershell
npm install
```

Pobierze wszystkie biblioteki (może potrwać 1–2 minuty, nie przerywaj).

---

### KROK 8 — Uruchom aplikację

```powershell
npm run dev
```

Powinieneś zobaczyć:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Otwórz przeglądarkę i wejdź na: **http://localhost:5173**

Strona działa. 🎉

---

### Żeby zatrzymać aplikację

W oknie PowerShell naciśnij **Ctrl + C**.

### Żeby uruchomić ponownie (kolejnym razem)

Już nie musisz instalować Node.js, Git ani npm install — tylko:

```powershell
cd $HOME\Desktop\olimax-rail
npm run dev
```

---

## Najczęstsze problemy

### `winget` nie jest rozpoznawany
Zaktualizuj App Installer przez Microsoft Store, albo pobierz Node.js i Git ręcznie:
- Node.js: https://nodejs.org (kliknij "LTS")
- Git: https://git-scm.com/download/win

### `npm : running scripts is disabled`
Wróć do Kroku 4 i wykonaj komendę odblokowania.

### `git clone` pyta o hasło / dostęp odmówiony
Repozytorium jest publiczne — nie powinno pytać. Sprawdź czy adres URL jest przepisany dokładnie.

### Port 5173 zajęty
Vite sam wybierze inny port i pokaże go w terminalu.

### Strona wygląda inaczej niż oczekiwano (brak czcionki)
Potrzebne jest połączenie z internetem — czcionka Inter ładuje się z Google Fonts.

---

## Struktura projektu

```
olimax-rail/
├── public/
│   └── videos/
│       └── rail-transport.mp4   ← film w tle Hero
├── src/
│   ├── App.jsx                  ← cały kod strony
│   ├── main.jsx                 ← punkt wejścia React
│   └── index.css                ← style globalne
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Budowanie wersji do wgrania na hosting

```powershell
npm run build
```

Gotowe pliki pojawią się w folderze `dist/` — wgraj je na dowolny hosting statyczny (Netlify, Vercel, GitHub Pages).
