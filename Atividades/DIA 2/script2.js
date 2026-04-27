function carregarProximosGrupos() {
            const container = document.getElementById('grupos-container');
            const novosGrupos = `
                <div id="grupo-d" class="card-grupo">
                    <h2>🅳 Grupo D</h2>
                    <h3>Seleções:</h3>
                    <ul>
                        <li>Estados Unidos</li>
                        <li>Paraguai</li>
                        <li>Austrália</li>
                        <li>Turquia</li>
                    </ul>
                    <details>
                        <summary>Saiba Mais</summary>
                        <p><strong>Fatos:</strong> Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.</p>
                    </details>
                </div>
        
                <div id="grupo-e" class="card-grupo">
                    <h2>🅴 Grupo E</h2>
                    <h3>Seleções:</h3>
                    <ul>
                        <li>Alemanha</li>
                        <li>Equador</li>
                        <li>Costa do Marfin</li>
                        <li>Curaçao</li>
                    </ul>
                    <details>
                        <summary>Saiba Mais</summary>
                        <p><strong>Fatos:</strong> Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.</p>
                    </details>
                </div>
        
                <div id="grupo-f" class="card-grupo">
                    <h2>🅵 Grupo F</h2>
                    <h3>Seleções:</h3>
                    <ul>
                        <li>Holanda</li>
                        <li>Japão</li>
                        <li>Tunísia</li>
                        <li>Suécia</li>
                    </ul>
                    <details>
                        <summary>Saiba Mais</summary>
                        <p><strong>Fatos:</strong> Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.</p>
                    </details>
                </div>
            `;
            container.innerHTML = novosGrupos;
            document.getElementById('btn-proximo').style.display = 'none';
        }