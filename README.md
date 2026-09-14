# Site — Instrutor Dalvan

Site em HTML/CSS/JS puro (sem framework, sem build), pronto para o GitHub Pages. Duas páginas: a página principal (one-page) e uma página dedicada explicando como funciona o agendamento da prova no Detran.

## Arquivos

- `index.html` — página principal do site (hero, sobre, jornada, diferenciais, carro, pacotes, alunos, área de atendimento, FAQ).
- `prova.html` — página "Como Agendar a Prova no Detran", com o passo a passo oficial e links diretos para os canais do Detran-SP.
- `style.css` — todo o visual do site (cores, fontes, layout). Compartilhado pelas duas páginas.
- `script.js` — comportamento do site (menu mobile, FAQ, animações). Compartilhado pelas duas páginas.
- `img/` — imagens do site (troque pelas fotos reais quando tiver).
- `robots.txt` e `sitemap.xml` — arquivos de SEO. Troque `SEU-DOMINIO-AQUI.com.br` pelo seu domínio quando comprar.

## Como editar o conteúdo

Abra os arquivos em qualquer editor de texto (recomendo o [VS Code](https://code.visualstudio.com/), é gratuito). O `index.html` tem comentários em português marcando cada seção, por exemplo:

```html
<!-- =========================================================
     PACOTES / PREÇOS
     ========================================================= -->
```

### Trocar telefone/WhatsApp
Procure por `5511996729904` (Ctrl+F / Cmd+F) em `index.html` e `prova.html`, e troque pelo número correto no formato `55` + DDD + número, sem espaços ou traços.

### Trocar Instagram
Procure por `SEU_INSTAGRAM_AQUI` e troque pelo seu usuário do Instagram.

### Trocar os 3 pacotes
Vá até a seção `PACOTES / PREÇOS` em `index.html`. Cada pacote é um bloco `<div class="reveal" ...>` com um `<h3>` (nome), um parágrafo (descrição), um preço e uma lista `<ul>` de itens inclusos. Edite só o texto — sem mexer no restante do HTML. O pacote do meio (`Pacote Primeira Habilitação`) tem a classe extra `plan-featured`, que o destaca visualmente; mova essa classe para outro card se quiser destacar outro pacote.

### Trocar imagens
Substitua os arquivos dentro da pasta `img/` mantendo o **mesmo nome de arquivo** (`hero-instrutor.jpg`, `instrutor-perfil.jpg`, `carro-celta.jpg`, `capa-compartilhamento.jpg`, `favicon.png`). As que estão lá agora são apenas placeholders — troque pelas fotos reais assim que tiver.

Tamanhos recomendados:
- `hero-instrutor.jpg`: retrato, proporção 4:5 (ex. 900x1100px)
- `instrutor-perfil.jpg`: retrato, proporção 4:5
- `carro-celta.jpg`: paisagem, proporção 4:3 (ex. 1000x750px)
- `capa-compartilhamento.jpg`: 1200x630px (aparece quando o link é compartilhado no WhatsApp/Facebook)
- `favicon.png`: 64x64px (ícone da aba do navegador)

### Depoimentos de alunos
Na seção "Quem aprendeu com o Dalvan, recomenda" (`index.html`), troque o texto entre colchetes e "Nome do aluno" pelos depoimentos reais que você for recebendo. Recomendo usar depoimentos reais assim que possível — eles pesam muito mais do que os de exemplo.

### Cores e fontes do site
No topo do `style.css`, dentro do bloco `:root { ... }`, estão todas as cores em hexadecimal (`--terracota`, `--carvao`, `--creme`, etc.) usadas no site inteiro. Troque os valores ali para mudar a identidade visual de uma vez só, nas duas páginas. As fontes (Fraunces para títulos, Inter para o texto) vêm do Google Fonts pela primeira linha do arquivo.

### Editar a página "Como Agendar a Prova"
O `prova.html` explica, de forma honesta, que quem agenda oficialmente o exame prático é a autoescola (CFC), e que você acompanha o aluno até o Detran no dia da prova. Os links da seção "Canais oficiais" apontam para o site do Detran-SP e do Poupatempo — não altere essas URLs, pois são os canais oficiais do governo de SP. Valores de taxas e exigências (como o exame toxicológico) mudam com frequência; a página já deixa um aviso pedindo para o aluno confirmar no site oficial.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público), por exemplo `instrutor-dalvan`.
2. Faça upload de todos os arquivos desta pasta (`index.html`, `prova.html`, `style.css`, `script.js`, pasta `img/`, `robots.txt`, `sitemap.xml`) para a raiz do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em "Branch", selecione `main` (ou a branch principal) e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde 1–2 minutos. O GitHub vai te dar um link do tipo `https://SEU-USUARIO.github.io/instrutor-dalvan/`.

### Quando comprar o domínio (ex. instrutordalvan.com.br)
1. Configure o DNS do domínio apontando para o GitHub Pages (o GitHub explica como em Settings → Pages → Custom domain).
2. No repositório, em Settings → Pages, digite seu domínio no campo "Custom domain".
3. Volte no `index.html`, `prova.html`, `robots.txt` e `sitemap.xml` e troque `SEU-DOMINIO-AQUI.com.br` pelo domínio real.

## SEO e SEO local (GEO) já configurados

- Título, descrição e palavras-chave focadas em "instrutor de direção Cotia" e "primeira habilitação".
- Dados estruturados (Schema.org `DrivingSchool`) com endereço, telefone, área de atendimento e faixa de preço.
- Tags de geolocalização (`geo.region`, `geo.placename`, `geo.position`).
- Tags Open Graph para quando o link for compartilhado no WhatsApp/Instagram/Facebook.
- Seção de "Perguntas Frequentes" e a própria página `prova.html` (boas para aparecer em buscas por dúvidas específicas, como "como agendar prova detran").
- Seção com bairros de Cotia atendidos (reforça a relevância local nas buscas).
- `sitemap.xml` já lista as duas páginas.

### Recomendações extras para divulgação e busca local
- Crie um perfil no **Google Meu Negócio / Perfil da Empresa no Google** com o mesmo nome, telefone e cidade (Cotia) usados no site.
- Use o mesmo número de telefone e nome "Instrutor Dalvan" em todos os lugares (site, Instagram, Google).
- Peça para alunos satisfeitos deixarem uma avaliação no Google e substitua os depoimentos de exemplo pelos reais assim que possível.
- Poste no Instagram com a localização marcada como "Cotia, São Paulo" com frequência.
- Ao divulgar, você pode linkar diretamente para `prova.html` para quem tiver dúvidas específicas sobre o exame do Detran (ex.: "veja como funciona o agendamento da prova: seusite.com/prova.html").

## Estrutura simples de propósito

Só arquivos estáticos (HTML, CSS, JS puro) — sem build, sem dependências além das fontes do Google Fonts. Basta subir os arquivos no GitHub Pages e o site está no ar. Qualquer editor de texto serve para futuras alterações.
