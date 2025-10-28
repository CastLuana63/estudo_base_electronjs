import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";

let janela;

function novaJanela() {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      show: false
    }
  });

  win.loadFile('janela.html');
  win.once('ready-to-show', () => win.show());
}

const createWindow = () => {
  janela = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(process.cwd(), 'preload.js'),
      resizable: true,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      show: false
    }
  });

  janela.loadFile('index.html');
  janela.once('ready-to-show', () => janela.show());
};

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  createWindow();

  ipcMain.on('abrirJanela', (event, nome) => {
    if (nome === 'novaJanela') novaJanela();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
