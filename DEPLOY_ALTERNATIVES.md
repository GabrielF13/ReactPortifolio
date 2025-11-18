# 🔄 Alternativas de Deploy

Além do deploy automático via GitHub Actions + FTP, existem outras opções para fazer deploy do seu portfólio na Hostinger.

## 📋 Opções de Deploy

### 1. ✅ GitHub Actions + FTP (Configurado)
**Status**: ✅ Implementado

**Vantagens:**
- ✅ Totalmente automático
- ✅ Deploy a cada push
- ✅ Histórico de deploys
- ✅ Rollback fácil
- ✅ Logs detalhados

**Desvantagens:**
- ❌ FTP pode ser lento
- ❌ Requer configuração de secrets

**Uso:**
```bash
git push origin main
# Deploy automático!
```

---

### 2. 🔧 Deploy Manual via FTP

**Quando usar:** Para testes rápidos ou correções urgentes

**Ferramentas:**
- **FileZilla** (Windows/Mac/Linux)
- **WinSCP** (Windows)
- **Cyberduck** (Mac)

**Passos:**
```bash
# 1. Build local
cd portifolio
npm run build

# 2. Conectar via FTP
# Servidor: ftp.seudominio.com
# Usuário: seu_usuario
# Senha: sua_senha

# 3. Enviar pasta dist/ para public_html/
```

---

### 3. 🌐 Git Deploy (se Hostinger suportar)

Algumas contas Hostinger suportam deploy via Git.

**Verificar suporte:**
1. Painel Hostinger → Avançado → Git
2. Se disponível, configure:

```bash
# No servidor
cd public_html
git init
git remote add origin https://github.com/seu-usuario/seu-repo.git

# Para deploy
git pull origin main
npm install
npm run build
```

---

### 4. 🚀 GitHub Actions + SFTP

**Mais rápido que FTP**, se a Hostinger suportar SFTP (porta 22).

**Modificar `.github/workflows/deploy.yml`:**

```yaml
- name: 🚀 Deploy via SFTP
  uses: wlixcc/SFTP-Deploy-Action@v1.2.4
  with:
    server: ${{ secrets.FTP_SERVER }}
    username: ${{ secrets.FTP_USERNAME }}
    password: ${{ secrets.FTP_PASSWORD }}
    port: 22
    local_path: './portifolio/dist/*'
    remote_path: '/public_html'
    sftp_only: true
```

---

### 5. 🔄 Deploy via SSH

**Se você tem acesso SSH** à Hostinger.

**Criar script de deploy:**

```bash
#!/bin/bash
# deploy.sh

echo "🚀 Iniciando deploy..."

# Build local
cd portifolio
npm run build

# Deploy via rsync
rsync -avz --delete dist/ usuario@ftp.seudominio.com:/public_html/

echo "✅ Deploy concluído!"
```

**Uso:**
```bash
chmod +x deploy.sh
./deploy.sh
```

---

### 6. 📦 Deploy via CI/CD Alternativo

#### GitLab CI/CD
```yaml
# .gitlab-ci.yml
deploy:
  stage: deploy
  script:
    - cd portifolio
    - npm ci
    - npm run build
    - apt-get update -qq && apt-get install -y -qq lftp
    - lftp -c "set ftp:ssl-allow no; open -u $FTP_USERNAME,$FTP_PASSWORD $FTP_SERVER; mirror -Rev dist/ public_html/ --ignore-time --parallel=10"
  only:
    - main
```

#### Bitbucket Pipelines
```yaml
# bitbucket-pipelines.yml
pipelines:
  branches:
    main:
      - step:
          name: Deploy to Hostinger
          script:
            - cd portifolio
            - npm ci
            - npm run build
            - pipe: atlassian/ftp-deploy:0.3.7
              variables:
                USER: $FTP_USERNAME
                PASSWORD: $FTP_PASSWORD
                SERVER: $FTP_SERVER
                REMOTE_PATH: '/public_html'
                LOCAL_PATH: 'dist'
```

---

## 🎯 Recomendações

### Para Desenvolvimento
- Use **GitHub Actions + FTP** (já configurado)
- Deploy automático a cada push

### Para Produção
- Se disponível, use **SFTP** (mais rápido)
- Configure **branch protection** no GitHub
- Faça deploy apenas de `main` após review

### Para Testes
- Use **deploy manual** via FTP
- Ou crie uma branch `staging` com deploy separado

---

## 🔐 Segurança

### Boas Práticas:
1. ✅ Sempre use secrets para credenciais
2. ✅ Nunca commite senhas no código
3. ✅ Use SFTP quando possível (mais seguro)
4. ✅ Mantenha as dependências atualizadas
5. ✅ Configure `.htaccess` para segurança

### Secrets Necessários:
```
FTP_SERVER     → Servidor FTP
FTP_USERNAME   → Usuário FTP
FTP_PASSWORD   → Senha FTP
```

---

## 📊 Comparação de Métodos

| Método | Velocidade | Automação | Complexidade | Recomendado |
|--------|-----------|-----------|--------------|-------------|
| GitHub Actions + FTP | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Sim |
| GitHub Actions + SFTP | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Sim |
| FTP Manual | ⭐⭐ | ⭐ | ⭐⭐ | ❌ Não |
| SSH + rsync | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⚠️ Se disponível |
| Git Deploy | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⚠️ Se disponível |

---

## 🆘 Troubleshooting

### Deploy muito lento?
- Tente SFTP em vez de FTP
- Use `dangerous-clean-slate: false` (não apaga tudo)
- Considere usar rsync se tiver SSH

### Erros de conexão?
- Verifique firewall da Hostinger
- Confirme que FTP está habilitado
- Teste credenciais com FileZilla primeiro

### Arquivos não atualizam?
- Limpe cache do navegador (Ctrl+Shift+R)
- Verifique se os arquivos foram enviados
- Confirme o diretório correto

---

## 📚 Recursos

- [GitHub Actions Docs](https://docs.github.com/actions)
- [FTP Deploy Action](https://github.com/SamKirkland/FTP-Deploy-Action)
- [SFTP Deploy Action](https://github.com/wlixcc/SFTP-Deploy-Action)
- [Hostinger Tutorials](https://www.hostinger.com.br/tutoriais/)

---

**Escolha o método que melhor se adapta ao seu workflow!** 🚀

