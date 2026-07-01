# KTI Quick Reference Guide

## 🚀 Quick Start

### View KTI
- **Listing**: https://smbcloud.xyz/kti
- **Example Term**: https://smbcloud.xyz/kti/apa-itu-docker

### Add New Term

1. **Create MDX file**: `content/kti/your-term.mdx`
2. **Add frontmatter**:
```yaml
---
title: "Your Term Title"
term: "apa-itu-your-term"
category: "Category Name"
tags: ["tag1", "tag2"]
description: "Short description (150 chars max)"
englishTerm: "English Term (optional)"
acronym: "ACRONYM (optional)"
relatedTerms: ["apa-itu-term1", "apa-itu-term2"]
difficulty: "pemula" | "menengah" | "lanjut"
lastmod: 2024-01-15
published: true
---

# Content starts here...
```

3. **Build**: `npm run build:content && npm run build`
4. **Test**: `npm run dev` and visit `/kti/apa-itu-your-term`

## 📋 Categories

- **Pemrograman** - Programming, APIs, frameworks
- **Cloud & Infrastructure** - Cloud, Docker, Kubernetes
- **Software Development** - Git, DevOps, CI/CD
- **Database** - SQL, NoSQL, data
- **Keamanan** - Security, encryption
- **Networking** - HTTP, TCP/IP, DNS
- **Frontend** - HTML, CSS, JavaScript
- **Backend** - Server, APIs, microservices

## 🎯 Difficulty Levels

- **pemula** 🌱 - Beginner (basic concepts)
- **menengah** 📈 - Intermediate (practical skills)
- **lanjut** 🚀 - Advanced (expert topics)

## 🔗 Current Terms (7)

1. `/kti/apa-itu-api` - API (pemula)
2. `/kti/apa-itu-cloud-computing` - Cloud Computing (pemula)
3. `/kti/apa-itu-git` - Git (pemula)
4. `/kti/apa-itu-rest` - REST API (menengah)
5. `/kti/apa-itu-devops` - DevOps (menengah)
6. `/kti/apa-itu-docker` - Docker (menengah)
7. `/kti/apa-itu-kubernetes` - Kubernetes (lanjut)

## 💡 SEO Strategy

### Why "apa-itu-"?

Indonesians search: "apa itu docker" (2,400+ monthly)

**Our URLs**: `/kti/apa-itu-docker` = exact match!

### Benefits
- ✅ Match search queries exactly
- ✅ Low competition keywords
- ✅ Voice search ready
- ✅ Featured snippet optimized

## 📝 Content Template

```markdown
---
title: "[Technology] - Full Name"
term: "apa-itu-[technology]"
category: "Category"
tags: ["tag1", "tag2", "tag3"]
description: "Apa itu [technology]? [Clear definition in 150 chars]"
englishTerm: "English Name"
relatedTerms: ["apa-itu-term1", "apa-itu-term2"]
difficulty: "pemula"
lastmod: 2024-01-15
published: true
---

## Apa itu [Technology]?

**[Technology]** adalah [clear definition].

## Mengapa [Technology] Penting?

1. **Benefit 1** - Description
2. **Benefit 2** - Description
3. **Benefit 3** - Description

## Cara Kerja [Technology]

[Explanation with diagrams/examples]

## Contoh Penggunaan

```language
// Code example
```

## Best Practices

1. Practice 1
2. Practice 2
3. Practice 3

## Kesalahan Umum

- ❌ Mistake 1
- ❌ Mistake 2
- ✅ Correct way

## [Technology] dengan smbCloud

[Natural integration of smbCloud features]

## Tips untuk Pemula

1. Tip 1
2. Tip 2
3. Tip 3

## Kesimpulan

[Summary and next steps]
```

## 🛠️ Commands

```bash
# Generate content
npm run build:content

# Build site
npm run build

# Dev server
npm run dev

# Full rebuild
rm -rf .contentlayer && npm run build:content && npm run build
```

## 🐛 Troubleshooting

### MDX Error
**Problem**: `Unexpected character`
**Solution**: Escape HTML chars (`<` → `&lt;`, `>` → `&gt;`)

### Build Error
**Problem**: `Cannot resolve 'contentlayer/generated'`
**Solution**: Run `npm run build:content` first

### Async Params Error
**Problem**: `params is a Promise`
**Solution**: Already fixed - params are awaited

## 📊 File Structure

```
content/kti/
├── README.md              # Guidelines
├── api.mdx               → /kti/apa-itu-api
├── cloud-computing.mdx   → /kti/apa-itu-cloud-computing
├── devops.mdx           → /kti/apa-itu-devops
├── docker.mdx           → /kti/apa-itu-docker
├── git.mdx              → /kti/apa-itu-git
├── kubernetes.mdx       → /kti/apa-itu-kubernetes
└── rest.mdx             → /kti/apa-itu-rest

app/kti/
├── page.tsx             # Listing page
└── [term]/
    └── page.tsx         # Detail page (async)
```

## ✅ Checklist for New Term

- [ ] File: `content/kti/[term].mdx` (no "apa-itu-" in filename)
- [ ] Frontmatter: `term: "apa-itu-[term]"`
- [ ] Related terms: Use "apa-itu-" prefix
- [ ] Content: 1000+ words
- [ ] Code examples included
- [ ] Bahasa Indonesia + English terms
- [ ] Build: No errors
- [ ] Test: Page loads correctly

## 🎨 Styling

### Badge Colors
- **pemula**: Green (`bg-green-100 dark:bg-green-900`)
- **menengah**: Blue (`bg-blue-100 dark:bg-blue-900`)
- **lanjut**: Purple (`bg-purple-100 dark:bg-purple-900`)

### Typography
- H1: Term title
- H2: Major sections
- H3: Subsections
- Code blocks: With language tags

## 📈 Next Terms to Add

### High Priority (Pemula)
- [ ] HTML/CSS
- [ ] JavaScript
- [ ] HTTP/HTTPS
- [ ] Database
- [ ] SQL
- [ ] JSON
- [ ] Frontend/Backend

### Medium Priority (Menengah)
- [ ] TypeScript
- [ ] React
- [ ] Node.js
- [ ] PostgreSQL
- [ ] MongoDB
- [ ] JWT

### Advanced Priority (Lanjut)
- [ ] Microservices
- [ ] GraphQL
- [ ] Redis
- [ ] Message Queue
- [ ] Observability

## 🔍 SEO Checklist

- [ ] Title: "Apa Itu [Tech]..." format
- [ ] Description: Starts with definition
- [ ] Keywords: Natural placement
- [ ] H1: "Apa itu [Technology]?"
- [ ] First paragraph: Direct answer
- [ ] Internal links: Related terms
- [ ] Code examples: Syntax highlighted
- [ ] Length: 1000+ words
- [ ] Mobile friendly

## 📞 Support

- **Technical Issues**: Check `KTI_SUMMARY.md`
- **SEO Questions**: See `APA-ITU-SEO-STRATEGY.md`
- **Content Guidelines**: Read `content/kti/README.md`
- **Deployment**: Use `KTI_DEPLOYMENT_CHECKLIST.md`
- **Contact**: support@smbcloud.xyz

## 🎯 Success Metrics

### Current
- ✅ 7 terms published
- ✅ All categories represented
- ✅ All difficulty levels covered
- ✅ Build passing
- ✅ SEO optimized

### Goals (Month 1)
- 🎯 20+ terms
- 🎯 Top 10 for 10+ queries
- 🎯 100+ visits/day

### Goals (Month 6)
- 🎯 50+ terms
- 🎯 Top 3 for 30+ queries
- 🎯 1,000+ visits/day
- 🎯 Recognized brand

---

**Version**: 1.0.0
**Last Updated**: January 2024
**Status**: Production Ready ✅