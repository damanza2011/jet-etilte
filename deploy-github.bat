@echo off
cd /d "D:\JET-ELITE"
echo === PREPARANDO REPOSITORIO GIT PARA DAMANZA2011 ===
git init -b main
git config user.name "damanza2011"
git config user.email "114182146+damanza2011@users.noreply.github.com"
git config credential.useHttpPath true
git config credential.username damanza2011
git remote remove origin >nul 2>&1
git remote add origin https://github.com/damanza2011/jet-elite.git
git add .
git commit -m "feat: definitive master fusion - Awwwards quiet luxury + 4 languages (ES/EN/FR/PT) + 4-step quote flow + FBO estimator + Bento Grid + ROI calculator + Range simulator + Empty Legs + FAQ + IA Jet Concierge"
echo === SUBIENDO A GITHUB (main) ===
git push -u origin main --force
echo === LISTO PARA IMPORTAR EN VERCEL ===
pause
