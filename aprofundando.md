
# Adicionando complexidade, estrutura e organização a um projeto completo.

<!-- Conteúdo Referente a organização e complexidade do projeto -->
## É possível organizar o projeto em uma estrutura modular e orientada a objetos?
Sim é possível, exemplos de organização do projeto.
- Separar as possíveis telas da lógica principal da Main e organizar as telas
> exemplo:
```
electron/
├── main.js
├── preload.js
└── windows/
    ├── BaseWindow.js
    ├── HomeWindow.js
    ├── SettingsWindow.js
```

```js
// Classe base de janelas
import { BrowserWindow } from 'electron';
import path from 'path';

class JanelaBase {
  constructor(options) {
    this.window = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      webPreferences: {
        preload: path.join(process.cwd(), '../preload.js'), // caso importação seja em require, use '__dirname'
        sandbox: false,
        show: false
      },
      ...options,
    });

    this.window.once('ready-to-show', () => this.window.show());
  }
  load(url) {
    this.window.loadURL(url);
  }
  on(event, callback) {
    this.window.on(event, callback);
  }
  show() {
    this.window.show();
  }
  hide() {
    this.window.hide();
  }
  close() {
    this.window.close();
  }
}
export default JanelaBase();
```

Exemplo de telas:
> Tela principal
```js
import BaseWindow from './BaseWindow';

class HomeWindow extends BaseWindow {
  constructor() {
    super({ title: 'Home' });
    this.load('http://localhost:5173/home'); // ou o arquivo local 'home.thml'
  }
}
export default HomeWindow();
```

Já no `Main process`:
```js
import { app } from'electron';
import HomeWindow from'./windows/HomeWindow';
import SettingsWindow from'./windows/SettingsWindow';

let home, settings;
app.whenReady().then(() => {
  home = new HomeWindow();
  settings = new SettingsWindow();
  // Exemplo de comunicação entre janelas
  setTimeout(() => {
    settings.show();
  }, 5000);
});
```

Outra estrutura para o `Main process`, onde o ele apenas orquestra tudo:
```
electron/
├── main.js
├── preload.js
├── core/
│   ├── ApiService.js         # Lida com requisições HTTP
│   ├── WindowManager.js      # Cria e gerencia janelas
│   ├── IpcHandlers.js        # Centraliza ipcMain.handle()
│   └── Config.js
├── windows/
│   ├── BaseWindow.js
│   ├── HomeWindow.js
│   └── SettingsWindow.js
```
```js
import { app } from 'electron';
import WindowManager from './core/WindowManager';
import IpcHandlers from './core/IpcHandlers';

app.whenReady().then(() => {
  WindowManager.create('home');
  IpcHandlers.registerAll();
});
```

