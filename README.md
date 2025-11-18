# 🎨 Portfólio React + TypeScript + Vite

Portfólio pessoal moderno e responsivo com seção de blog integrada, desenvolvido com React, TypeScript, Material-UI e Vite.

## ✨ Funcionalidades

- 🏠 **Home**: Página principal com seções sobre, formação, experiência e projetos
- 📝 **Blog**: Seção de blog com artigos sobre tecnologia
  - Listagem de posts com busca e filtros
  - Visualização individual de posts
  - Suporte a markdown
  - Sistema de tags e categorias
- 🎨 **Design Moderno**: Interface limpa e responsiva
- 🚀 **Performance**: Otimizado com lazy loading e code splitting
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🔄 **Deploy Automático**: CI/CD configurado para Hostinger

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Material-UI (MUI)** - Componentes e estilização
- **React Router** - Navegação entre páginas
- **GitHub Actions** - CI/CD automático

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🚀 Deploy

Este projeto está configurado para deploy automático na Hostinger via GitHub Actions.

### Configuração Rápida:

1. **Obter credenciais FTP da Hostinger**
2. **Configurar secrets no GitHub**:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`
3. **Push para branch main**

O deploy acontece automaticamente! 🎉

### Documentação Completa:

- 📖 [Guia Completo de Deploy](../DEPLOY_SETUP.md)
- ⚡ [Guia Rápido](../DEPLOY_QUICKSTART.md)
- 🎨 [Guia Visual](../DEPLOY_VISUAL_GUIDE.md)
- 🔄 [Alternativas de Deploy](../DEPLOY_ALTERNATIVES.md)

## 📝 Blog

### Adicionar Novos Posts

Edite o arquivo `src/data/blogPosts.ts`:

```typescript
{
  id: "novo-post",
  title: "Título do Post",
  excerpt: "Resumo do post...",
  content: `Conteúdo em markdown...`,
  date: "2024-11-18",
  author: "Seu Nome",
  category: "Categoria",
  tags: ["tag1", "tag2"],
  readTime: "5 min"
}
```

Veja [BLOG_README.md](./BLOG_README.md) para mais detalhes.

## 📁 Estrutura do Projeto

```
portifolio/
├── public/              # Arquivos estáticos
│   └── .htaccess       # Configuração Apache
├── src/
│   ├── components/     # Componentes reutilizáveis
│   │   ├── NavBar/
│   │   ├── AnimatedSection/
│   │   └── MarkdownRenderer/
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home/
│   │   └── Blog/
│   ├── data/           # Dados estáticos
│   │   └── blogPosts.ts
│   ├── assets/         # Imagens e arquivos
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── theme.ts        # Tema Material-UI
├── .github/
│   └── workflows/
│       └── deploy.yml  # CI/CD
└── package.json
```

## 🎨 Personalização

### Tema

Edite `src/theme.ts` para personalizar cores:

```typescript
palette: {
  primary: {
    main: '#171616',      // Cor principal
  },
  secondary: {
    main: '#00d4ff',      // Cor de destaque
  },
}
```

### Conteúdo

- **Sobre**: `src/pages/Home/sections/About/About.tsx`
- **Projetos**: `src/pages/Home/sections/Projects/Projects.tsx`
- **Blog**: `src/data/blogPosts.ts`

## 🔧 Scripts Disponíveis

```bash
npm run dev       # Servidor de desenvolvimento
npm run build     # Build para produção
npm run preview   # Preview do build
npm run lint      # Executar linter
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## 🚀 Performance

### Otimizações Implementadas:

- ✅ Lazy loading de componentes
- ✅ Code splitting automático
- ✅ Compressão de assets
- ✅ Remoção de console.logs em produção
- ✅ Cache de arquivos estáticos
- ✅ Chunks separados para bibliotecas

## 🔐 Segurança

- ✅ Headers de segurança configurados no `.htaccess`
- ✅ Proteção contra clickjacking
- ✅ XSS protection habilitada
- ✅ MIME type sniffing desabilitado

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👤 Autor

**Gabriel Ferreira**

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📚 Documentação Adicional

- [Blog README](./BLOG_README.md) - Documentação do blog
- [Deploy Setup](../DEPLOY_SETUP.md) - Guia completo de deploy
- [Deploy Quickstart](../DEPLOY_QUICKSTART.md) - Guia rápido
- [Deploy Visual Guide](../DEPLOY_VISUAL_GUIDE.md) - Guia visual
- [Deploy Alternatives](../DEPLOY_ALTERNATIVES.md) - Alternativas de deploy

---

Desenvolvido com ❤️ usando React + TypeScript + Vite
