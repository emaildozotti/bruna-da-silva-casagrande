# LP Bruna Casagrande

Repo standalone da landing page de Bruna Casagrande.

## Deploy
- Push em main dispara deploy automatico no Vercel
- URL producao: https://bruna-casagrande-lp.vercel.app

## Atualizacoes
Quando cliente enviar foto e video:
1. Substituir foto-hero.jpg e foto-about.jpg em public/
2. Atualizar iframe do video em VideoSection.tsx (src=)
3. git add . && git commit -m "feat: midias reais" && git push

## Stack
- React + Vite + TypeScript
- TailwindCSS v4
- Fontes: Spectral (display) + Jost (sans)