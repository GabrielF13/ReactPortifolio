# 🔔 Configuração de Webhook - Deploy Automático

## 🎯 O Que Isso Faz

Com o webhook configurado, o fluxo será 100% automático:

```
Você faz push → GitHub atualiza → 
Webhook notifica Hostinger → 
Hostinger faz deploy → Site atualizado!
```

**Tudo automático!** 🚀

---

## 📋 PASSO A PASSO

### ✅ ETAPA 1: Copiar URL do Webhook da Hostinger

1. Acesse: https://hpanel.hostinger.com
2. Vá em: **Hospedagem → Seu domínio → Avançado → Git**
3. Procure por: **"Implantação Automática"** ou **"Webhook URL"**
4. Copie a URL (algo como: `https://api.hostinger.com/webhook/abc123...`)

---

### ✅ ETAPA 2: Configurar Webhook no GitHub

#### Opção A: Manual (Interface Web)

1. **Acesse:** https://github.com/GabrielF13/ReactPortifolio/settings/hooks

2. **Clique em:** "Add webhook"

3. **Preencha o formulário:**

```
┌─────────────────────────────────────────────┐
│  Add Webhook                                │
├─────────────────────────────────────────────┤
│                                             │
│  Payload URL:                               │
│  ┌─────────────────────────────────────┐   │
│  │ [Cole a URL da Hostinger aqui]      │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Content type:                              │
│  ┌─────────────────────────────────────┐   │
│  │ application/json                    │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Secret: (deixe em branco)                  │
│                                             │
│  Which events would you like to trigger?   │
│  ○ Just the push event                      │
│  ○ Send me everything                       │
│  ● Let me select individual events          │
│                                             │
│  ☑ Pushes                                   │
│  ☐ Pull requests                            │
│  ☐ ...                                      │
│                                             │
│  ☑ Active                                   │
│                                             │
│       [ Add webhook ]                       │
│                                             │
└─────────────────────────────────────────────┘
```

4. **Clique em:** "Add webhook"

---

#### Opção B: Via GitHub CLI (Automático)

Se você tiver o GitHub CLI instalado, posso configurar automaticamente com este comando:

```bash
gh api repos/GabrielF13/ReactPortifolio/hooks \
  -X POST \
  -f name='web' \
  -f config[url]='[URL_DO_WEBHOOK_DA_HOSTINGER]' \
  -f config[content_type]='json' \
  -f events[]='push' \
  -f active=true
```

---

### ✅ ETAPA 3: Configurar Branch Específica (Opcional)

Se você quiser que o webhook só dispare para a branch `production`:

**Na Hostinger:**
- Certifique-se de que a branch configurada é: `production`

**No GitHub:**
- O webhook vai disparar em todos os pushes
- A Hostinger só vai fazer deploy se for na branch configurada (production)

---

### ✅ ETAPA 4: Testar o Webhook

Depois de configurar, vamos testar:

```bash
# Fazer uma pequena mudança
git checkout production
echo "Teste de webhook - $(date)" >> DEPLOY_INFO.txt
git add DEPLOY_INFO.txt
git commit -m "test: webhook deploy"
git push origin production
```

**O que deve acontecer:**
1. ✅ Push para production
2. ✅ GitHub envia notificação para Hostinger
3. ✅ Hostinger faz deploy automaticamente
4. ✅ Site atualizado em ~30 segundos

---

## 🔍 Verificar se Funcionou

### No GitHub:
1. Vá em: https://github.com/GabrielF13/ReactPortifolio/settings/hooks
2. Clique no webhook criado
3. Role até "Recent Deliveries"
4. Deve mostrar: ✅ Status 200 (sucesso)

### Na Hostinger:
1. Vá em: Git Deploy
2. Procure por "Deployment History" ou "Histórico"
3. Deve mostrar o deploy automático

---

## 🔄 Fluxo Completo Automatizado

### Para Desenvolvimento:

```bash
# 1. Trabalhe na branch main
git checkout main

# 2. Faça suas mudanças
vim src/components/NavBar/NavBar.tsx

# 3. Commit e push
git add .
git commit -m "feat: nova funcionalidade"
git push origin main

# 4. GitHub Actions faz build e atualiza production
# (aguarde 2-3 minutos)

# 5. Webhook dispara automaticamente
# 6. Hostinger faz deploy
# 7. Site atualizado! 🎉
```

**Você só precisa fazer push na main!** Todo o resto é automático.

---

## 🎯 Configuração Recomendada

### Workflow Ideal:

1. **Branch main:** Código fonte (desenvolvimento)
2. **GitHub Actions:** Build automático → atualiza production
3. **Branch production:** Código compilado (pronto para deploy)
4. **Webhook:** Notifica Hostinger quando production é atualizada
5. **Hostinger:** Deploy automático da branch production

### Vantagens:

- ✅ Zero intervenção manual
- ✅ Deploy em ~3-4 minutos após push
- ✅ Histórico completo no GitHub
- ✅ Rollback fácil (revert commit)
- ✅ CI/CD completo

---

## ⚠️ Importante

### Segurança:
- O webhook da Hostinger é único para seu projeto
- Não compartilhe a URL do webhook publicamente
- Se vazar, você pode regenerar na Hostinger

### Branches:
- Configure o webhook para disparar em **pushes**
- A Hostinger só fará deploy da branch configurada (production)
- Pushes em outras branches não afetarão o site

---

## 🐛 Troubleshooting

### Webhook não dispara:

1. **Verifique a URL:** Certifique-se de copiar corretamente
2. **Verifique eventos:** Deve estar marcado "Pushes"
3. **Verifique status:** Deve estar "Active"
4. **Veja logs:** GitHub → Settings → Webhooks → Recent Deliveries

### Deploy não acontece:

1. **Branch correta?** Hostinger deve estar configurada para `production`
2. **Webhook ativo?** Verifique na Hostinger se está habilitado
3. **Logs da Hostinger:** Veja o histórico de deploys

---

## 📊 Status Atual

Após configurar o webhook, você terá:

```
┌─────────────────────────────────────────┐
│  PIPELINE DE DEPLOY COMPLETO            │
├─────────────────────────────────────────┤
│                                         │
│  1. Código → main branch                │
│  2. Push → GitHub                       │
│  3. GitHub Actions → Build              │
│  4. Production branch → Atualizada      │
│  5. Webhook → Notifica Hostinger        │
│  6. Hostinger → Deploy automático       │
│  7. Site → Atualizado! ✅               │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🎉 Pronto!

Depois de configurar, você só precisa:

```bash
git add .
git commit -m "feat: minha mudança"
git push origin main
```

**E pronto!** O resto é automático. ☕

Aguarde 3-4 minutos e seu site estará atualizado!

---

**Precisa de ajuda?** Me avise a URL do webhook que eu configuro para você! 🚀

