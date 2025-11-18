# 🚀 Configuração de Deploy Automático para Hostinger

Este guia explica como configurar o deploy automático do seu portfólio React para a Hostinger usando GitHub Actions.

## 📋 Pré-requisitos

1. ✅ Conta na Hostinger com acesso FTP
2. ✅ Repositório no GitHub
3. ✅ Acesso às configurações do repositório

## 🔧 Passo 1: Obter Credenciais FTP da Hostinger

### 1.1 Acessar o Painel da Hostinger

1. Faça login no painel da Hostinger (https://hpanel.hostinger.com)
2. Vá para **"Hospedagem"** → Selecione seu domínio
3. No menu lateral, clique em **"Arquivos"** → **"Gerenciador de Arquivos"**

### 1.2 Obter Dados FTP

1. No painel, procure por **"Contas FTP"** ou **"FTP Accounts"**
2. Você precisará das seguintes informações:
   - **Servidor FTP**: geralmente é `ftp.seudominio.com` ou `ftpupload.net`
   - **Nome de usuário**: seu usuário FTP
   - **Senha**: sua senha FTP
   - **Porta**: geralmente é `21` (FTP) ou `22` (SFTP)

### 1.3 Verificar o Diretório de Deploy

- O diretório padrão da Hostinger geralmente é `public_html/`
- Verifique se este é o diretório correto para o seu site
- Se for diferente, você precisará ajustar no arquivo `deploy.yml`

## 🔐 Passo 2: Configurar Secrets no GitHub

### 2.1 Acessar as Configurações do Repositório

1. Vá para o seu repositório no GitHub
2. Clique em **"Settings"** (Configurações)
3. No menu lateral, clique em **"Secrets and variables"** → **"Actions"**

### 2.2 Adicionar os Secrets

Clique em **"New repository secret"** e adicione os seguintes secrets:

#### Secret 1: FTP_SERVER
```
Nome: FTP_SERVER
Valor: ftp.seudominio.com
```
(ou o servidor FTP fornecido pela Hostinger)

#### Secret 2: FTP_USERNAME
```
Nome: FTP_USERNAME
Valor: seu_usuario_ftp
```

#### Secret 3: FTP_PASSWORD
```
Nome: FTP_PASSWORD
Valor: sua_senha_ftp
```

### ⚠️ IMPORTANTE
- **NUNCA** commite essas credenciais diretamente no código
- Os secrets são criptografados e seguros no GitHub
- Apenas você e os workflows podem acessá-los

## 📝 Passo 3: Ajustar o Arquivo deploy.yml (se necessário)

O arquivo `.github/workflows/deploy.yml` já está configurado, mas você pode precisar ajustar:

### 3.1 Nome da Branch Principal

Se sua branch principal não é `main`, altere na linha 5:

```yaml
on:
  push:
    branches:
      - main  # Mude para 'master' se necessário
```

### 3.2 Diretório de Deploy

Se o diretório na Hostinger não é `public_html/`, altere na linha 35:

```yaml
server-dir: ./public_html/  # Mude para o diretório correto
```

Possíveis diretórios:
- `./public_html/` (padrão)
- `./domains/seudominio.com/public_html/`
- `./htdocs/`
- `./www/`

### 3.3 Versão do Node.js

Se precisar de uma versão específica do Node, altere na linha 18:

```yaml
node-version: '20'  # Mude para '18' ou '16' se necessário
```

## 🚀 Passo 4: Fazer o Deploy

### 4.1 Deploy Automático

Sempre que você fizer push para a branch principal:

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push origin main
```

O GitHub Actions irá:
1. ✅ Fazer checkout do código
2. ✅ Instalar as dependências
3. ✅ Fazer o build do projeto
4. ✅ Enviar os arquivos para a Hostinger via FTP

### 4.2 Deploy Manual

Você também pode executar o deploy manualmente:

1. Vá para o repositório no GitHub
2. Clique em **"Actions"**
3. Selecione **"Deploy to Hostinger"**
4. Clique em **"Run workflow"**
5. Selecione a branch e clique em **"Run workflow"**

## 📊 Passo 5: Monitorar o Deploy

### 5.1 Ver o Progresso

1. Vá para **"Actions"** no seu repositório
2. Clique no workflow em execução
3. Você verá cada etapa sendo executada em tempo real

### 5.2 Verificar Erros

Se houver erros:
- Clique no workflow com erro
- Expanda a etapa que falhou
- Leia a mensagem de erro
- Corrija e faça push novamente

### Erros Comuns:

#### ❌ Erro de Autenticação FTP
```
Error: Login authentication failed
```
**Solução**: Verifique se as credenciais FTP estão corretas nos secrets

#### ❌ Erro de Diretório
```
Error: Directory not found
```
**Solução**: Verifique o `server-dir` no arquivo `deploy.yml`

#### ❌ Erro de Build
```
Error: Build failed
```
**Solução**: Teste o build localmente com `npm run build`

## 🔄 Passo 6: Configurar o Vite para Produção

### 6.1 Verificar Base URL

Se seu site não está na raiz do domínio, ajuste o `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/',  // ou '/subpasta/' se estiver em uma subpasta
  plugins: [react()],
  // ... resto da configuração
})
```

### 6.2 Configurar Router Base

Se usar subpasta, ajuste o `App.tsx`:

```typescript
<Router basename="/subpasta">
  {/* ... */}
</Router>
```

## 🌐 Passo 7: Configurar o .htaccess (Importante para React Router)

Crie um arquivo `.htaccess` na raiz do projeto para suportar rotas do React Router:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Habilitar compressão GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

Adicione este arquivo ao projeto:

```bash
# Criar o arquivo
touch portifolio/public/.htaccess

# Copiar o conteúdo acima para o arquivo
```

O Vite copiará automaticamente este arquivo para a pasta `dist/` durante o build.

## ✅ Passo 8: Testar o Deploy

1. Faça um commit e push:
   ```bash
   git add .
   git commit -m "chore: configura deploy automático"
   git push origin main
   ```

2. Aguarde o workflow terminar (2-5 minutos)

3. Acesse seu site na Hostinger

4. Teste todas as rotas:
   - `/` - Home
   - `/blog` - Blog
   - `/blog/1` - Post individual

## 🔍 Troubleshooting

### Problema: Site não carrega

**Possíveis causas:**
1. Arquivos não foram enviados para o diretório correto
2. Permissões de arquivo incorretas
3. .htaccess não está funcionando

**Soluções:**
1. Verifique o `server-dir` no `deploy.yml`
2. Use o gerenciador de arquivos da Hostinger para verificar se os arquivos estão lá
3. Verifique se o módulo `mod_rewrite` está habilitado

### Problema: Rotas do React não funcionam

**Causa:** .htaccess não está configurado ou mod_rewrite desabilitado

**Solução:**
1. Adicione o arquivo `.htaccess` conforme o Passo 7
2. Entre em contato com o suporte da Hostinger para habilitar mod_rewrite

### Problema: Deploy demora muito

**Causa:** Muitos arquivos ou conexão lenta

**Solução:**
1. O FTP pode ser lento para muitos arquivos pequenos
2. Considere usar SFTP (porta 22) se disponível
3. Use `dangerous-clean-slate: true` com cuidado (apaga tudo antes)

## 📚 Recursos Adicionais

- [Documentação GitHub Actions](https://docs.github.com/en/actions)
- [Documentação FTP Deploy Action](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Suporte Hostinger](https://www.hostinger.com.br/tutoriais/)
- [Documentação Vite](https://vitejs.dev/guide/)

## 🎉 Conclusão

Agora você tem um pipeline de deploy totalmente automatizado! Toda vez que fizer push para a branch principal, seu site será automaticamente atualizado na Hostinger.

**Workflow:**
1. Desenvolva localmente
2. Commit e push para o GitHub
3. GitHub Actions faz build e deploy automaticamente
4. Site atualizado na Hostinger! 🚀

---

**Dúvidas?** Verifique os logs no GitHub Actions ou entre em contato com o suporte da Hostinger.

