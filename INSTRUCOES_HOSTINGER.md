# 📱 Instruções Visuais - Hostinger Git Deploy

## 🎯 O Que Você Precisa Fazer

Você está vendo este erro porque a Hostinger está tentando usar a branch **`main`** que tem código fonte, mas precisa usar a branch **`production`** que tem os arquivos buildados.

---

## 🚀 PASSO A PASSO COMPLETO

### ✅ ETAPA 1: Criar a Branch Production

Escolha uma opção:

#### **Opção A: Script Automático** (Mais Rápido) ⚡

Abra o terminal/PowerShell na pasta do projeto e execute:

**Windows (PowerShell):**
```powershell
.\deploy-to-production.bat
```

**Linux/Mac (Terminal):**
```bash
chmod +x deploy-to-production.sh
./deploy-to-production.sh
```

O script vai:
1. ✅ Fazer build do projeto
2. ✅ Criar branch `production`
3. ✅ Enviar para GitHub
4. ✅ Mostrar próximos passos

---

#### **Opção B: GitHub Actions** (Automático mas demora mais)

```bash
# Fazer commit dos novos arquivos
git add .
git commit -m "chore: configura deploy production"
git push origin main

# Aguardar 2-3 minutos
# GitHub Actions vai criar a branch automaticamente
```

Acompanhe em: https://github.com/GabrielF13/ReactPortifolio/actions

---

### ✅ ETAPA 2: Verificar se a Branch Foi Criada

Acesse: https://github.com/GabrielF13/ReactPortifolio/branches

Você deve ver:

```
Branches:
  ✅ main
  ✅ production    ← Esta branch deve existir!
```

Se a branch `production` não aparecer, volte para Etapa 1.

---

### ✅ ETAPA 3: Configurar na Hostinger

#### 3.1 - Acessar o Git Deploy

```
1. Faça login em: https://hpanel.hostinger.com
2. Clique em: "Hospedagem"
3. Selecione seu domínio
4. No menu lateral: "Avançado" → "Git"
```

#### 3.2 - Configurar o Deploy

Na tela de Git, você verá um formulário. Preencha assim:

```
┌─────────────────────────────────────────────┐
│  Configuração de Deploy                     │
├─────────────────────────────────────────────┤
│                                             │
│  Repository URL:                            │
│  ┌─────────────────────────────────────┐   │
│  │ https://github.com/GabrielF13/      │   │
│  │ ReactPortifolio.git                 │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Branch:                                    │
│  ┌─────────────────────────────────────┐   │
│  │ production    ← IMPORTANTE!         │   │
│  └─────────────────────────────────────┘   │
│  ⚠️  NÃO use 'main'!                        │
│                                             │
│  Deploy Path:                               │
│  ┌─────────────────────────────────────┐   │
│  │ /public_html                        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│       [ Implantar / Deploy ]                │
│                                             │
└─────────────────────────────────────────────┘
```

**⚠️ ATENÇÃO:** A parte mais importante é usar **`production`** na branch, NÃO `main`!

#### 3.3 - Clicar em "Implantar"

Clique no botão "Implantar" ou "Deploy".

Você verá logs assim:

```
✅ Deployment start
✅ Repository https://github.com/GabrielF13/ReactPortifolio.git
✅ Checking project directory is empty
✅ Cloning repository...
✅ Checking out branch production
✅ Copying files...
✅ Deployment end
```

---

### ✅ ETAPA 4: Testar o Site

Aguarde 1-2 minutos e acesse:

```
✅ https://seudominio.com
✅ https://seudominio.com/blog
✅ https://seudominio.com/blog/1
```

Se funcionar, **parabéns!** 🎉

---

## 🔄 Para Futuras Atualizações

### Método Automático (Recomendado)

Sempre que quiser atualizar o site:

```bash
# 1. Edite seus arquivos
vim src/pages/Blog/Blog.tsx

# 2. Commit e push
git add .
git commit -m "feat: adiciona novo post"
git push origin main

# 3. Aguarde 2-3 minutos
# GitHub Actions atualiza a branch production automaticamente

# 4. Na Hostinger, clique em "Implantar" novamente
# Ou configure webhook para deploy automático
```

### Método Manual (Alternativo)

```bash
# Execute o script
.\deploy-to-production.bat   # Windows
./deploy-to-production.sh    # Linux/Mac

# Depois clique em "Implantar" na Hostinger
```

---

## 🌐 Configurar Webhook (Opcional - Deploy 100% Automático)

Para que a Hostinger faça deploy automaticamente quando você fizer push:

### 1. Na Hostinger

Na tela de Git, procure por **"Webhook URL"** e copie.

Exemplo: `https://api.hostinger.com/webhook/abc123...`

### 2. No GitHub

1. Vá em: https://github.com/GabrielF13/ReactPortifolio/settings/hooks

2. Clique em **"Add webhook"**

3. Configure:
   ```
   Payload URL: [Cole a URL copiada da Hostinger]
   Content type: application/json
   Which events: Just the push event
   ```

4. Em **"Branches"**, selecione: `production`

5. Clique em **"Add webhook"**

### Resultado

Agora o fluxo completo é automático:

```
Você faz push → GitHub Actions faz build → 
Atualiza branch production → Webhook notifica Hostinger → 
Hostinger faz deploy → Site atualizado!
```

**Tudo automático!** 🚀

---

## ❌ Troubleshooting

### Problema 1: "nothing to commit, working tree clean"

**Você vê:**
```
Deployment start
Repository https://github.com/GabrielF13/ReactPortifolio.git
Checking project directory is empty
Project directory is git repository
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
Deployment end
```

**Causa:** Hostinger está usando branch `main` (código fonte) em vez de `production` (build)

**Solução:**
1. Verifique se a branch `production` existe no GitHub
2. Na Hostinger, **mude para branch `production`**
3. Tente implantar novamente

---

### Problema 2: Branch production não existe

**Solução:**

Execute o script:
```bash
.\deploy-to-production.bat   # Windows
./deploy-to-production.sh    # Linux/Mac
```

Ou aguarde o GitHub Actions criar (se já fez push).

---

### Problema 3: Site mostra erro 404

**Possíveis causas:**

1. **Deploy Path errado**
   - Verifique se é `/public_html`
   - Alguns planos usam `/domains/seudominio.com/public_html`

2. **.htaccess não foi copiado**
   - Verifique se existe `.htaccess` na branch production
   - O arquivo deve estar na raiz

3. **Cache do navegador**
   - Pressione `Ctrl + Shift + R` para recarregar

---

### Problema 4: Rotas do React não funcionam

**Causa:** `.htaccess` não está configurado

**Solução:**

Verifique se o arquivo `.htaccess` existe na branch production:

1. Vá em: https://github.com/GabrielF13/ReactPortifolio/tree/production
2. Deve ter um arquivo `.htaccess` na raiz
3. Se não tiver, execute o script de deploy novamente

---

## 📊 Estrutura das Branches

### Branch `main` (Desenvolvimento)
```
ReactPortifolio/
├── portifolio/
│   ├── src/              ← Código TypeScript
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── .github/
│   └── workflows/
└── README.md
```
**Uso:** Desenvolvimento, código fonte

---

### Branch `production` (Deploy)
```
ReactPortifolio/
├── index.html            ← HTML compilado
├── .htaccess            ← Config Apache
├── assets/
│   ├── index-abc.js     ← JS compilado
│   ├── index-abc.css    ← CSS compilado
│   └── images/
└── DEPLOY_INFO.txt
```
**Uso:** Deploy na Hostinger

---

## 📋 Checklist de Verificação

Antes de tentar deploy, verifique:

### No GitHub:
- [ ] Branch `production` existe
- [ ] Branch `production` tem arquivos buildados (index.html, assets/, etc)
- [ ] Arquivo `.htaccess` está presente na raiz

### Na Hostinger:
- [ ] Repository URL correto: `https://github.com/GabrielF13/ReactPortifolio.git`
- [ ] Branch configurada como: `production` (NÃO `main`)
- [ ] Deploy Path: `/public_html` (ou o correto para seu plano)

### Teste:
- [ ] Site carrega: `https://seudominio.com`
- [ ] Rota home funciona: `/`
- [ ] Rota blog funciona: `/blog`
- [ ] Post individual funciona: `/blog/1`

---

## 🎯 Resumo Visual

```
┌─────────────────────────────────────────┐
│  1. Criar branch production             │
│     (Script ou GitHub Actions)          │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  2. Verificar no GitHub                 │
│     Branch production existe?           │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  3. Configurar na Hostinger             │
│     - Repository URL                    │
│     - Branch: production                │
│     - Path: /public_html                │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  4. Clicar em "Implantar"               │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│  ✅ Site funcionando!                   │
└─────────────────────────────────────────┘
```

---

## 🎉 Pronto!

Seguindo estes passos, seu site estará no ar!

**Dúvidas?** Consulte:
- `SOLUCAO_RAPIDA.md` - Solução rápida
- `HOSTINGER_GIT_DEPLOY.md` - Documentação completa
- GitHub Actions logs - Ver erros de build

---

**Boa sorte com seu deploy!** 🚀

