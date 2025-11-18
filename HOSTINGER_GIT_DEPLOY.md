# 🚀 Deploy via Git da Hostinger

## 📋 Visão Geral

A Hostinger oferece deploy direto via Git, que é mais simples que FTP. Este guia mostra como configurar.

## 🎯 Duas Opções de Deploy

### Opção 1: Branch de Produção (Recomendado) ✅
### Opção 2: Deploy Manual

---

## ✅ OPÇÃO 1: Branch de Produção (Automático)

Esta é a **melhor opção** - totalmente automática!

### Como Funciona:

```
main branch (código fonte)
    ↓
GitHub Actions faz build
    ↓
production branch (arquivos buildados)
    ↓
Hostinger faz deploy automático
```

### Passo 1: Configurar GitHub Actions

✅ **Já configurado!** O arquivo `.github/workflows/build-and-commit.yml` foi criado.

Este workflow:
1. Detecta push na branch `main`
2. Faz build do projeto
3. Cria/atualiza branch `production` com os arquivos buildados
4. Hostinger detecta mudanças e faz deploy

### Passo 2: Fazer Push Inicial

```bash
# Fazer commit das mudanças
git add .
git commit -m "chore: configura deploy automático"
git push origin main
```

Aguarde 2-3 minutos para o GitHub Actions criar a branch `production`.

### Passo 3: Configurar na Hostinger

1. **Acesse o hPanel** (hpanel.hostinger.com)

2. **Vá em Hospedagem → Avançado → Git**

3. **Clique em "Implantar"** ou "Deploy"

4. **Configure:**
   ```
   Repository URL: https://github.com/GabrielF13/ReactPortifolio.git
   Branch: production  ← IMPORTANTE: use 'production', não 'main'
   Deploy Path: /public_html
   ```

5. **Clique em "Implantar"**

### Passo 4: Configurar Webhook (Opcional mas Recomendado)

Para deploy automático quando a branch `production` atualizar:

1. Na tela de Git da Hostinger, copie a **Webhook URL**

2. Vá no GitHub:
   - **Repositório → Settings → Webhooks → Add webhook**

3. Configure:
   ```
   Payload URL: [URL copiada da Hostinger]
   Content type: application/json
   Which events: Just the push event
   Branch: production
   ```

4. **Salve**

Agora o fluxo completo é automático! 🎉

---

## 🔧 OPÇÃO 2: Deploy Manual

Se preferir fazer deploy manual sem GitHub Actions.

### Passo 1: Build Local

```bash
cd portifolio
npm run build
```

### Passo 2: Criar Branch de Deploy

```bash
# Criar branch production
git checkout -b production

# Remover tudo exceto dist
git rm -rf .
git clean -fxd

# Copiar arquivos do build para raiz
cp -r dist/* .
cp dist/.htaccess .

# Commit
git add -A
git commit -m "Deploy production"

# Push
git push origin production
```

### Passo 3: Configurar na Hostinger

```
Repository URL: https://github.com/GabrielF13/ReactPortifolio.git
Branch: production
Deploy Path: /public_html
```

### Para Atualizar:

```bash
# Voltar para main
git checkout main

# Fazer suas mudanças
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# Build
cd portifolio
npm run build
cd ..

# Atualizar production
git checkout production
git rm -rf .
git clean -fxd
cp -r portifolio/dist/* .
cp portifolio/dist/.htaccess .
git add -A
git commit -m "Deploy: $(date)"
git push origin production
```

---

## 🎯 Comparação das Opções

| Aspecto | Opção 1 (Automático) | Opção 2 (Manual) |
|---------|---------------------|------------------|
| **Facilidade** | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **Velocidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Automação** | ✅ Total | ❌ Manual |
| **Erros** | ⭐⭐⭐⭐⭐ Menos | ⭐⭐ Mais |
| **Recomendado** | ✅ **SIM** | ⚠️ Só para testes |

---

## 📊 Fluxo Completo (Opção 1)

```
┌──────────────────────────────────────────────┐
│  1. Você faz mudanças no código              │
│     git push origin main                     │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  2. GitHub Actions detecta push              │
│     - Faz checkout                           │
│     - Instala dependências                   │
│     - Executa npm run build                  │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  3. GitHub Actions atualiza branch           │
│     production com arquivos buildados        │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  4. Webhook notifica Hostinger               │
│     (se configurado)                         │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  5. Hostinger faz pull da branch             │
│     production e atualiza o site             │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│  ✅ Site atualizado automaticamente!         │
└──────────────────────────────────────────────┘
```

---

## 🔍 Verificar Status

### No GitHub:

1. Vá em **Actions** → Veja se o workflow rodou com sucesso
2. Vá em **Branches** → Verifique se a branch `production` existe

### Na Hostinger:

1. **Git → Histórico de Deploy**
2. Veja os logs de deploy
3. Verifique a data/hora do último deploy

---

## ❌ Problemas Comuns

### 1. Branch production não existe

**Solução:**
```bash
# Fazer push para criar a branch
git push origin main

# Aguardar GitHub Actions criar a branch production
# Verificar em: GitHub → Actions
```

### 2. Hostinger não encontra arquivos

**Causa:** Configurou branch `main` em vez de `production`

**Solução:**
- Na Hostinger, mude para branch `production`
- A branch `main` tem código fonte, não arquivos buildados

### 3. Deploy não atualiza automaticamente

**Causa:** Webhook não configurado

**Solução:**
- Configure o webhook conforme Passo 4 da Opção 1
- Ou faça deploy manual na Hostinger após cada push

### 4. Erro "nothing to commit, working tree clean"

**Causa:** Hostinger está olhando branch `main` que não tem arquivos buildados

**Solução:**
```
Hostinger → Git → Configurações
Branch: production  ← Mudar para production
```

---

## 🎯 Checklist de Configuração

### GitHub:
- [ ] Workflow `.github/workflows/build-and-commit.yml` existe
- [ ] Push feito para branch `main`
- [ ] GitHub Actions executou com sucesso
- [ ] Branch `production` foi criada
- [ ] Webhook configurado (opcional)

### Hostinger:
- [ ] Git Deploy habilitado
- [ ] Repository URL configurado
- [ ] **Branch configurada como `production`** ⚠️
- [ ] Deploy Path: `/public_html`
- [ ] Deploy executado com sucesso

### Teste:
- [ ] Site acessível no domínio
- [ ] Rota `/` funciona
- [ ] Rota `/blog` funciona
- [ ] Rota `/blog/1` funciona

---

## 🔄 Workflow Diário

Com tudo configurado, seu workflow será:

```bash
# 1. Fazer mudanças
vim src/pages/Blog/Blog.tsx

# 2. Commit e push
git add .
git commit -m "feat: adiciona novo post"
git push origin main

# 3. Aguardar (2-3 minutos)
# GitHub Actions faz build → production branch → Hostinger deploy

# 4. Verificar site
# https://seudominio.com
```

**Simples assim!** 🎉

---

## 📞 Suporte

### GitHub Actions com erro?
- Vá em **Actions** → Clique no workflow com erro
- Leia os logs
- Geralmente é problema de build (teste `npm run build` localmente)

### Hostinger não faz deploy?
- Verifique se está usando branch `production`
- Verifique se a branch existe no GitHub
- Tente fazer deploy manual na Hostinger

### Site não atualiza?
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique data do último deploy na Hostinger
- Verifique se o webhook está funcionando

---

## 🎉 Conclusão

Com o Git Deploy da Hostinger + GitHub Actions, você tem:

✅ Deploy totalmente automático
✅ Build automático
✅ Sem necessidade de FTP
✅ Histórico de deploys
✅ Rollback fácil (reverter commit na branch production)
✅ Logs detalhados

**Muito mais simples que FTP!** 🚀

---

**Próximo passo:** Configure conforme a Opção 1 e faça seu primeiro deploy automático!

