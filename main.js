import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";

const createWindow = () => {
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(process.cwd(), 'preload.js'),
            resizable: true, // Permite que a janela seja redimensionada
            nodeIntegration: false, // Usar como False é mais recomendado (Por segurança), mas para teste pode usar como True
            contextIsolation: true, // Config obrigatória para contextBridge
            sandbox: false, // Flag importante para ESM (modo de importação) evita erro de compatibilidade, 
            // mas é mais seguro manter como true. Durante desenvolvimento não há problema em manter como false.
            show: false // não exibe a janela ao rodar
        }
    })
    janela.loadFile('index.html')
    janela.on('ready-to-show', () => {
        janela.show() // Quando a janela estiver pronta, ou seja os dados já foram carregado(html, css..), ela será exibida.
    })
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
