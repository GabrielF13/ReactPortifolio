# 💼 Portfolio - Gabriel Ferreira

Portfolio pessoal desenvolvido com React, TypeScript e Material-UI.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Material-UI (MUI)** - Componentes UI
- **Vite** - Build tool e dev server
- **React Router** - Navegação entre páginas

## 📁 Estrutura do Projeto

```
ReactPortifolio/
├── portifolio/              # Aplicação principal
│   ├── src/                 # Código fonte
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── assets/          # Imagens e arquivos estáticos
│   │   └── data/            # Dados (posts do blog, etc)
│   ├── public/              # Arquivos públicos
│   └── dist/                # Build de produção
├── deploy-rapido.bat        # Script de deploy
├── DEPLOY_FINAL.md          # Guia de deploy
└── README.md                # Este arquivo
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 20+
- npm

### Instalação

```bash
cd portifolio
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

### Build para produção

```bash
npm run build
```

Os arquivos serão gerados em `portifolio/dist/`

## 🌐 Deploy

O projeto usa deploy automático via webhook da Hostinger.

### Deploy rápido:

```bash
# 1. Fazer build
cd portifolio
npm run build
cd ..

# 2. Executar script de deploy
.\deploy-rapido.bat
```

O webhook vai disparar automaticamente o deploy na Hostinger.

📖 **Guia completo:** Veja `DEPLOY_FINAL.md`

## 📱 Funcionalidades

- ✅ Design responsivo (desktop, tablet, mobile)
- ✅ Menu hamburguer no mobile
- ✅ Seções: Hero, Sobre, Formação, Experiência, Projetos
- ✅ Blog com posts em Markdown
- ✅ Animações suaves
- ✅ Tema customizado
- ✅ SEO otimizado

## 🎨 Seções

- **Hero** - Apresentação inicial
- **Sobre** - Informações pessoais
- **Formação** - Educação e cursos
- **Experiência** - Histórico profissional
- **Projetos** - Portfolio de projetos
- **Blog** - Artigos e posts

## 📝 Adicionar Post no Blog

Edite o arquivo `portifolio/src/data/blogPosts.ts`:

```typescript
{
  id: 4,
  title: "Título do Post",
  excerpt: "Resumo do post...",
  date: "2024-01-01",
  readTime: "5 min",
  content: `
    # Título
    Conteúdo em Markdown...
  `
}
```

## 🔧 Configuração

### Cores do tema

Edite `portifolio/src/theme.ts` para personalizar as cores.

### Informações pessoais

Edite os arquivos em `portifolio/src/pages/Home/sections/` para atualizar suas informações.

## 📦 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificar código
```

## 🌍 Branches

- **main** - Código fonte (desenvolvimento)
- **production** - Build compilado (deploy)

## 📄 Licença

Este projeto é de uso pessoal.

## 👤 Autor

**Gabriel Ferreira**

- GitHub: [@GabrielF13](https://github.com/GabrielF13)
- Portfolio: [Seu domínio]

---

**Desenvolvido com ❤️ e React**
