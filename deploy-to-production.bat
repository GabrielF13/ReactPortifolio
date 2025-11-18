@echo off
REM Script para fazer deploy manual para a branch production (Windows)
REM Uso: deploy-to-production.bat

echo.
echo ========================================
echo    DEPLOY PARA PRODUCAO - HOSTINGER
echo ========================================
echo.

echo [1/8] Verificando branch atual...
git branch --show-current > temp_branch.txt
set /p CURRENT_BRANCH=<temp_branch.txt
del temp_branch.txt

if not "%CURRENT_BRANCH%"=="main" (
    echo AVISO: Voce nao esta na branch main!
    echo Branch atual: %CURRENT_BRANCH%
    set /p CONTINUE="Deseja continuar? (S/N): "
    if /i not "%CONTINUE%"=="S" (
        echo Deploy cancelado.
        exit /b 1
    )
)

echo [2/8] Verificando mudancas nao commitadas...
git status --short > temp_status.txt
for %%A in (temp_status.txt) do set SIZE=%%~zA
del temp_status.txt

if %SIZE% gtr 0 (
    echo AVISO: Voce tem mudancas nao commitadas!
    git status --short
    set /p COMMIT="Deseja fazer commit? (S/N): "
    if /i "%COMMIT%"=="S" (
        set /p COMMIT_MSG="Mensagem do commit: "
        git add .
        git commit -m "%COMMIT_MSG%"
        git push origin main
        echo Mudancas commitadas e enviadas!
    )
)

echo [3/8] Instalando dependencias...
cd portifolio
call npm ci
if errorlevel 1 (
    echo ERRO: Falha ao instalar dependencias!
    cd ..
    exit /b 1
)

echo [4/8] Fazendo build do projeto...
call npm run build
if errorlevel 1 (
    echo ERRO: Falha no build!
    cd ..
    exit /b 1
)

if not exist "dist" (
    echo ERRO: Pasta dist nao foi criada!
    cd ..
    exit /b 1
)

echo Build concluido com sucesso!
cd ..

echo [5/8] Preparando branch production...
git branch --show-current > temp_original.txt
set /p ORIGINAL_BRANCH=<temp_original.txt
del temp_original.txt

git rev-parse --verify production >nul 2>&1
if errorlevel 1 (
    echo Criando branch production...
    git checkout --orphan production
) else (
    echo Branch production ja existe, atualizando...
    git checkout production
)

echo [6/8] Limpando branch production...
git rm -rf . 2>nul
git clean -fxd

echo [7/8] Copiando arquivos do build...
xcopy /E /I /Y portifolio\dist\* .

if exist "portifolio\dist\.htaccess" (
    copy /Y portifolio\dist\.htaccess .
    echo .htaccess copiado!
)

echo Deploy realizado em: %date% %time% > DEPLOY_INFO.txt
echo Branch de origem: %ORIGINAL_BRANCH% >> DEPLOY_INFO.txt

echo [8/8] Commitando e enviando...
git add -A
git commit -m "Deploy: %date% %time%"
if errorlevel 1 (
    echo Nenhuma mudanca para commitar
) else (
    echo Commit realizado!
)

git push -f origin production
if errorlevel 1 (
    echo ERRO: Falha ao enviar para GitHub!
    git checkout %ORIGINAL_BRANCH%
    exit /b 1
)

echo Voltando para branch %ORIGINAL_BRANCH%...
git checkout %ORIGINAL_BRANCH%

echo.
echo ========================================
echo    DEPLOY CONCLUIDO COM SUCESSO!
echo ========================================
echo.
echo Branch production atualizada no GitHub
echo.
echo Proximos passos na Hostinger:
echo   1. Acesse hPanel -^> Git -^> Deploy
echo   2. Configure:
echo      - Repository: https://github.com/GabrielF13/ReactPortifolio.git
echo      - Branch: production
echo      - Path: /public_html
echo   3. Clique em 'Implantar'
echo.
echo Seu site sera atualizado em alguns segundos!
echo.
pause

