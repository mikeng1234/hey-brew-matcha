@echo off
echo Starting Hey Brew Matcha dev server...
start cmd /k "cd /d "%~dp0" && npm run dev"
timeout /t 3 /nobreak >nul
start chrome http://localhost:3000
