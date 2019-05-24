import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { DocumentoController } from './controllers/documento.controller';

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 1000,    
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file',
      slashes: true
    });

  // mainWindow.webContents.toggleDevTools();

  const doc = new DocumentoController('', 123);
  doc.teste();

  mainWindow.loadURL(startUrl);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
