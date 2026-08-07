# Context & Domain Glossary

## Core Value Proposition
- **Role / Title**: Engenheiro de Software Full-Stack (Software Engineer).
- **Target Audience**: Recrutadores de empresas de tecnologia, clientes de projetos web/software e parceiros comerciais.
- **Hero Objective**: Transmitir autoridade técnica, profissionalismo e capacidade de resolver problemas complexos com aplicações web modernas (React, Next.js, TypeScript, Python/Django).

## Systemic Design System Decisions
- **Global Theme**: Dark Mode elegante com suporte a Light Mode, iluminação ambiente (Ambient Glow) em tons roxo (`#646DD2`), bege (`#C9AA71`) e azul (`#609BE3`), e elementos em Glassmorphism (`backdrop-blur-xl bg-white/5 border border-white/15`).
- **Sizing & Proportions**: Escala compacta e refinada (~25% menor): containers `max-w-5xl` (1024px), títulos H2 em `text-3xl sm:text-4xl`, H1 em `text-4xl sm:text-5xl`, paddings de seção `py-12 sm:py-16`, botões compactos `px-6 py-3 text-sm/base`.
- **Project Showcase**: Carrossel interativo 3D estilo Apple Dock / Fish-Eye com alinhamento em arco "U" suave (`yOffset = -24px`), sombras ambientais e sequenciador de luz pisca-pisca nos ícones da Tech Stack (animação Chaser ritmada em 750ms da esquerda para a direita na cor oficial de cada tecnologia).
- **Section Headers**: Padrão uniforme com micro-badges em estilo técnico (`// NOME DA SEÇÃO`), títulos H2 imponentes com texto em gradiente de alto contraste e subtítulos informativos. Eliminação de banners roxos sólidos com fotos circulares.
- **Card Aesthetics**: Cards de projetos e serviços em vidro fosco (`bg-white/5 backdrop-blur-xl border border-white/15 hover:border-[#646DD2]`), com efeito hover glow, bordas finas e ícones vetoriais modernos em círculos com gradiente.
- **Hero Visual Element**: Foto profissional real em moldura Glassmorphism ultralimpa com brilho sutil (Ambient Glow) SEM pílulas flutuantes.
- **Tech Stack Representation**: Faixa de tecnologia monocromática e minimalista na base da Hero (React, Next.js, TypeScript, Python, Tailwind, Node).
- **Project Case Study Drawer**: Painel lateral expansível (Slide-over Drawer) em Glassmorphism que desliza da direita da tela ao acionar a exibição detalhada de um projeto no carrossel. Estruturado internamente por abas no topo: 1) Visão Geral (Overview), 2) Arquitetura & Engenharia (desafios técnicos, stack), 3) Galeria & Demonstração (screenshots/mídias em alta qualidade), e um rodapé fixo (Sticky Footer) com botões de ação (Deploy, GitHub, Contato).
- **Project Case Study Data & i18n**: Estrutura de dados nativa em JSON expandida dentro dos dicionários (`dictionaries/pt.json` e `dictionaries/en.json`) sob a chave `case_study`, integrada via helper TypeScript (`lib/projectsData.ts`), garantindo suporte bilíngue imediato sem parsing externo.
- **Project Drawer Trigger & Interaction**: Duplo gatilho ativado tanto pelo clique no botão CTA "Descubra Mais" quanto pelo clique direto no card/círculo central do carrossel 3D. Animação fluida via Framer Motion (`x: 100% -> 0`), suporte a fechamento por tecla `Esc` e clique no backdrop desfocado.
- **Active Project Catalog & Priority**: Sequência oficial prioritária no Carrossel 3D: 1) Stussi & Reis Advocacia, 2) Nery Tour, 3) All Tasty Caffe, 4) Voar Bem Viagens, 5) Lucas Alves Photography, 6) Jaqueline & Lucas Casamento, 7) Sogrape Wines Data Engine (Proprietário). Remoção total do projeto Hope Connections.
