# 🔔 Configurar Webhook - PASSO A PASSO RÁPIDO

## 📋 Sua URL do Webhook (já copiada):

```
https://webhooks.hostinger.com/deploy/69e374c14bc92d25e07906bc796893fb
```

---

## ✅ SIGA ESTES PASSOS:

### 1. Acesse a página de Webhooks do GitHub:

**URL:** https://github.com/GabrielF13/ReactPortifolio/settings/hooks

(Já abri no seu navegador!)

---

### 2. Clique no botão verde: **"Add webhook"**

---

### 3. Preencha o formulário exatamente assim:

#### **Payload URL:**
```
https://webhooks.hostinger.com/deploy/69e374c14bc92d25e07906bc796893fb
```

#### **Content type:**
- Selecione: `application/json`

#### **Secret:**
- Deixe em branco

#### **Which events would you like to trigger this webhook?**
- Selecione: ⚪ **Just the push event**

#### **Active:**
- ✅ Marque a caixa (deve estar marcada por padrão)

---

### 4. Clique em: **"Add webhook"**

---

### 5. Aguarde a confirmação:

Você verá uma mensagem verde: ✅ "Webhook successfully created"

---

## 🧪 TESTAR O WEBHOOK

Depois de criar, vamos testar se está funcionando:

### Teste 1: Verificar no GitHub

1. Na mesma página, você verá o webhook listado
2. Clique nele
3. Role até "Recent Deliveries"
4. Deve aparecer um ping test com status ✅ 200

### Teste 2: Fazer um push de teste

Vou fazer um push de teste para você agora!

---

## 🎯 Resultado Esperado

Após configurar, toda vez que você fizer push para `production`:

```
1. GitHub detecta o push
2. Envia notificação para Hostinger (webhook)
3. Hostinger faz deploy automaticamente
4. Site atualizado em ~30 segundos
```

---

## ⚡ CONFIGURAÇÃO VISUAL

```
┌─────────────────────────────────────────────┐
│  Add webhook                                │
├─────────────────────────────────────────────┤
│                                             │
│  Payload URL *                              │
│  ┌─────────────────────────────────────┐   │
│  │ https://webhooks.hostinger.com/     │   │
│  │ deploy/69e374c14bc92d25e07906bc...  │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Content type                               │
│  ┌─────────────────────────────────────┐   │
│  │ application/json            ▼       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Secret (optional)                          │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Which events would you like to trigger    │
│  this webhook?                              │
│                                             │
│  ⚪ Just the push event                     │
│  ○ Send me everything                       │
│  ○ Let me select individual events          │
│                                             │
│  ☑ Active                                   │
│  We will deliver event details when this   │
│  hook is triggered.                         │
│                                             │
│         [ Add webhook ]                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🚀 PRONTO!

Depois de configurar, me avise que eu faço um push de teste para verificar se está tudo funcionando!

---

**Configurou? Me avise!** ✅

