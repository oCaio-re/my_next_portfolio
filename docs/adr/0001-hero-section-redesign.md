# 1. Redesign da Hero Section para Engenheiro de Software Full-Stack

* **Status:** Aceito
* **Data:** 2026-07-30

## Contexto e Problema

A Hero section inicial do portfólio utilizava uma abordagem simplificada e lúdica (título "Olá, sou Caio!", frase "Este é o meu portfólio pessoal" em pílulas brancas e uma ilustração 3D de um avatar sorridente `smiling-man.png`). Essa estética não transmitia a autoridade técnica, o profissionalismo nem a capacidade de engenharia de software necessárias para o público-alvo (recrutadores de tecnologia e clientes de soluções sob medida).

## Decisão

Optou-se por uma reformulação completa da Hero section ([Home.tsx](file:///home/cro/Projects/my_portfolio/app/%5Blang%5D/components/Home.tsx)):
1. **Posicionamento:** Foco claro como **Engenheiro de Software Full-Stack**, destacando capacidade de desenvolvimento web de alta performance (React, Next.js, TypeScript, Python/Django).
2. **Visual & Estética:** Substituição do avatar 3D por um card em **Glassmorphism ultralimpo** com a foto real profissional (`caio-profile-half.jpeg`), iluminação ambiente (Ambient Glow) em tons roxo (`#646DD2`), bege (`#C9AA71`) e azul (`#609BE3`), **sem pílulas flutuantes soltas**.
3. **Faixa de Tecnologias:** Inclusão de uma barra monocromática e minimalista na base da Hero para exibir as principais tecnologias (React, Next.js, TypeScript, Python, Tailwind, Node.js).
4. **Chamada de Ação (CTAs):** Botões duplos diretos: `Ver Projetos` e `Entrar em Contato`.

## Consequências

* **Positivas:** Estética sofisticada, limpa e madura; aumento significativo da credibilidade técnica à primeira vista; remoção de elementos "bofos"/poluídos.
* **Negativas / Riscos:** Exige manutenção contínua de alto padrão visual nas seções subsequentes do portfólio.
