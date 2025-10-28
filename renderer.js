console.log(window.api.node());
console.log(window.api.chrome());
console.log(window.api.electron());

const informacao = document.getElementById('info');
informacao.innerText = `App usa Chrome (v${window.api.chrome()}), Node.js (v${window.api.node()}), Electron (v${window.api.electron()})`;

const exibirTexto = async () => {
    const response = await window.api.ping();
    console.log(response);
    informacao.innerText = `Texto enviado pela API/Main: ${response}`;
};
exibirTexto();

const botao = document.getElementById('btnAbrirJanela');
botao.addEventListener('click', () => window.api.abrirJanela('novaJanela'));
