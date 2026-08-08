# 🎮 Jogos das Crianças

Catálogo central dos jogos feitos para as crianças. Serve dois propósitos:

1. **Portal** — [`index.html`](index.html) lista todos os jogos com filtro por tema.
2. **API estática** — [`catalogo.json`](catalogo.json) é a fonte única de verdade,
   pensada para ser consumida por outra ferramenta.

Portal publicado: **https://paulocrestan-png.github.io/jogos-kids/**
Catálogo: **https://paulocrestan-png.github.io/jogos-kids/catalogo.json**

## Consumindo o catálogo

```js
const { jogos } = await (await fetch(
  'https://paulocrestan-png.github.io/jogos-kids/catalogo.json'
)).json();

jogos
  .filter(j => j.tema === 'ben10')
  .forEach(j => console.log(j.nome, j.url));
```

### Campos de cada jogo

| Campo | Descrição |
|---|---|
| `id` | identificador estável (não muda entre versões) |
| `nome` / `subtitulo` | título e linha de apoio |
| `tema` | `ben10`, `dragonball`, `fantasia`, `infantil`, `pokemon`, `futebol` |
| `descricao` | resumo do que o jogo é |
| `url` | **link para abrir o jogo** |
| `caminho` | pasta dentro deste repo (só para os jogos hospedados aqui) |
| `hospedagem` | `local` (neste repo) ou `externa` (repo próprio) |
| `repo` | repositório de origem, quando externo |
| `controle` | `toque`, `teclado`, `WASD + mouse`… |
| `dispositivo` | `pc`, `tablet`, `celular` |
| `idade` | faixa etária sugerida |
| `orientacao` | `retrato`, `paisagem` ou `qualquer` |
| `offline` | `true` se roda sem internet depois de carregado |
| `destaque` | `true` para os principais |
| `cor` | cor do tema, em hex — útil para cards |
| `tags` | palavras-chave para busca |

## Jogos hospedados neste repo

| Pasta | Jogo | Controle |
|---|---|---|
| [`ben10-forca-alienigena/`](ben10-forca-alienigena/) | Ben 10 — Força Alienígena | teclado |
| [`ben10-power-trip/`](ben10-power-trip/) | Ben 10 — Power Trip (2.5D) | teclado |
| [`dragonball-craft/`](dragonball-craft/) | Dragon Ball Craft | teclado + mouse |
| [`dragonball-topdown/`](dragonball-topdown/) | Dragon Ball RPG Top-Down | WASD + mouse / joystick |

Cada um é um HTML único e autocontido — abre direto no navegador, sem build e sem servidor.

> `ben10-forca-alienigena` tenta carregar um `quatro_sheet.png` opcional. Se o arquivo
> não existir (é o caso hoje), o Quatro Braços usa a arte vetorial de fallback e o jogo
> roda normalmente.

## Jogos com repositório próprio

Ficam fora deste repo por terem pipeline de build ou arte pesada, mas estão no `catalogo.json`:

| Jogo | Link | Repo |
|---|---|---|
| Ben 10 — Força Alien (13 minijogos) | https://paulocrestan-png.github.io/ben10-jogos/ | `ben10-jogos` |
| VEYRA (RPG isométrico) | https://paulocrestan-png.github.io/veyra-tester/ | `veyra-tester` |
| Pokémon TCG | https://paulocrestan-png.github.io/pokemon-tcg/ | `pokemon-tcg` |
| Álbum Copa 2026 | https://paulocrestan-png.github.io/album-copa-2026/ | `album-copa-2026` |

## Adicionando um jogo novo

1. Crie a pasta com o `index.html` do jogo.
2. Adicione a entrada em `catalogo.json` (suba `versao` e ajuste `atualizado`).
3. Commit e push — o GitHub Pages publica sozinho.
