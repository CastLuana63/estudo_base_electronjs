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
