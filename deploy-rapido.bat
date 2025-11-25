@echo off
REM Script rapido para deploy - atualiza branch production
REM O webhook da Hostinger fara o resto automaticamente!

echo.
echo ========================================
echo    DEPLOY RAPIDO - HOSTINGER
echo ========================================
echo.

echo [1/3] Mudando para branch production...
git checkout production
if errorlevel 1 (
    echo ERRO: Nao foi possivel mudar para branch production
    exit /b 1
)

echo [2/3] Limpando e copiando arquivos do build...
git rm -rf . 2>nul
Copy-Item -Path "portifolio\dist\*" -Destination "." -Recurse -Force

REM Criar .htaccess
echo ^<IfModule mod_rewrite.c^> > .htaccess
echo   RewriteEngine On >> .htaccess
echo   RewriteBase / >> .htaccess
echo   RewriteRule ^^index\.html$ - [L] >> .htaccess
echo   RewriteCond %%{REQUEST_FILENAME} !-f >> .htaccess
echo   RewriteCond %%{REQUEST_FILENAME} !-d >> .htaccess
echo   RewriteCond %%{REQUEST_FILENAME} !-l >> .htaccess
echo   RewriteRule . /index.html [L] >> .htaccess
echo ^</IfModule^> >> .htaccess

REM Criar info do deploy
echo Deploy realizado em: %date% %time% > DEPLOY_INFO.txt
echo Branch de origem: main >> DEPLOY_INFO.txt

echo [3/3] Commitando e enviando...
git add -A
git commit -m "Deploy: %date% %time%"
git push -f origin production

if errorlevel 1 (
    echo ERRO: Falha ao enviar para GitHub
    git checkout main
    exit /b 1
)

echo.
echo Voltando para branch main...
git checkout main

echo.
echo ========================================
echo    DEPLOY CONCLUIDO!
echo ========================================
echo.
echo O webhook vai disparar o deploy na Hostinger
echo Aguarde 30-60 segundos para o site atualizar
echo.
pause

