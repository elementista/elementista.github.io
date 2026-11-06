// ⚡ LEITOR DINÂMICO COMPLETO E RESPONSIVO (SEM CORTES OU FILTROS DE ARTIGO)
function abrirLeitorCompleto(linkOriginal) {
    // 1. Cria a camada de fundo escuro por cima de todo o site
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    overlay.style.zIndex = "1000";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    // 2. Caixa contêiner centralizada (Ajustada com vh/vw para compatibilidade universal em qualquer tela)
    const caixaModal = document.createElement("div");
    caixaModal.style.maxWidth = "1000px";
    caixaModal.style.width = "95vw";      /* Garante margem de segurança nas laterais em celulares */
    caixaModal.style.height = "90vh";     /* Trava a altura em 90% da tela do aparelho, impedindo vazamentos */
    caixaModal.style.backgroundColor = "#0d1117";
    caixaModal.style.border = "2px solid #00ffcc";
    caixaModal.style.borderRadius = "8px";
    caixaModal.style.padding = "15px";     /* Espaçamento interno compacto para otimizar espaço em telas mobile */
    caixaModal.style.boxSizing = "border-box";
    caixaModal.style.display = "flex";
    caixaModal.style.flexDirection = "column";

    // 3. A Janela de Visualização Viva (Flexível: encolhe ou estica mantendo o botão visível na base)
    const janelaIframe = document.createElement("iframe");
    janelaIframe.src = linkOriginal;
    janelaIframe.style.width = "100%";
    janelaIframe.style.flex = "1";         /* Engenharia elástica: ocupa o espaço vertical máximo disponível */
    janelaIframe.style.border = "1px solid rgba(0, 255, 204, 0.2)";
    janelaIframe.style.borderRadius = "4px";
    janelaIframe.style.backgroundColor = "#ffffff";
    janelaIframe.style.marginBottom = "15px";

    // 4. Botão de Fechar Verde Limão (Sempre travado e acessível na base do contêiner)
    const botaoFechar = document.createElement("button");
    botaoFechar.style.background = "#161b22";
    botaoFechar.style.border = "1px solid #39ff14";
    botaoFechar.style.color = "#39ff14";
    botaoFechar.style.padding = "10px 20px";
    botaoFechar.style.borderRadius = "6px";
    botaoFechar.style.fontFamily = "inherit";
    botaoFechar.style.fontSize = "0.9rem";
    botaoFechar.style.fontWeight = "bold";
    botaoFechar.style.cursor = "pointer";
    botaoFechar.style.alignSelf = "flex-start";
    botaoFechar.innerText = "[ X - Fechar Leitura ]";

    // 5. Montagem física dos elementos no DOM
    caixaModal.appendChild(janelaIframe);
    caixaModal.appendChild(botaoFechar);
    overlay.appendChild(caixaModal);
    document.body.appendChild(overlay);

    // 6. Gerenciamento de eventos de fechamento para limpar a memória
    botaoFechar.addEventListener("click", () => {
        overlay.remove();
    });

    // Fecha a janela de leitura se o usuário clicar no fundo escuro fora da caixa
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

