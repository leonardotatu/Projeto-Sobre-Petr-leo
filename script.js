document.addEventListener('DOMContentLoaded', () => {
    // Coleção de curiosidades fascinantes sobre o petróleo
    const curiosidades = [
        "A palavra 'petróleo' deriva do latim 'petrus' (pedra) e 'oleum' (óleo), significando literalmente 'óleo de pedra'.",
        "O pré-sal brasileiro, localizado a mais de 7.000 metros de profundidade, abriga uma das maiores reservas descobertas no século XXI.",
        "Aproximadamente 60% de todo o petróleo extraído no mundo é transformado em combustível para transporte (gasolina, diesel e querosene).",
        "O petróleo é fundamental para a medicina: desde próteses e válvulas cardíacas até cápsulas de comprimidos e antissépticos dependem da petroquímica.",
        "A primeira perfuração comercial moderna de petróleo ocorreu em Titusville, Pensilvânia (EUA), no ano de 1859.",
        "Além dos plásticos, produtos do dia a dia como elásticos, batons, champôs, relógios e painéis solares utilizam derivados de petróleo."
    ];

    const btnCuriosidade = document.getElementById('btn-curiosidade');
    const textoFato = document.getElementById('fato-texto');

    let ultimoIndice = -1;

    btnCuriosidade.addEventListener('click', () => {
        let novoIndice;
        
        // Garante que a curiosidade sorteada não seja igual à anterior
        do {
            novoIndice = Math.floor(Math.random() * curiosidades.length);
        } while (novoIndice === ultimoIndice && curiosidades.length > 1);

        ultimoIndice = novoIndice;

        // Efeito visual suave de transição de texto
        textoFato.style.opacity = '0';
        
        setTimeout(() => {
            textoFato.textContent = curiosidades[novoIndice];
            textoFato.style.opacity = '1';
            textoFato.style.transition = 'opacity 0.4s ease';
        }, 200);
    });
});