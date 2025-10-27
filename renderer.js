console.log(window.versions.node())
console.log(window.versions.chrome())
console.log(window.versions.electron())

const informacao = document.getElementById('info')
informacao.innerText = `Este app usa a versão do Chrome (v${window.versions.chrome()}), 
Node.js (v${window.versions.node()}), e Electron (v${window.versions.electron()})`
