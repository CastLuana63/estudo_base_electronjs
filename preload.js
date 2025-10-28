import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  abrirJanela: (nome) => ipcRenderer.send('abrirJanela', nome)
});
