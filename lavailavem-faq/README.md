# FAQ — LavaiLavem Turismo

Página estática de Perguntas Frequentes sobre os passeios da LavaiLavem Turismo, com identidade visual baseada no mascote (tucano-de-bico-azul), SEO, GEO (otimização para buscadores de IA) e conteúdo alinhado ao Código de Defesa do Consumidor, à Lei Geral do Turismo e à LGPD.

## O que tem aqui

- **HTML puro + Tailwind CSS + JavaScript** — sem framework, sem build pesado. Todo o conteúdo do FAQ já vem renderizado no HTML (nada depende de JavaScript para aparecer), o que é importante tanto para SEO quanto para GEO.
- **Acordeão acessível** (`public/js/main.js`) com teclado, `aria-expanded` e respeito a `prefers-reduced-motion`.
- **Busca ao vivo** no campo de busca do topo, que filtra as perguntas sem recarregar a página.
- **Dados estruturados (JSON-LD)**: `TravelAgency`, `BreadcrumbList` e `FAQPage` — as mesmas perguntas e respostas do HTML, para aparecer em rich results do Google e ser citável por ferramentas de IA.
- **`robots.txt` e `llms.txt`** liberando rastreadores de busca tradicionais e de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended etc.).
- **Banner de cookies** simples (LGPD), com opção de aceitar tudo ou só os essenciais, guardando a escolha em `localStorage`.
- **Placa de sinalização** como navegação — os atalhos para cada categoria do FAQ têm o formato de seta, em referência à placa do mascote.

## Antes de publicar — troque os placeholders

Estes dados são fictícios e precisam ser substituídos pelos reais antes de colocar no ar:

| Onde | O quê |
|---|---|
| `public/index.html` (`<head>`, `og:image`, JSON-LD) | domínio real `www.lavailavemturismo.com.br` |
| Rodapé do `index.html` | número do **Cadastur**, telefone/WhatsApp, e-mail de contato e de privacidade |
| Botões "Falar no WhatsApp" | link `https://wa.me/55...` com o número real |
| `public/sitemap.xml` | URL final da página |

## Rodando localmente

Pré-requisito: Node.js 18+.

```bash
npm install
npm run build     # compila o Tailwind uma vez (public/css/output.css)
# ou, durante o desenvolvimento:
npm run watch      # recompila a cada alteração
```

Depois é só abrir `public/index.html` no navegador, ou servir a pasta `public/` com qualquer servidor estático (ex.: `npx serve public`).

## Publicando no GitHub + Vercel

1. **Crie o repositório no GitHub** e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "FAQ LavaiLavem Turismo"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/lavailavem-faq.git
   git push -u origin main
   ```
2. **Importe o repositório na Vercel**:
   - Acesse [vercel.com/new](https://vercel.com/new) e conecte sua conta do GitHub.
   - Selecione o repositório `lavailavem-faq`.
   - A Vercel detecta o `vercel.json` automaticamente:
     - Build Command: `npm run build`
     - Output Directory: `public`
   - Clique em **Deploy**.
3. **Domínio próprio (opcional)**: em *Settings → Domains*, adicione `lavailavemturismo.com.br` (ou o domínio da empresa) e siga as instruções de DNS da Vercel.
4. Depois disso, todo `git push` na branch `main` gera um novo deploy automaticamente.

## Estrutura de pastas

```
lavailavem-faq/
├── public/                 # tudo que vira o site (output directory da Vercel)
│   ├── index.html
│   ├── css/output.css      # gerado pelo build (não editar direto)
│   ├── js/main.js
│   ├── assets/
│   │   ├── mascot-tucano.webp
│   │   └── favicon.svg
│   ├── robots.txt
│   ├── llms.txt
│   └── sitemap.xml
├── src/input.css           # fonte do Tailwind (editar aqui)
├── tailwind.config.js      # paleta de cores, tipografia
├── vercel.json
├── package.json
└── README.md
```

## Observação legal

O conteúdo jurídico do FAQ (direito de arrependimento, multas de cancelamento, LGPD etc.) foi escrito com base na legislação vigente para fins informativos. Ele não substitui um contrato de prestação de serviços revisado por um advogado — recomenda-se validar os textos finais com a assessoria jurídica da LavaiLavem antes da publicação.
