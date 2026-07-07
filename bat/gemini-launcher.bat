@echo off
:: Gemini CLI Launcher for Windows
:: This script launches the Gemini CLI in the current directory or a specified directory.

setlocal

:: Check if gemini-cli is installed
where gemini >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Gemini CLI is not installed or not in PATH.
    echo Please install it using: npm install -g @google/gemini-cli
    pause
    exit /b 1
)

:: If a directory is passed as an argument (e.g., via SendTo), change to it
if not "%~1"=="" (
    if exist "%~1\" (
        cd /d "%~1"
    )
)

echo Starting Gemini CLI in: %cd%
echo.

:: Launch gemini
call gemini

:: Keep the window open if gemini exits (optional, but helpful for errors)
if %errorlevel% neq 0 (
    echo.
    echo [INFO] Gemini CLI exited with code %errorlevel%.
    pause
)
