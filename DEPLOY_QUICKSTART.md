# 🚀 Deploy Rápido - Hostinger

## Checklist de Configuração

### ✅ 1. Obter Credenciais FTP da Hostinger
- [ ] Acessar painel Hostinger (hpanel.hostinger.com)
- [ ] Ir em Hospedagem → Arquivos → Contas FTP
- [ ] Anotar:
  - Servidor FTP: `ftp.seudominio.com`
  - Usuário FTP: `seu_usuario`
  - Senha FTP: `sua_senha`
  - Diretório: `public_html/` (geralmente)

### ✅ 2. Configurar Secrets no GitHub
1. Ir para: **Repositório → Settings → Secrets and variables → Actions**
2. Adicionar 3 secrets:

| Nome | Valor |
|------|-------|
| `FTP_SERVER` | `ftp.seudominio.com` |
| `FTP_USERNAME` | `seu_usuario_ftp` |
| `FTP_PASSWORD` | `sua_senha_ftp` |

### ✅ 3. Verificar Arquivos
- [ ] `.github/workflows/deploy.yml` existe ✅
- [ ] `portifolio/public/.htaccess` existe ✅
- [ ] Branch principal é `main` (ou ajustar no deploy.yml)

### ✅ 4. Fazer Deploy
```bash
git add .
git commit -m "chore: configura deploy automático"
git push origin main
```

### ✅ 5. Monitorar
- Ir para: **Repositório → Actions**
- Ver progresso do deploy
- Aguardar conclusão (2-5 min)

### ✅ 6. Testar
- Acessar seu domínio
- Testar rotas:
  - `/` → Home ✅
  - `/blog` → Blog ✅
  - `/blog/1` → Post ✅

## 🔧 Ajustes Comuns

### Se o diretório não é `public_html/`
Editar `.github/workflows/deploy.yml` linha 35:
```yaml
server-dir: ./seu_diretorio/
```

### Se a branch não é `main`
Editar `.github/workflows/deploy.yml` linha 5:
```yaml
branches:
  - master  # ou sua branch
```

### Se está em subpasta
Editar `portifolio/vite.config.ts`:
```typescript
base: '/subpasta/',
```

## ❌ Problemas Comuns

| Problema | Solução |
|----------|---------|
| Erro de autenticação FTP | Verificar secrets no GitHub |
| Site não carrega | Verificar `server-dir` no deploy.yml |
| Rotas não funcionam | Verificar se `.htaccess` foi enviado |
| Build falha | Testar `npm run build` localmente |

## 📞 Suporte

- **GitHub Actions**: Ver logs em Actions → Workflow com erro
- **Hostinger**: Suporte via chat no painel
- **Documentação completa**: Ver `DEPLOY_SETUP.md`

---

**Pronto!** 🎉 Agora todo push para `main` faz deploy automático!

