# 📑 Product Requirement Document (PRD)

## 1. Document Overview

* **Project Name:** Personal Digital Space & Thought Garden
* **Owner:** Hendry Bambang Siswanto
* **Version:** 1.0.0 (September 2026)
* **Status:** Draft / Ready for Implementation
* **Primary Objective:** Transisi dari portofolio kaku berformat "CV berjalan/techy" ke **personal space** berbasis narasi yang minimalis, hangat, dan fokus pada tulisan, pemikiran, serta rekam jejak multidisiplin (Sistem Informasi, Fisika, Youth Diplomacy, & Technopreneurship).


* **Design Benchmark:** [KyraSpace](https://www.kyraspace.com/) (Editorial, Minimalist, Typography-Centric, Clean).

---

## 2. Target Audience & Brand Persona

* **Audience:** Rekan kolaborator akademis/bisnis, jaringan organisasi diplomasi pemuda, *recreators*, serta audiens umum yang tertarik pada tulisan personal.


* **Core Positioning:** *"An explorer bridging physical science, digital systems, and youth advocacy."*

* **Tone of Voice:** Reflective, warm, articulate, modest, & grounded.

---

## 3. System Architecture & Tech Stack

### 3.1 Technology Choice

* **Core Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript (Strict mode enabled)
* **Styling:** Tailwind CSS v3.4+
* **Content Engine:** `@next/mdx` atau `contentlayer` / local file reader (`gray-matter` + `next-mdx-remote`) untuk mengelola file `.mdx` di folder local `content/`.
* **Fonts (`next/font`):**
* *Primary Serif (Heading & Editorial Quote):* **Lora** atau **Newsreader**
* *Primary Sans-Serif (Body & UI):* **Plus Jakarta Sans** atau **Inter**


* **Deployment & Hosting:** Vercel (CI/CD via GitHub repository)

### 3.2 Key Architecture Constraints

* **Zero Heavy Animation Libraries:** Tidak menggunakan Framer Motion berat atau Lenis smooth scroll. Animasi dibatasi pada transisi Tailwind standar (`transition-all duration-200 ease-in-out`).
* **Static Site Generation (SSG):** Seluruh halaman tulisan dan proyek di-*render* secara terkonfigurasi statis untuk kecepatan muat mendasar (*lightning-fast initial load*).

---

## 4. Layout & Information Architecture

### 4.1 Global Layout Design System

* **Max Container Width:** `max-w-2xl` (768px) atau `max-w-3xl` (896px) untuk menjaga *reading length* yang optimal.
* **Color Palette (Light Mode Default / Minimalist Muted Tone):**
* Background: `#FBFBFB` (Warm Off-White)
* Text Primary: `#1C1917` (Stone 900)
* Text Secondary: `#78716C` (Stone 500)
* Border / Divider: `#E7E5E4` (Stone 200)
* Accent / Link Hover: `#44403C` (Stone 700)


* **Header / Navigation:** Minimalis di bagian atas (Logo/Nama sederhana "Hendry Bambang" dan menu: `Home`, `About`, `Notes`, `Projects`).

---

## 5. Page-by-Page Requirements

### 5.1 Halaman Utama / Home (`/`)

1. **Hero Section:**
* Foto profil kasual/candid berukuran medium dengan sudut halus (`rounded-lg`), bersandingan atau berada tepat di atas sapaan utama.
* Narasi sapaan hangat (2–3 paragraf singkat) yang menceritakan fokus eksplorasi tanpa gaya promosi diri berlebihan.


2. **Featured Notes (Digital Garden):**
* Menampilkan 3 catatan/jurnal pemikiran terbaru. Setiap item berisi: *Date*, *Title*, dan *Read Time*.


3. **Selected Work & Focus:**
* Menampilkan 2–3 inisiatif/proyek terpilih (misal: Webtizen.id, Riset Computer Vision/Physics, atau Diplomatic Youth Engagement). Format deskripsi berfokus pada masalah dan narasi, bukan sekadar deretan *tech stack*.




4. **Footer:**
* Teks hak cipta simpel dan baris tautan media sosial (LinkedIn, GitHub, Instagram, Email).





### 5.2 Halaman About (`/about`)

1. **Storytelling Narrative:**
* Bagian utama menceritakan latar belakang *double major* (Sistem Informasi UNIBI & Fisika UIN SGD), ketertarikan pada keterhubungan sains-teknologi-masyarakat, dan peran di diplomasi pemuda.




2. **Current Roles / What I'm Doing Now:**
* Ringkasan singkat peran aktif saat ini (misal: Deputy Chair IYD Jabar, CEO Webtizen.id).




3. **Selected Milestones (Curated, Non-CV style):**
* Catatan ringkas pencapaian penting tanpa *timeline animation* yang bising.



### 5.3 Halaman Notes / Jurnal (`/notes`)

1. **Header:** Judul "Notes" dan deskripsi singkat tentang area topik yang sering ditulis (Sains, Teknologi, Komunitas, Kepemudaan).
2. **Post List:** Daftar tulisan terurut kronologis (*reverse chronological order*) berdasarkan tanggal rilis.
3. **Post Detail Route (`/notes/[slug]`):**
* Tampilan baca editorial yang jernih (*typography-first*).
* Fitur navigasi *Back to Notes*.



### 5.4 Halaman Projects (`/projects`)

1. **Project Directory:** Daftar studi kasus proyek yang dikurasi dengan cermat.
2. **Project Detail Route (`/projects/[slug]`):** Halaman MDX terdedikasi untuk membaca detail cerita dan latar belakang pembuatan proyek.

---

---

# 🤖 Roadmap Task untuk AI Agent (Prompt Executable Sequence)

*Instruksi untuk AI Agent: Jalankan setiap tugas di bawah secara terpisah dan bertahap. Kerjakan **TASK ID** berikutnya HANYA jika **TASK ID** sebelumnya telah terverifikasi berjalan tanpa error.*

```
[PROGRESS TRACKER]
Task 1: Project Initialization & Base Configuration  [ ]
Task 2: Design System & Global Layout Setup          [ ]
Task 3: MDX Content Engine Pipeline Setup            [ ]
Task 4: Build Home Page (Hero & Layout)              [ ]
Task 5: Build About Page (Narrative Layout)          [ ]
Task 6: Build Notes Index & Detail Page (MDX Reader) [ ]
Task 7: Build Projects Index & Detail Page           [ ]
Task 8: Final Review, Accessibility & SEO Optimization [ ]

```

---

### 🟢 TASK 1: Project Initialization & Base Configuration

* **Goal:** Menyiapkan fondasi Next.js 14+ App Router dengan TypeScript dan Tailwind CSS.
* **Prompt Instruksi Agent:**
> "Buat struktur proyek Next.js baru menggunakan App Router dan TypeScript. Install Tailwind CSS. Hapus semua style bawaan yang ada di `globals.css` kecuali directiv `@tailwind`. Pastikan `tsconfig.json` terkonfigurasi dengan path alias `@/*`. Buat file `README.md` yang menjelaskan struktur folder proyek dasar."



---

### 🟢 TASK 2: Design System, Fonts & Global Layout Setup

* **Goal:** Menyiapkan sistem tipografi editorial, skema warna *stone/muted*, serta komponen `Navbar` dan `Footer`.
* **Prompt Instruksi Agent:**
> "Konfigurasikan `next/font` di `app/layout.tsx` menggunakan font **Lora** (Serif) untuk variabel font heading dan **Plus Jakarta Sans** (Sans-serif) untuk body. Update `tailwind.config.ts` untuk mendaftarkan variabel font dan kustomisasi warna stone/neutral. Buat komponen `Navbar.tsx` (header minimalis dengan tautan Home, About, Notes, Projects) dan `Footer.tsx` (tautan sosial media & kontak). Pasang kedua komponen ini di `app/layout.tsx` dengan container `max-w-2xl mx-auto px-4`."



---

### 🟢 TASK 3: MDX Content Engine Pipeline Setup

* **Goal:** Menyiapkan *reader pipeline* untuk membaca file `.mdx` dari folder local `content/notes/` dan `content/projects/`.
* **Prompt Instruksi Agent:**
> "Install package `gray-matter` dan `next-mdx-remote` (atau `@next/mdx`). Buat utilitas pembaca file di `lib/mdx.ts` yang memiliki fungsi untuk:
> 1. Mengambil semua metadata post dari folder `content/notes`.
> 2. Mengambil satu content post spesifik berdasarkan `slug`.
> Buat 2 contoh dummy file `.mdx` di folder `content/notes/sample-note.mdx` dengan frontmatter (`title`, `date`, `excerpt`). Pastikan fungsi pembaca tidak melempar error jika folder kosong."
> 
> 



---

### 🟢 TASK 4: Build Home Page (`app/page.tsx`)

* **Goal:** Membangun halaman utama minimalis berbasis teks dan foto profil.
* **Prompt Instruksi Agent:**
> "Bangun halaman `app/page.tsx`. Halaman ini terdiri dari 3 bagian:
> 1. **Hero Section:** Foto profil lokal bersudut halus (`rounded-lg w-24 h-24 object-cover`), judul sapaan hangat ("Hi, I'm Hendry"), dan bio naratif 2 paragraf.
> 2. **Featured Notes Section:** Mengambil 3 catatan terbaru menggunakan utilitas dari `lib/mdx.ts` dan menampilkan list berupa judul, tanggal, dan rangkuman singkat.
> 3. **Featured Projects/Work Section:** Card minimalis berbasis teks tanpa shadow berlebih yang menceritakan 2 inisiatif utama (misal: Webtizen.id dan Riset Computer Vision).
> Pastikan desainnya super bersih, berfokus pada ruang kosong (white space), dan cocok dengan standar KyraSpace."
> 
> 



---

### 🟢 TASK 5: Build About Page (`app/about/page.tsx`)

* **Goal:** Membangun halaman narasi personal tentang latar belakang multidisiplin.
* **Prompt Instruksi Agent:**
> "Buat halaman `app/about/page.tsx`. Susun konten dalam format narasi editorial panjang:
> * Paragraf tentang persimpangan Sistem Informasi & Fisika (Double Major).
> * Sub-section 'Current Roles' yang merangkum kegiatan aktif (IYD West Java, Webtizen.id).
> * Sub-section 'Explorations & Interests' (Sains, Sistem Digital, Kepemudaan).
> Gunakan styling typography Tailwind (`prose` atau custom typography standar) agar pengalaman membaca terasa nyaman."
> 
> 



---

### 🟢 TASK 6: Build Notes Index & Detail Routes

* **Goal:** Membangun halaman daftar catatan (`/notes`) dan halaman baca penuh (`/notes/[slug]`).
* **Prompt Instruksi Agent:**
> "Buat dua file halaman:
> 1. `app/notes/page.tsx`: Menampilkan seluruh daftar tulisan yang diurutkan dari tanggal terbaru. Setiap item dapat diklik menuju detail post.
> 2. `app/notes/[slug]/page.tsx`: Membaca slug, mengambil file MDX yang sesuai dari `content/notes/`, dan me-render isinya menggunakan `next-mdx-remote` atau renderer MDX pilihan. Tambahkan tombol navigasi '← Back to Notes' di bagian atas halaman."
> 
> 



---

### 🟢 TASK 7: Build Projects Index & Detail Routes

* **Goal:** Membangun halaman daftar proyek (`/projects`) dan halaman detail proyek (`/projects/[slug]`).
* **Prompt Instruksi Agent:**
> "Buat folder `content/projects/` dan buat 1 contoh file `.mdx` proyek. Implementasikan halaman `app/projects/page.tsx` untuk menampilkan daftar proyek yang pernah dikerjakan (dengan filter atau tampilan list minimalis) dan `app/projects/[slug]/page.tsx` untuk membaca studi kasus proyek secara mendalam."



---

### 🟢 TASK 8: Final Review, Accessibility & SEO Optimization

* **Goal:** Mengintegrasikan metadata SEO global, memastikan responsive web design di tampilan mobile, dan memverifikasi skor performa.
* **Prompt Instruksi Agent:**
> "Tambahkan metadata SEO global (OpenGraph, title, description) pada `app/layout.tsx`. Pastikan seluruh halaman fully-responsive di layar mobile (check padding dan font size). Jalankan `npm run build` untuk memverifikasi bahwa tidak ada TypeScript error, error rendering statis, atau broken links."
