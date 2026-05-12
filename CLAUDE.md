# CLAUDE.md — Stof tot Leven Website Rebuild

> **Skills aktif:** `creative-design/frontend-design` · `development/senior-frontend` · `creative-design/ui-ux-pro-max`
> **Başlatma komutu:**
> ```bash
> npx claude-code-templates@latest --skill creative-design/frontend-design,development/senior-frontend,creative-design/ui-ux-pro-max
> ```

---

## 🎯 Proje Özeti

**Marka:** Stof tot Leven — by Hatish  
**Eski site:** https://stoftotleven.nl/  
**Görev:** Siteyi sıfırdan, modern, animasyonlu ve tam sayfalı olarak yeniden tasarla.  
**Dil:** Hollandaca (içerik), kod İngilizce  
**Framework:** Next.js 14 (App Router) + Tailwind CSS + Framer Motion

---

## 🎨 Renk Paleti — Eski Siteyle Aynı Olmalı

Renk paletini **eski siteden birebir extract et**. Referans için:

```
Arka plan    →  Sıcak krem / linen beyaz   (#F9F5F0 benzeri)
Birincil     →  Koyu antrasit / derin lacivert (metin rengi)
Vurgu        →  Sıcak terracotta ya da toz gülü tonu
İkincil      →  Doğal bej / hasır tonu
```

> ⚠️ **ÖNEMLİ:** Gerçek hex değerleri için `https://stoftotleven.nl/` adresinden CSS değişkenlerini ve renkleri tara; bunları CSS custom properties olarak tanımla:

```css
:root {
  --color-bg:       /* eski siteden extract et */;
  --color-primary:  /* eski siteden extract et */;
  --color-accent:   /* eski siteden extract et */;
  --color-text:     /* eski siteden extract et */;
  --color-muted:    /* eski siteden extract et */;
}
```

---

## 🗂️ Site Yapısı — Sayfalar

Her sayfa **ayrı route** ve **içi dolu** olacak:

| Route | Sayfa Adı |
|---|---|
| `/` | Anasayfa (Home) |
| `/raamdecoratie` | Raamdecoratie |
| `/stofferen` | Stofferen |
| `/kussens-op-maat` | Kussens op maat |
| `/maritieme-bekleding` | Maritieme bekleding op maat |
| `/zakelijke-partners` | Zakelijke partners |
| `/contact` | Contact |

---

## 🧭 Navigasyon (Header/Navbar)

- **Logo:** Stof tot Leven SVG logo (sol üst)
- **Menü linkleri (sağ):**
  - Raamdecoratie
  - Stofferen
  - Kussens op maat
  - Maritieme bekleding op maat
  - Zakelijke partners
  - Contact
- **Scroll davranışı:** Sayfa aşağı kaydıkça navbar arka planı opak hale gelsin (glassmorphism veya solid)
- **Mobile:** Hamburger menü, tam ekran overlay animasyonlu açılış
- **Active link** state — mevcut sayfa vurgulanır

---

## 🏠 ANASAYFA (`/`) — Bölüm Bölüm

### 1. Hero / Animasyonlu Giriş Ekranı
- **Eski sitedeki gibi:** Tam ekran giriş animasyonu
- SVG veya Lottie animasyonu kullan (kumaş/desen temalı)
- Merkeze büyük tipografi: `"Stof tot Leven"` + `"by Hatish"`
- Scroll-down oku veya "Ontdek meer" CTA butonu
- Parallax veya fade-in reveal efekti
- Smooth scroll transition'ı ile bir sonraki bölüme geç

### 2. Hatish'in Hikayesi (Over Hatish)
İçerik eski siteden:

> **Türkçe özet (Hollandaca yazılacak):**
> - Adı: Hatice Göktaş Uzunca — "Hatish"
> - 20+ yıldır Kleiweg'de aktif
> - Terzinin kızı — iğne, iplik ve hikayeler arasında büyüdü
> - "Stof tot Leven'de mesele sadece döşeme ya da perdeler değil. Dikkat, dinlemek, hissetmek."
> - "Müşteri değil, tanıdık olarak karşılarsın."
> - Misyon: wensen vertalen naar iets tastbaars, iets moois, iets echts.

**Layout:**
- Sol: Hatish fotoğrafı veya illüstrasyon placeholder
- Sağ: Hikaye metni + imza tipografisi ("Liefs, Hatish")
- Scroll reveal animasyonu (soldan ve sağdan slide-in)

### 3. Hizmetlerimiz (Onze Diensten)
4 kart veya grid:

| İkon | Başlık | Açıklama |
|---|---|---|
| 🪟 | Raamdecoratie | Van gordijnen tot inbetweens – sfeer en stijl in elke ruimte |
| 🪑 | Stofferen | Van fauteuil tot eetkamerstoel – oog voor detail en duurzaamheid |
| 🛋️ | Kussens op maat | Sierkussens, zitkussens of buitenkussens – in jouw stijl |
| ⛵ | Maritieme bekleding | Van boten tot horeca – unieke oplossingen |

- Her kart tıklanınca ilgili sayfaya yönlendirmeli
- Hover efekti: renk geçişi + hafif scale + shadow
- Staggered fade-in animasyonu (kartlar sırayla belirir)

### 4. Referanslarımız (Referenties)
- Logo grid veya kart slider
- Müşteri yorumları / testimonials
- "20+ jaar ervaring op de Kleiweg" badge veya stat sayacı
- Güven unsurları: KvK numarası, yıl, Rotterdam ibaresi

### 5. Bize Ulaşın (Contact — Eski sitedeki form)
İletişim formu eski sitedeki gibi:

**Form alanları:**
- Naam (Ad)
- E-mail
- Onderwerp (dropdown): Offerte aanvraag / Adviesverzoek / Compliment-Klacht / Afspraak maken
- Voorkeursdag (dropdown): Maandag t/m Zondag
- Voorkeur dagdeel (dropdown): Ochtend / Middag / Avond
- Bericht (textarea)
- Verzenden butonu

**Yan panel (contact bilgileri):**
```
Hatish interieur & exterieur
Kleiweg 124A, 3051 GX Rotterdam
KvK: 96116358

t: 010 237 22 48
m: 06 21 965 236
e: info@stoftotleven.nl
ig: @stoftotleven.nl
```

---

## 📄 ALT SAYFALAR — Her Biri Ayrı ve Dolu

### `/raamdecoratie` — Raamdecoratie
- Hero: Pencere/perde görseli
- Başlık + açıklama paragrafı
- Hizmet detayları: gordijnen, vitrages, vouwgordijnen, inbetweens, rolluiken
- Galeri grid (görsel placeholders)
- "Vraag een offerte aan" CTA butonu → /contact

### `/stofferen` — Stofferen
- Hero: Sandalye/koltuk döşeme görseli
- Neler döşenebilir: fauteuils, banken, eetkamerstoelen, voetenbanken
- Süreç adımları: 1. Adviesgesprek → 2. Stoffen kiezen → 3. Vakmanschap → 4. Oplevering
- Animasyonlu timeline veya stepper
- "Maak een afspraak" CTA

### `/kussens-op-maat` — Kussens op maat
- Ürün kategorileri: sierkussens, zitkussens, buitenkussens, stoelkussens
- Renk/kumaş seçim görseli
- Kişiselleştirme vurgusu: "Jouw stijl, jouw stof, jouw vulling"
- CTA: offerte aanvragen

### `/maritieme-bekleding` — Maritieme bekleding op maat
- Hero: Tekne/yat interior görseli
- Hedef kitler: boten, jachten, horeca, bedrijfsruimten
- Özellikler: waterdicht, uv-bestendig, duurzaam
- Proje örnekleri (placeholder galeri)
- CTA: neem contact op

### `/zakelijke-partners` — Zakelijke partners
- B2B odaklı sayfa
- "Werken met Stof tot Leven als zakelijke partner" başlığı
- Avantajlar: maatwerk, betrouwbaarheid, 20+ jaar ervaring
- Partnerlik nasıl çalışır: adım adım
- Partner logo grid (placeholder)
- CTA formu veya e-mail link

### `/contact` — Contact
- Tam sayfa iletişim sayfası
- Aynı form (anasayfadaki gibi)
- Google Maps embed (Kleiweg 124A, Rotterdam)
- Açık/kapalı saatleri
- Tüm iletişim bilgileri

---

## 🦶 Footer (Tüm Sayfalarda)

```
[Logo]              Navigasyon          İletişim
Stof tot Leven      Raamdecoratie       Kleiweg 124A, Rotterdam
by Hatish           Stofferen           010 237 22 48
                    Kussens op maat     info@stoftotleven.nl
                    Maritieme bekleding @stoftotleven.nl (IG)
                    Zakelijke partners
                    Contact

© 2025 Stof tot Leven — KvK 96116358
```

---

## ✨ Animasyon & UX Gereksinimleri

```
Kütüphane:   Framer Motion (React) veya GSAP
```

| Element | Animasyon |
|---|---|
| Hero giriş | Tam ekran reveal, SVG/text morph |
| Scroll reveals | Fade-up + stagger, threshold 0.2 |
| Navbar | Scroll'da backdrop-blur aktifleşir |
| Kartlar (hizmetler) | Hover: scale(1.03) + shadow deepen |
| Sayfa geçişleri | Smooth fade veya slide |
| Form gönderme | Loading state + success animasyonu |
| Sayfa ilk yükleme | Subtle preloader (logo animasyonu) |

---

## 🔤 Tipografi

- **Display font:** Cormorant Garamond veya Playfair Display (elegant, kumaş/atölye hissi)
- **Body font:** DM Sans veya Nunito (okunabilir, sıcak)
- **İmza/accent:** Cursive/script font (Hatish imzası için)

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
```

---

## 📱 Responsive Tasarım

- Mobile-first yaklaşım
- Breakpoints: `sm: 640px` / `md: 768px` / `lg: 1024px` / `xl: 1280px`
- Hamburger menü mobile'da
- Grid'ler mobile'da tek kolon
- Görseller lazy-load

---

## 🛠️ Teknik Stack

```json
{
  "framework": "Next.js 14 (App Router)",
  "styling": "Tailwind CSS",
  "animations": "Framer Motion",
  "icons": "Lucide React veya Heroicons",
  "forms": "React Hook Form",
  "maps": "Google Maps Embed API (ücretsiz)",
  "fonts": "Google Fonts",
  "images": "next/image (optimized)",
  "deployment": "Vercel (önerilen)"
}
```

---

## 📁 Proje Klasör Yapısı

```
stoftotleven/
├── app/
│   ├── layout.tsx              # Root layout (navbar + footer)
│   ├── page.tsx                # Anasayfa
│   ├── raamdecoratie/
│   │   └── page.tsx
│   ├── stofferen/
│   │   └── page.tsx
│   ├── kussens-op-maat/
│   │   └── page.tsx
│   ├── maritieme-bekleding/
│   │   └── page.tsx
│   ├── zakelijke-partners/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── AboutHatish.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ReferencesSection.tsx
│   │   └── ContactSection.tsx
│   ├── shared/
│   │   ├── PageHero.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ServiceCard.tsx
│   │   └── AnimatedSection.tsx
│   └── ui/
│       ├── Button.tsx
│       └── ScrollReveal.tsx
├── public/
│   ├── images/
│   └── icons/
├── styles/
│   └── globals.css
├── tailwind.config.ts
└── CLAUDE.md                   # Bu dosya
```

---

## ⚡ Başlangıç Talimatları (Claude Code için)

1. **Önce eski siteyi tara:** `https://stoftotleven.nl/` adresinden renk paletini, font boyutlarını ve layout oranlarını extract et
2. **CSS variables oluştur:** Tüm renkleri `globals.css`'e `--color-*` olarak tanımla
3. **Komponent sırası:** Layout (Navbar + Footer) → Anasayfa bölümleri → Alt sayfalar
4. **Her sayfa içi dolu** olacak — "Coming soon" veya boş bırakma
5. **Animasyonlar zorunlu:** Hero, scroll reveals ve hover states
6. **Eski sitenin ruhunu koru:** Sıcak, el sanatları, güvenilir, Rotterdam yerel
7. **İçerik dili:** Hollandaca — tüm metinler Hollandaca olacak

---

## 📋 Teslim Kontrol Listesi

- [ ] Renk paleti eski siteyle birebir
- [ ] 7 sayfa (1 anasayfa + 6 alt sayfa) — hepsi içi dolu
- [ ] Navbar: tüm linkler çalışıyor, active state var
- [ ] Footer: tüm sayfalarda tutarlı
- [ ] Anasayfa: 5 bölüm eksiksiz
- [ ] Hero animasyonu çalışıyor
- [ ] İletişim formu çalışıyor
- [ ] Mobile responsive
- [ ] Scroll reveal animasyonları
- [ ] Hollandaca içerik

---

*Stof tot Leven — by Hatish | Kleiweg 124A, Rotterdam | info@stoftotleven.nl*
