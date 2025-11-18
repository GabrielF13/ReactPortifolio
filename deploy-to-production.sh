#!/bin/bash

# Script para fazer deploy manual para a branch production
# Uso: ./deploy-to-production.sh

set -e

echo "🚀 Iniciando processo de deploy..."

# Verificar se estamos na branch main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Você não está na branch main!"
    echo "Branch atual: $CURRENT_BRANCH"
    read -p "Deseja continuar mesmo assim? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deploy cancelado"
        exit 1
    fi
fi

# Verificar se há mudanças não commitadas
if [[ -n $(git status -s) ]]; then
    echo "⚠️  Você tem mudanças não commitadas!"
    git status -s
    read -p "Deseja fazer commit antes de continuar? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Mensagem do commit: " COMMIT_MSG
        git add .
        git commit -m "$COMMIT_MSG"
        git push origin main
        echo "✅ Mudanças commitadas e enviadas"
    fi
fi

echo "📦 Instalando dependências..."
cd portifolio
npm ci

echo "🔨 Fazendo build do projeto..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Erro: pasta dist não foi criada!"
    exit 1
fi

echo "✅ Build concluído com sucesso!"

cd ..

echo "🔄 Preparando branch production..."

# Salvar branch atual
ORIGINAL_BRANCH=$(git branch --show-current)

# Verificar se branch production existe
if git show-ref --verify --quiet refs/heads/production; then
    echo "📌 Branch production já existe, atualizando..."
    git checkout production
else
    echo "📌 Criando branch production..."
    git checkout --orphan production
fi

echo "🧹 Limpando branch production..."
git rm -rf . 2>/dev/null || true
git clean -fxd

echo "📋 Copiando arquivos do build..."
cp -r portifolio/dist/* .

# Copiar .htaccess se existir
if [ -f "portifolio/dist/.htaccess" ]; then
    cp portifolio/dist/.htaccess .
    echo "✅ .htaccess copiado"
fi

# Criar arquivo de informação
cat > DEPLOY_INFO.txt << EOF
Deploy realizado em: $(date)
Branch de origem: $ORIGINAL_BRANCH
Commit: $(git rev-parse HEAD)
EOF

echo "📝 Commitando arquivos..."
git add -A

if git diff --staged --quiet; then
    echo "⚠️  Nenhuma mudança para commitar"
else
    git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"
    echo "✅ Commit realizado"
fi

echo "⬆️  Enviando para GitHub..."
git push -f origin production

echo "🔙 Voltando para branch $ORIGINAL_BRANCH..."
git checkout $ORIGINAL_BRANCH

echo ""
echo "╔════════════════════════════════════════════╗"
echo "║                                            ║"
echo "║     ✅ DEPLOY CONCLUÍDO COM SUCESSO!      ║"
echo "║                                            ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo "📌 Branch production atualizada no GitHub"
echo "🌐 Agora faça o deploy na Hostinger:"
echo ""
echo "   1. Acesse hPanel → Git → Deploy"
echo "   2. Configure:"
echo "      - Repository: https://github.com/GabrielF13/ReactPortifolio.git"
echo "      - Branch: production"
echo "      - Path: /public_html"
echo "   3. Clique em 'Implantar'"
echo ""
echo "🎉 Seu site será atualizado em alguns segundos!"

