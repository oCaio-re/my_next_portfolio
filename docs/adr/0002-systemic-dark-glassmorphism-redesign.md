# 2. Redesign Sistêmico para Tema Dark Mode Glassmorphism & High-End Tech

* **Status:** Aceito
* **Data:** 2026-07-30

## Contexto e Problema

Anteriormente, o portfólio possuía inconsistências visuais entre as seções: banners roxos sólidos com imagens circulares de perfil repetidas (`bg-[#646DD2]`), bordas espessas brancas rígidas (`border-4 border-white`) e cores heterogêneas sem um sistema de design coeso. Isso quebrava a experiência do usuário ao navegar entre a Hero section moderna e as seções seguintes.

## Decisão

Extendemos o conceito visual da Hero section para 100% das seções do site ([About](file:///home/cro/Projects/my_portfolio/app/%5Blang%5D/components/About.tsx), [Projects](file:///home/cro/Projects/my_portfolio/app/%5Blang%5D/components/Projects.tsx), [Services](file:///home/cro/Projects/my_portfolio/app/%5Blang%5D/components/Services.tsx), [Contact](file:///home/cro/Projects/my_portfolio/app/%5Blang%5D/components/Contact.tsx), [DownloadCV](file:///home/cro/Projects/my_portfolio/app/%5Blang%5D/components/DownloadCV.tsx) e [Footer](file:///home/cro/Projects/my_portfolio/app/%5Blang%5D/components/Footer.tsx)):
1. **Padronização dos Títulos:** Eliminação dos banners roxos repetitivos e adoção de cabeçalhos uniformes com micro-badges em formato técnico (`// NOME DA SEÇÃO`) e títulos em gradiente de alto contraste.
2. **Cards Glassmorphic:** Substituição das bordas brancas espessas por cards em vidro fosco escuro (`bg-white/5 border border-white/15 backdrop-blur-xl hover:border-[#646DD2] hover:shadow-2xl hover:shadow-[#646DD2]/20`).
3. **Formulário & Interatividade:** Campos de input em tom escuro profundo (`bg-black/60`) com anéis de foco neon (`focus:border-[#609BE3]`) e seletores de serviço em pílula com iluminação gradiente ativa.

## Consequências

* **Positivas:** Harmonia visual fluida de ponta a ponta; sensação de produto digital sofisticado e profissional; excelente legibilidade e usabilidade em telas desktop e mobile.
* **Negativas / Riscos:** Exige atenção contínua para manter o padrão de contraste e transparência em novas seções ou componentes futuros.
