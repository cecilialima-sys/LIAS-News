# Deployment do Lias News na Vercel

URL de produção configurada no código:

```text
https://liasnews.vercel.app
```

## Ajustes obrigatórios no painel da Vercel

1. Abra o projeto na Vercel.
2. Acesse `Settings`.
3. Acesse `General`.
4. Mude o nome do projeto para `liasnews`, se o nome estiver disponível.
5. Acesse `Settings > Domains`.
6. Defina `liasnews.vercel.app` como domínio principal.
7. Faça um novo deployment de produção.
8. Desative a proteção de acesso do ambiente de produção, caso esteja ativada.

## Observação sobre acesso público

O deployment informado anteriormente redireciona visitantes para o SSO da Vercel. Isso indica proteção de acesso ativa fora do código do site. A página pública de notícias só ficará acessível para visitantes comuns depois que essa proteção for desativada no painel da Vercel.

## Rotas principais

- `/`
- `/ai-news`
- `/ai-health`
- `/noticias/[slug]`

As rotas antigas em `/noticia/[id]` foram mantidas como compatibilidade para levar o visitante à rota canônica da notícia.
