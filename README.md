# estudo_base_electronjs
Projeto de estudos com Eletron js, explorando os conceitos gerais e principais do Eletron js como aplicação Desktop.

# Fonte de estudo e pesquisa
- Leitura da documentação original
``` https://www.electronjs.org/pt/docs/latest/tutorial/examples ```

- Vídeos no YouTube e Sites com artigos (Wiki..)

> ``` https://youtu.be/ML743nrkMHw?si=cKAvXkqOYWPR_8kL | Vídeo aula criando um projeto em Eletronjs com Javascript ```

> ``` https://blog.betrybe.com/framework-de-programacao/electron/ ```

> ``` https://pt.wikipedia.org/wiki/Electron_(software) ```

> ``` https://tableless.com.br/introducao-ao-electron/ ```

> ``` https://terminalroot.com.br/2023/11/como-criar-um-mini-projeto-com-electronjs.html | Aplicação com gráficos ```


# Script e config

#### Passos para criar um projeto do zero
- Comece com o comando inicial para gerar o `package.json`
``` npm init ```
- Instale o Electron
``` npm install electron --save-dev || npm install electron ```
- Crie a estrutura base do projeto
```
meu-projeto/
├── package.json
├── main.js
└── index.html
```

#### Caminho opcional para criar um projeto mais rápido
- Esse comando é um atalho para criar um projeto mais complexo, com estrutura, empacotador, template pronto, etc. 
``` npx create-electron-app meu-projeto ```


# Código para rodar o projeto base

#### arquivo `main.js`
```
import { app, BrowserWindow } from "electron";
const criarJanela = () => {
    const janela = new BrowserWindow({
        width: "100vw",
        height: "100vh"
    })
    janela.loadFile('index.html')
}
app.whenReady().then(() => {
    criarJanela()
})
```
- 