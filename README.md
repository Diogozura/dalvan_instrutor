# Site — Instrutor Dalvan

Site em HTML/CSS/JS puro (sem framework, sem build), pronto para o GitHub Pages. Duas páginas: a página principal (one-page) e uma página dedicada explicando como funciona o agendamento da prova no Detran.

## Arquivos

- `index.html` — página principal do site (hero, sobre, jornada, diferenciais, carro, pacotes, alunos, área de atendimento, FAQ).
- `prova.html` — página "Como Agendar a Prova no Detran", com o passo a passo oficial e links diretos para os canais do Detran-SP.
- `style.css` — todo o visual do site (cores, fontes, layout). Compartilhado pelas duas páginas.
- `script.js` — comportamento do site (menu mobile, FAQ, animações). Compartilhado pelas duas páginas.
- `img/` — imagens do site (troque pelas fotos reais quando tiver).
- `robots.txt` e `sitemap.xml` — arquivos de SEO, já apontando para `https://instrutordalvan.com.br/`.
- `llms.txt` — resumo do negócio em texto simples para IAs (ChatGPT, Perplexity, Gemini) entenderem e citarem o site corretamente (GEO).

## Como editar o conteúdo

Abra os arquivos em qualquer editor de texto (recomendo o [VS Code](https://code.visualstudio.com/), é gratuito). O `index.html` tem comentários em português marcando cada seção, por exemplo:

```html
<!-- =========================================================
     PACOTES / PREÇOS
     ========================================================= -->
```

### Trocar telefone/WhatsApp
Procure por `5511996729904` (Ctrl+F / Cmd+F) em `index.html` e `prova.html`, e troque pelo número correto no formato `55` + DDD + número, sem espaços ou traços.

### Adicionar Instagram (quando tiver)
O site está sem links de Instagram por enquanto (foi removido do rodapé, do botão de CTA final e do Schema.org). Quando tiver um perfil, adicione um link `https://www.instagram.com/SEU_USUARIO` no rodapé de `index.html` (seção "Contato") e no campo `"sameAs"` do bloco de dados estruturados (`Schema.org`) no `<head>` do `index.html`.

### Trocar os 3 pacotes
Vá até a seção `PACOTES / PREÇOS` em `index.html`. Cada pacote é um bloco `<div class="reveal" ...>` com um `<h3>` (nome), um parágrafo (descrição), um preço e uma lista `<ul>` de itens inclusos. Edite só o texto — sem mexer no restante do HTML. O pacote do meio (`Pacote Primeira Habilitação`) tem a classe extra `plan-featured`, que o destaca visualmente; mova essa classe para outro card se quiser destacar outro pacote.

### Trocar imagens
Substitua os arquivos dentro da pasta `img/` mantendo o **mesmo nome de arquivo** (`hero-instrutor.jpg`, `instrutor-perfil.jpg`, `carro-celta.jpg`, `nova-capa-compartilhamento.png`, `favicon.png`). As que estão lá agora são apenas placeholders — troque pelas fotos reais assim que tiver.

Tamanhos recomendados:
- `hero-instrutor.jpg`: retrato, proporção 4:5 (ex. 900x1100px)
- `instrutor-perfil.jpg`: retrato, proporção 4:5
- `carro-celta.jpg`: paisagem, proporção 4:3 (ex. 1000x750px)
- `nova-capa-compartilhamento.png`: 1200x630px (aparece quando o link é compartilhado no WhatsApp/Facebook)
- `favicon.png`: 64x64px (ícone da aba do navegador)

### Depoimentos de alunos
Na seção "Quem aprendeu com o Dalvan, recomenda" (`index.html`), troque o texto entre colchetes e "Nome do aluno" pelos depoimentos reais que você for recebendo. Recomendo usar depoimentos reais assim que possível — eles pesam muito mais do que os de exemplo.

### Cores e fontes do site
No topo do `style.css`, dentro do bloco `:root { ... }`, estão todas as cores em hexadecimal (`--terracota`, `--carvao`, `--creme`, etc.) usadas no site inteiro. Troque os valores ali para mudar a identidade visual de uma vez só, nas duas páginas. As fontes (Fraunces para títulos, Inter para o texto) vêm do Google Fonts pela primeira linha do arquivo.

### Editar a página "Como Agendar a Prova"
O `prova.html` explica, de forma honesta, que desde maio de 2026 o próprio aluno pode agendar o exame prático diretamente com o Detran-SP (sem depender de autoescola), e que as aulas práticas do instrutor Dalvan contam oficialmente para a carga horária por ele ser credenciado no Detran-SP (registro via Portal da SENATRAN). O curso e a prova teórica continuam exigindo autoescola (CFC) ou EAD credenciado — isso não mudou. Os links da seção "Canais oficiais" apontam para o site do Detran-SP e do Poupatempo — não altere essas URLs, pois são os canais oficiais do governo de SP. Valores de taxas e exigências (como o exame toxicológico) mudam com frequência; a página já deixa um aviso pedindo para o aluno confirmar no site oficial.

**Importante:** se o credenciamento do instrutor no Detran-SP expirar ou for suspenso em algum momento, atualize esses trechos removendo as menções a "aulas que contam oficialmente" — isso só é verdade enquanto o credenciamento estiver ativo.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público), por exemplo `instrutor-dalvan`.
2. Faça upload de todos os arquivos desta pasta (`index.html`, `prova.html`, `style.css`, `script.js`, pasta `img/`, `robots.txt`, `sitemap.xml`) para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou a branch principal) e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde 1–2 minutos. O GitHub vai te dar um link do tipo `https://SEU-USUARIO.github.io/instrutor-dalvan/`.

### Quando comprar um domínio próprio (ex. instrutordalvan.com.br)
Hoje o site usa o endereço gratuito do GitHub Pages (`https://instrutordalvan.com.br/`) em todas as tags de SEO. Se um dia comprar um domínio próprio:
1. Configure o DNS do domínio apontando para o GitHub Pages (o GitHub explica como em Settings → Pages → Custom domain).
2. No repositório, em Settings → Pages, digite seu domínio no campo "Custom domain".
3. Abra `index.html`, `prova.html`, `robots.txt`, `sitemap.xml` e `llms.txt`, e troque todas as ocorrências de `https://instrutordalvan.com.br/` pelo novo domínio (Ctrl+F / Cmd+F para achar todas).

## SEO e SEO local (GEO) já configurados

- Título, descrição e palavras-chave focadas em "instrutor de direção Cotia" e "primeira habilitação".
- Dados estruturados (Schema.org): `DrivingSchool` com endereço, telefone, área de atendimento (Cotia + bairros), horário de atendimento e catálogo de pacotes/preços; `FAQPage` com as perguntas frequentes; `HowTo` e `BreadcrumbList` na página `prova.html`.
- Tags de geolocalização (`geo.region`, `geo.placename`, `geo.position`).
- Tags Open Graph e Twitter Card completas (título, descrição, imagem com URL absoluta e dimensões 1200x630) — é isso que faz a imagem de capa aparecer ao compartilhar o link no WhatsApp.
- `llms.txt` na raiz do site, para IAs generativas (ChatGPT, Perplexity, Gemini) entenderem e citarem o negócio corretamente (GEO / Generative Engine Optimization).
- Seção de "Perguntas Frequentes" e a própria página `prova.html` (boas para aparecer em buscas por dúvidas específicas, como "como agendar prova detran").
- Seção com bairros de Cotia atendidos (reforça a relevância local nas buscas).
- Imagens com `width`/`height` e `loading="lazy"` (exceto a foto principal) para carregar mais rápido — velocidade também conta para o SEO.
- `sitemap.xml` já lista as duas páginas com o domínio correto.

### Se você trocar o link do repositório do GitHub Pages
Se renomear o repositório (hoje `dalvan_instrutor`) ou publicar em outra conta, o link muda e todas as URLs absolutas citadas acima (Open Graph, canonical, Schema.org, sitemap, robots.txt, llms.txt) precisam ser atualizadas para o novo endereço — senão a prévia de link no WhatsApp e os dados estruturados voltam a quebrar.

### Recomendações extras para divulgação e busca local em Cotia
- Crie um perfil no **Google Meu Negócio / Perfil da Empresa no Google** com o mesmo nome, telefone e cidade (Cotia) usados no site — isso pesa mais para aparecer no Google Maps/busca local do que qualquer tag do site.
- Use o mesmo número de telefone e nome "Instrutor Dalvan" em todos os lugares (site, futuras redes sociais, Google, grupos de WhatsApp/Facebook de bairro).
- Peça para alunos satisfeitos deixarem uma avaliação no Google e substitua os depoimentos de exemplo (marcados entre colchetes) pelos reais assim que possível — depoimentos falsos prejudicam a confiança e não devem ser publicados.
- Participe/poste em grupos locais de Cotia (Facebook, WhatsApp, Instagram quando tiver) mencionando bairros específicos (Granja Viana, Jardim Nomura, Rio Cotia, Atalaia) — reforça o sinal de relevância local que o Google e as IAs generativas usam.
- Ao divulgar, você pode linkar diretamente para `prova.html` para quem tiver dúvidas específicas sobre o exame do Detran (ex.: "veja como funciona o agendamento da prova: https://instrutordalvan.com.br/prova.html").

## Estrutura simples de propósito

Só arquivos estáticos (HTML, CSS, JS puro) — sem build, sem dependências além das fontes do Google Fonts. Basta subir os arquivos no GitHub Pages e o site está no ar. Qualquer editor de texto serve para futuras alterações.
