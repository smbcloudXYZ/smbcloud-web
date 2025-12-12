# Kamus Teknologi Informasi (KTI)

## Tentang KTI

**Kamus Teknologi Informasi (KTI)** adalah inisiatif dari smbCloud untuk menyediakan referensi komprehensif istilah-istilah teknologi informasi dalam Bahasa Indonesia. KTI dirancang khusus untuk membantu tenaga kerja muda Indonesia memahami konsep-konsep IT dengan lebih mudah dan cepat.

## Struktur Content

Setiap entry KTI adalah file MDX dengan frontmatter berikut:

```mdx
---
title: "Judul Lengkap Istilah"
term: "apa-itu-slug-untuk-url"
category: "Kategori Utama"
tags: ["tag1", "tag2", "tag3"]
description: "Deskripsi singkat (max 160 karakter untuk SEO)"
englishTerm: "English Term (optional)"
acronym: "ACRONYM (optional)"
relatedTerms: ["apa-itu-term1", "apa-itu-term2"]
difficulty: "pemula" | "menengah" | "lanjut"
lastmod: YYYY-MM-DD
published: true | false
---

# Content starts here...
```

**Note**: All terms MUST be prefixed with `apa-itu-` (Indonesian for "what is"). This is crucial for SEO as Indonesians commonly search "apa itu [technology]".

## Kategori

- **Pemrograman** - Bahasa pemrograman, API, frameworks
- **Cloud & Infrastructure** - Cloud computing, Docker, Kubernetes
- **Software Development** - Git, DevOps, testing, CI/CD
- **Database** - SQL, NoSQL, data modeling
- **Keamanan** - Security, encryption, authentication
- **Networking** - HTTP, TCP/IP, DNS, CDN
- **Frontend** - HTML, CSS, JavaScript, React, Vue
- **Backend** - Server, API design, microservices

## Difficulty Levels

- **Pemula (🌱)** - Konsep dasar yang wajib dipahami untuk memulai karir IT
- **Menengah (📈)** - Konsep intermediate untuk meningkatkan keahlian teknis
- **Lanjut (🚀)** - Konsep advanced untuk profesional berpengalaman

## Guidelines Penulisan

### 1. Structure Content

Setiap entry harus memiliki:

- **Apa itu [Istilah]?** - Penjelasan jelas dan sederhana
- **Mengapa [Istilah] Penting?** - Context dan relevance
- **Cara Kerja** - Penjelasan teknis dengan contoh
- **Use Cases** - Contoh penggunaan di dunia nyata
- **Best Practices** - Tips dan recommendations
- **Common Mistakes** - Kesalahan yang sering terjadi
- **Resources** - Link ke dokumentasi dan learning materials
- **Kesimpulan** - Summary dan next steps

### 2. Writing Style

- ✅ Gunakan Bahasa Indonesia yang natural dan mudah dipahami
- ✅ Mix dengan istilah teknis English (karena commonly used)
- ✅ Gunakan analogi dan contoh konkret
- ✅ Include code examples dengan syntax highlighting
- ✅ Tambahkan visual aids (ASCII diagrams, tables)
- ✅ Link ke related terms untuk easy navigation
- ✅ Mention smbCloud features yang relevant

### 3. Code Examples

Selalu include practical code examples:

```javascript
// Good: Real-world example dengan explanation
const express = require('express');
const app = express();

// Middleware untuk parse JSON
app.use(express.json());

// Route handler
app.get('/api/users', async (req, res) => {
  const users = await db.users.findAll();
  res.json(users);
});
```

### 4. SEO Optimization

- Title: 50-60 karakter
- Description: 150-160 karakter
- Include target keywords naturally
- Use proper heading hierarchy (H2, H3)
- Add internal links ke related terms
- Include alt text untuk images (jika ada)

### 5. Accessibility

- Clear heading structure
- Descriptive link text
- Avoid jargon tanpa explanation
- Include glossary untuk technical terms

## Adding New Terms

1. **Create MDX file** di `content/kti/[term-slug].mdx` (without "apa-itu-" prefix in filename)
2. **Fill frontmatter** dengan complete metadata:
   - `term`: MUST include "apa-itu-" prefix (e.g., `term: "apa-itu-docker"`)
   - `relatedTerms`: All related terms MUST also include "apa-itu-" prefix
3. **Write content** following guidelines di atas
4. **Add code examples** yang relevant
5. **Link related terms** untuk discoverability
6. **Test locally**: `npm run dev`
7. **Build**: `npm run build:content && npm run build`
8. **Commit**: Clear commit message

### URL Structure
- File: `content/kti/docker.mdx`
- Term in frontmatter: `term: "apa-itu-docker"`
- Generated URL: `/kti/apa-itu-docker`
- SEO friendly: Matches Indonesian search queries "apa itu docker"

## Content Ideas

### High Priority (Pemula)

- [ ] HTML/CSS
- [ ] JavaScript
- [ ] HTTP/HTTPS
- [ ] Database
- [ ] SQL
- [ ] JSON
- [ ] Frontend/Backend
- [ ] Framework
- [ ] Library
- [ ] IDE
- [ ] Debugging

### Medium Priority (Menengah)

- [ ] GraphQL
- [ ] WebSocket
- [ ] Redis
- [ ] PostgreSQL
- [ ] MongoDB
- [ ] TypeScript
- [ ] React
- [ ] Vue.js
- [ ] Node.js
- [ ] Express
- [ ] Authentication/Authorization
- [ ] JWT
- [ ] OAuth
- [ ] Microservices

### Advanced Priority (Lanjut)

- [ ] Service Mesh
- [ ] Istio
- [ ] gRPC
- [ ] Message Queue
- [ ] Event-Driven Architecture
- [ ] CQRS
- [ ] Event Sourcing
- [ ] Distributed Systems
- [ ] CAP Theorem
- [ ] Blockchain
- [ ] Machine Learning
- [ ] CI/CD Advanced
- [ ] Observability
- [ ] Chaos Engineering

## Marketing Strategy

### Content Distribution

1. **SEO** - Optimize untuk search engines
2. **Social Media** - Share snippets di Twitter, LinkedIn, Instagram
3. **Newsletter** - Weekly term spotlight
4. **Community** - Encourage contributions via GitHub
5. **Partnerships** - Collaborate dengan Indonesian tech communities

### Target Keywords

- "kamus teknologi informasi"
- "istilah IT Indonesia"
- "belajar IT pemula"
- "[specific term] adalah"
- "cara kerja [technology]"
- "tutorial [technology] Indonesia"

### Metrics to Track

- Page views per term
- Time on page
- Bounce rate
- Internal link clicks
- Related terms navigation
- Conversion to smbCloud (CTAs)

## Technical Implementation

### Routes

- `/kti` - Main listing page with search/filtering
- `/kti/apa-itu-[term]` - Individual term detail page (e.g., `/kti/apa-itu-docker`)

### Features

- ✅ Static generation at build time (SSG)
- ✅ SEO optimized with metadata
- ✅ Related terms navigation
- ✅ Category and difficulty filtering
- ✅ Search functionality (planned)
- ✅ Dark mode support
- ✅ Mobile responsive
- ✅ Social sharing (planned)

### Performance

- Prerendered at build time
- Optimized images
- Minimal JavaScript
- Fast page loads
- Good Core Web Vitals

## Contributing

Contributions welcome! Please:

1. Follow the structure guidelines
2. Write in clear Bahasa Indonesia
3. Include practical examples
4. Test locally before PR
5. Add yourself to contributors list

## License

Content is licensed under CC BY-SA 4.0
Code examples are licensed under MIT

---

**Maintained by**: smbCloud Team
**Last Updated**: January 2024
**Contact**: hello@smbcloud.xyz