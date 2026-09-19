# Through the Mist (در میان مِه)

> **Official website for the "Through the Mist" (در میان مِه) interactive offline event by FrontChapter.**  
> *رویداد تعاملی فرانت‌چپتر برای طراحان، برنامه‌نویسان و متخصصان محصول در مواجهه با موج هوش مصنوعی.*

[![Live Website](https://img.shields.io/badge/Live-mist.frontchapter.ir-00E599?style=flat-square&logo=vercel&logoColor=white)](https://mist.frontchapter.ir)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Deploy-GitHub_Pages-blue?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/frontChapter/Through-the-Mist-Event/actions)
[![License](https://img.shields.io/badge/License-Proprietary-gray?style=flat-square)](LICENSE)

---

## 📖 Overview | درباره رویداد

**«در میان مِه»** رویدادی تعاملی و حضوری است که توسط جامعه تخصصی **فرانت‌چپتر (FrontChapter)** برگزار می‌شود. این رویداد با رویکردی عمیق و متمایز، به دغدغه‌ها و سردرگمی شغلی ناشی از پیشرفت سریع هوش مصنوعی و دگرگونی پارادایم‌های کاری در جامعه تکنولوژی ایران می‌پردازد.

### مشخصات و اهداف کلیدی رویداد
- **مخاطبان:** طراحان محصول، مهندسان نرم‌افزار، توسعه‌دهندگان وب و فعالان حوزه فناوری (به‌ویژه با سابقه ۲۲ تا ۳۵ سال).
- **کارگاه تعاملی Group Support:** هدایت‌شده توسط **دکتر مهیار پویامهر** (دکترای روان‌شناسی بالینی دانشگاه شیراز) برای واکاوی عدم‌قطعیت و عبور از درماندگی شغلی در گروه‌های کوچک هم‌مسیر.
- **پنل گفت‌وگو و انتقال تجربه:** با همراهی **صالح شجاعی** (بنیان‌گذار فرانت‌چپتر)، **امیر کریمی** (عضو تیم اجرایی فرانت‌چپتر) و **پویا صبرآموز** (توسعه‌دهنده ارشد) پیرامون درک پارادایم جدید بازار کار تک و هوش مصنوعی.
- **مکان:** تهران، کارخانه نوآوری آزادی، فضای کار اشتراکی زاویه.
- **ظرفیت:** محدود (۵۰ نفر).

---

## ✨ Key Features | امکانات وب‌سایت

- 🎬 **Cinematic Narrative Landing Experience:** ساختار ۱۲ بخشی منسجم با هدایت کاربر در جریان داستان و محوریت رویداد.
- 🌊 **Smooth Inertia Scrolling:** پیاده‌سازی پیمایش روان و مدرن با کتابخانه Lenis.
- 🎯 **Strict Fullpage Desktop Snap & Responsive Mobile Scroll:** سیستم کنترل اسکرول اختصاصی در دسکتاپ به همراه اسکرول روان و طبیعی برای صفحات لمسی موبایل.
- 💡 **Interactive Flashlight & Relief Mask Reveal:** افکت تعاملی ماسک نوری با دنبال‌کردن ماوس روی نقش‌برجسته کتیبه شاهنامه در فوتر رویداد.
- 🎨 **Rich Persian Typography & Styling:** تایپوگرافی چشم‌نواز با فونت متغیر دانا (Dana Variable Font) و پالت رنگی تاریک مینیمال با ته‌رنگ طلایی و کرم سنگ مرمر.
- 🔍 **SEO & Rich Structured Data:** متاتگ‌های کامل Open Graph، Twitter Cards و پیاده‌سازی Schema.org `Event` JSON-LD برای موتورهای جستجو.
- 🚀 **Static Export for High-Speed Delivery:** تولید تماماً ایستا (`output: 'export'`) بهینه‌شده برای هاستینگ روی GitHub Pages و شبکه‌های توزیع محتوا (CDN).

---

## 🛠️ Tech Stack | ابزارها و فناوری‌ها

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static HTML Export)
- **UI Library:** [React 18](https://react.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) & Custom CSS tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **CI/CD:** GitHub Actions (Deploy to GitHub Pages)

---

## 📂 Project Structure | ساختار پوشه‌ها

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for build and deploy
├── public/
│   ├── assets/                 # Images, sponsors, reliefs, and OG preview
│   ├── fonts/                  # Dana Variable Font (DanaVF.woff2)
│   └── videos/                 # Hero background video assets
├── src/
│   ├── app/
│   │   ├── designxhand.css     # Bespoke styles, tokens, and font-face
│   │   ├── globals.css         # Global Tailwind and HTML/body base styles
│   │   ├── layout.tsx          # RootLayout with SEO metadata & Event JSON-LD
│   │   └── page.tsx            # Main experience landing page assembly
│   ├── components/
│   │   ├── AgendaSection.tsx           # Event curriculum & schedule
│   │   ├── ApaMethodSection.tsx        # Methodology presentation section
│   │   ├── EventFooter.tsx             # Outro & interactive relief flashlight
│   │   ├── FaqSection.tsx              # Accordion FAQ
│   │   ├── FullpageScrollController.tsx# Desktop fullpage scroll snap logic
│   │   ├── GlobalFloatingCta.tsx       # Floating reserve ticket capsule
│   │   ├── HeroSection.tsx             # Entrance hero with video & badges
│   │   ├── HospitalitySection.tsx      # Timeline & experience flow
│   │   ├── LocationSection.tsx         # Zavieh venue map & nearby stay
│   │   ├── MethodIntroSection.tsx      # Narrative transition & quote
│   │   ├── MissionSection.tsx          # Core philosophy & 3 pillars
│   │   ├── Navbar.tsx                  # Dynamic adaptive header navigation
│   │   ├── SkylineSection.tsx          # Transition atmosphere
│   │   ├── SmoothScrollProvider.tsx    # Lenis smooth scroll wrapper
│   │   ├── SponsorsSection.tsx         # Partners & sponsors showcase
│   │   └── TicketsSection.tsx          # Ticket tiers & checkout link buttons
│   ├── data/
│   │   └── experience-data.ts  # Centralized content, sponsors, FAQs, & passes
│   ├── types/                  # Global and custom TypeScript types
│   └── utils/
│       └── basePath.ts         # Static asset prefix & sub-path resolver
├── next.config.mjs             # Next.js export & basePath configuration
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started | راه‌اندازی پروژه

### Prerequisites | پیش‌نیازها

- **Node.js**: `v20.x` or higher
- **pnpm**: `v9.x` (recommended)

### Installation | نصب وابستگی‌ها

1. مخزن را کلون کنید:
   ```bash
   git clone git@github.com:frontChapter/Through-the-Mist-Event.git
   cd Through-the-Mist-Event
   ```

2. پکیج‌ها را نصب کنید:
   ```bash
   pnpm install
   ```

### Development | اجرای محیط توسعه

برای اجرای سرور محلی توسعه با Hot Reloading:

```bash
pnpm dev
```

سپس آدرس [http://localhost:3000](http://localhost:3000) را در مرورگر باز کنید.

### Build & Static Export | ساخت و خروجی ایستا

برای ایجاد بیلد بهینه‌شده ایستا در پوشه `out/`:

```bash
pnpm build
```

برای تست پیش‌نمایش بیلد لوکال (یا با سرور استاتیک نظیر `serve` یا `npx serve out`):

```bash
npx serve out
```

---

## 🌐 Deployment | استقرار

پروژه به صورت خودکار از طریق **GitHub Actions** روی شاخه `gh-pages` مستقر می‌شود:
- با هر Push به شاخه `main`، ورک‌فلو `.github/workflows/deploy.yml` اجرا شده و دستور `pnpm build` را با فایل `.nojekyll` خروجی می‌گیرد.
- متغیر محیطی `NEXT_PUBLIC_BASE_PATH` امکان میزبانی در ساب‌پث‌های گیت‌هاب پیجز (مانند `/<repo-name>`) یا دامنه‌های اختصاصی مستقیم (`mist.frontchapter.ir`) را به صورت یکنواخت تضمین می‌کند.

---

## 🤝 Sponsors & Strategic Partners | حامیان و همکاران

- **[کارخانه هوش مصنوعی ایران (IAIF)](https://aiif.ai/):** همکار راهبردی و اکوسیستم نوآوری
- **[لیارا کلود (Liara)](https://liara.ir/):** اسپانسر ابری و زیرساخت
- **[فرانت‌چپتر (FrontChapter)](https://frontchapter.ir/):** برگزارکننده و جامعه تخصصی توسعه‌دهندگان وب

---

## 👥 Community & Contact | ارتباط با برگزارکننده

- **وب‌سایت جامعه:** [frontchapter.ir](https://frontchapter.ir)
- **کانال تلگرام:** [@FrontChapter](https://t.me/FrontChapter)
- **رویداد در میان مه:** [mist.frontchapter.ir](https://mist.frontchapter.ir)

---

&copy; 2026 FrontChapter Community. All rights reserved.
