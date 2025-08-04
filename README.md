# OnePager Project

Een moderne, professionele OnePager website gebouwd met Next.js en shadcn/ui.

## 🚀 Features

- **16:9 Aspect Ratio**: Alle secties zijn geoptimaliseerd voor 16:9 formaat
- **Moderne UI**: Gebruik van shadcn/ui componenten voor een professionele uitstraling
- **Responsive Design**: Perfect op alle apparaten en schermformaten
- **TypeScript**: Volledig getypeerd voor betere ontwikkelervaring
- **Tailwind CSS**: Moderne styling met utility-first CSS

## 🛠️ Technologieën

- **Next.js 14**: React framework met App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Moderne UI componenten
- **Framer Motion**: Animaties (optioneel)
- **Lucide React**: Icon library

## 📁 Project Structuur

```
src/
├── app/
│   ├── globals.css          # Global styles met shadcn/ui thema
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage component
├── components/
│   └── ui/                  # shadcn/ui componenten
│       ├── button.tsx       # Button component
│       └── card.tsx         # Card componenten
└── lib/
    └── utils.ts             # Utility functies
```

## 🚀 Development

### Installatie

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 🎨 Customization

### Kleuren aanpassen

De kleuren kunnen aangepast worden in `src/app/globals.css` bij de CSS variabelen.

### Componenten toevoegen

Nieuwe shadcn/ui componenten kunnen toegevoegd worden in `src/components/ui/`.

## 📱 Responsive Design

De website is volledig responsive en werkt perfect op:
- Desktop (16:9 aspect ratio)
- Tablet
- Mobile

## 🔧 Configuratie

- **Tailwind**: `tailwind.config.ts`
- **TypeScript**: `tsconfig.json`
- **ESLint**: `eslint.config.mjs`

## 📄 Licentie

MIT License - zie LICENSE bestand voor details.

