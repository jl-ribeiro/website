<p align="center">
  <a href="[coloque seu domínio aqui]" rel="noopener">
    <img width=150px height=150px src="https://cdn-icons-png.flaticon.com/512/2344/2344721.png" alt="Portfolio website">
  </a>
</p>

### <p align="center">Jair Ribeiro's Portfolio Website</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()  
[![Build and Deploy](https://github.com/jl-ribeiro/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/jl-ribeiro/website/actions/workflows/deploy.yml)  
[![GitHub Issues](https://img.shields.io/github/issues/jl-ribeiro/website.svg)](https://github.com/jl-ribeiro/website/issues)  
![Último Commit](https://img.shields.io/github/last-commit/jl-ribeiro/website)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## <p align="center">Link para o acesso ao site em produção: <a href="https://jairribeiro.dev/">https://jairribeiro.dev/</a></p>

<p align="center"> 
    Este repositório contém o código-fonte do meu portfólio pessoal de engenharia de dados.  
    <br>  
    O site é uma landing page moderna e de alta performance, construída com Astro e Tailwind CSS, e implantada automaticamente via GitHub Actions.
</p>

## 📝 Tabela de Conteúdos

- [Sobre o Projeto](#about)
- [Começando](#getting_started)
- [Deploy](#deployment)
- [Segurança](#security)
- [Analytics](#analytics)
- [Tecnologias Utilizadas](#built_using)
- [Autor](#authors)

## 🧐 Sobre o Projeto <a name = "about"></a>

Este projeto foi criado com o objetivo de ser um hub central para meus projetos, competências e informações de contato.  
A escolha por construir o site do zero com **Astro** foi deliberada para garantir máxima performance, excelente SEO e uma experiência de desenvolvimento moderna.

O site é totalmente estático, o que o torna extremamente rápido e seguro.  
Todo o processo de build e deploy é automatizado através de um pipeline de CI/CD, garantindo que qualquer atualização no código seja publicada em produção de forma rápida e confiável.

## 🏁 Começando <a name = "getting_started"></a>

Estas instruções permitirão que você obtenha uma cópia do projeto e a execute em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Você precisará do **Node.js** e do **npm** instalados em sua máquina.  
Recomendo usar o `nvm` (Node Version Manager) para gerenciar as versões do Node.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
### Instalar a versão LTS do Node.js
```bash
nvm install --lts
```

# Instalação

Clone o repositório:
```bash
git clone https://github.com/jl-ribeiro/website.git
```

Navegue até a pasta do projeto:
```bash
cd website
```

Instale as dependências do projeto:
```bash
npm install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Após executar o último comando, o site estará disponível em http://localhost:4321 e será atualizado automaticamente sempre que você salvar uma alteração nos arquivos.

🚀 Automação e Deploy <a name = "deployment"></a>

O processo de publicação do site é 100% automatizado usando GitHub Actions e a integração Git da Hostinger, uma abordagem conhecida como Git-based deployment.

Fluxo:

Um git push é feito na branch master (ou main).

O workflow do GitHub Actions, definido em [deploy.yml](.github/workflows/deploy.yml), é acionado.

O runner executa os seguintes passos:

Baixa o código-fonte.

Instala as dependências com `npm install`.

Gera o site estático otimizado em `dist/` com `npm run build`.

Usa a ação `peaceiris/actions-gh-pages` para fazer um force push do conteúdo de `dist/` para a branch `deploy`. Essa branch passa a conter apenas os arquivos estáticos do site, mantendo um histórico limpo de cada build que foi gerado.

A integração Git configurada na Hostinger detecta a atualização na branch `deploy` e automaticamente "puxa" os arquivos para o diretório `public_html`, publicando o site ao vivo.

Este fluxo garante que o ambiente de produção do site seja sempre um espelho exato da branch de deploy, tornando o processo robusto, rastreável e à prova de falhas manuais.

## 🔒 Segurança <a name = "security"></a>

O site é estático (sem backend nem formulários que enviem dados a servidor), o que reduz superfície de ataque. Boas práticas aplicadas:

- **Links externos** que abrem em nova aba (`target="_blank"`) usam `rel="noopener noreferrer"` para evitar tab-nabbing.
- **CI/CD** usa apenas `GITHUB_TOKEN` (secret padrão do GitHub) para publicar na branch `deploy`; não há secrets de aplicação no código.
- **Conteúdo** é gerado em build a partir de dados em `src/data` e `src/i18n`; não há entrada de usuário que seja refletida no HTML (sem risco de XSS por conteúdo dinâmico).
- **Headers de segurança** (CSP, HSTS, etc.): não são configurados no código; se o host (ex.: Hostinger) permitir, vale configurá-los no servidor para reforçar a segurança.

## 📊 Analytics <a name = "analytics"></a>

Para rastrear visitas e eventos quando o site estiver em produção, consulte **[docs/ANALYTICS.md](docs/ANALYTICS.md)**. O guia cobre integração com Google Analytics 4 ou Plausible, variáveis de ambiente e sugestões de eventos úteis para o portfólio.

⛏️ Tecnologias Utilizadas <a name = "built_using"></a>

Astro - Framework para Sites Estáticos

Tailwind CSS - Framework CSS

Node.js - Ambiente de Execução

GitHub Actions - Automação de CI/CD

✍️ Autor<a name = "authors"></a>:
@jl-ribeiro