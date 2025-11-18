# 🎨 React Portfolio com Blog

Portfólio pessoal moderno e responsivo desenvolvido com React, TypeScript, Material-UI e Vite, com seção de blog integrada e deploy automático para Hostinger.

## ✨ Funcionalidades

- 🏠 **Portfólio Completo**: Seções de sobre, formação, experiência e projetos
- 📝 **Blog Integrado**: Sistema de blog com posts sobre tecnologia
  - Busca e filtros por categoria
  - Suporte a markdown
  - Sistema de tags
- 🎨 **Design Moderno**: Interface responsiva e animada
- 🚀 **Deploy Automático**: CI/CD configurado para Hostinger via Git

## 🚀 Deploy Rápido - Hostinger

### ⚡ Solução Rápida (3 Passos)

#### 1️⃣ Criar Branch Production

**Windows:**
```cmd
deploy-to-production.bat
```

**Linux/Mac:**
```bash
chmod +x deploy-to-production.sh
./deploy-to-production.sh
```

#### 2️⃣ Configurar na Hostinger

```
hPanel → Git → Deploy

Repository: https://github.com/GabrielF13/ReactPortifolio.git
Branch: production  ← IMPORTANTE!
Path: /public_html
```

#### 3️⃣ Clicar em "Implantar"

Pronto! Site no ar em 1-2 minutos. 🎉

---

## 📚 Documentação Completa

### Deploy:
- 📖 **[SOLUCAO_RAPIDA.md](SOLUCAO_RAPIDA.md)** - Solução rápida do problema
- 🎯 **[INSTRUCOES_HOSTINGER.md](INSTRUCOES_HOSTINGER.md)** - Passo a passo visual
- 📘 **[HOSTINGER_GIT_DEPLOY.md](HOSTINGER_GIT_DEPLOY.md)** - Guia completo Git Deploy
- 🔧 **[DEPLOY_SETUP.md](DEPLOY_SETUP.md)** - Deploy via FTP (alternativa)
- ⚡ **[DEPLOY_QUICKSTART.md](DEPLOY_QUICKSTART.md)** - Checklist rápido
- 🎨 **[DEPLOY_VISUAL_GUIDE.md](DEPLOY_VISUAL_GUIDE.md)** - Guia visual
- 🔄 **[DEPLOY_ALTERNATIVES.md](DEPLOY_ALTERNATIVES.md)** - Outras opções

### Blog:
- 📝 **[portifolio/BLOG_README.md](portifolio/BLOG_README.md)** - Documentação do blog

### Projeto:
- 📦 **[portifolio/README.md](portifolio/README.md)** - README do projeto React

---

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool ultra-rápido
- **Material-UI** - Componentes e design system
- **React Router** - Navegação SPA
- **GitHub Actions** - CI/CD automático

---

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
cd portifolio
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 🔄 Workflow de Desenvolvimento

### Para Atualizar o Site:

```bash
# 1. Editar arquivos
vim portifolio/src/pages/Blog/Blog.tsx

# 2. Commit e push
git add .
git commit -m "feat: adiciona novo post"
git push origin main

# 3. Aguardar 2-3 minutos
# GitHub Actions faz build e atualiza branch production

# 4. Deploy automático na Hostinger (se webhook configurado)
# Ou clicar em "Implantar" manualmente
```

---

## 📁 Estrutura do Projeto

```
ReactPortifolio/
│
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Deploy via FTP
│       └── build-and-commit.yml    # Build para branch production
│
├── portifolio/                     # Projeto React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home/              # Página principal
│   │   │   └── Blog/              # Seção de blog
│   │   ├── components/            # Componentes reutilizáveis
│   │   ├── data/
│   │   │   └── blogPosts.ts       # Posts do blog
│   │   └── App.tsx
│   ├── public/
│   │   └── .htaccess              # Config Apache
│   └── package.json
│
├── deploy-to-production.bat        # Script deploy Windows
├── deploy-to-production.sh         # Script deploy Linux/Mac
│
└── Documentação (vários .md)
```

---

## 🌿 Branches

### `main` - Desenvolvimento
Contém o código fonte TypeScript/React. Use para desenvolvimento.

### `production` - Deploy
Contém os arquivos buildados (HTML/JS/CSS). A Hostinger usa esta branch.

**⚠️ IMPORTANTE:** Configure a Hostinger para usar a branch `production`, não `main`!

---

## ❓ FAQ

### Por que duas branches?

A branch `main` tem código TypeScript que precisa ser compilado. A branch `production` tem os arquivos já buildados, prontos para servir.

### Como adicionar novos posts no blog?

Edite `portifolio/src/data/blogPosts.ts` e adicione um novo objeto ao array. Veja `portifolio/BLOG_README.md` para detalhes.

### O deploy é automático?

Sim! Após configurar:
1. Push para `main` → GitHub Actions faz build
2. Atualiza branch `production`
3. Webhook notifica Hostinger (se configurado)
4. Site atualizado automaticamente

### Como fazer rollback?

```bash
git checkout production
git reset --hard HEAD~1
git push -f origin production
# Depois faça deploy na Hostinger novamente
```

---

## 🆘 Problemas Comuns

### "nothing to commit, working tree clean"

**Causa:** Hostinger está usando branch `main` em vez de `production`

**Solução:** Na Hostinger, mude para branch `production`

### Branch production não existe

**Solução:** Execute o script `deploy-to-production.bat` ou `.sh`

### Site não atualiza

**Soluções:**
1. Limpe cache: `Ctrl + Shift + R`
2. Verifique se usou branch `production`
3. Veja logs na Hostinger

---

## 📊 Status do Projeto

- ✅ Portfólio completo
- ✅ Blog funcional com 5 artigos
- ✅ Design responsivo
- ✅ Deploy automático configurado
- ✅ Documentação completa

---

## 👤 Autor

**Gabriel Ferreira**

- GitHub: [@GabrielF13](https://github.com/GabrielF13)
- Repositório: [ReactPortifolio](https://github.com/GabrielF13/ReactPortifolio)

---

## 📄 Licença

MIT License - Sinta-se livre para usar este projeto como base para o seu portfólio!

---

## 🎯 Próximos Passos

1. ✅ Criar branch production (script ou GitHub Actions)
2. ✅ Configurar na Hostinger (branch `production`)
3. ✅ Testar o site
4. ✅ Configurar webhook (opcional - deploy 100% automático)

---

## 📞 Suporte

- **Problemas com deploy?** → Ver `SOLUCAO_RAPIDA.md`
- **Dúvidas sobre Git Deploy?** → Ver `HOSTINGER_GIT_DEPLOY.md`
- **Instruções passo a passo?** → Ver `INSTRUCOES_HOSTINGER.md`
- **Problemas com blog?** → Ver `portifolio/BLOG_README.md`

---

**Desenvolvido com ❤️ usando React + TypeScript + Vite**

🚀 **Deploy na Hostinger em 3 passos!**

