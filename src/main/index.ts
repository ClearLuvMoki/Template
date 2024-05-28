import { app, BrowserWindow } from 'electron';
import path from 'path';
import { isDev } from '@main/utils/tools';

let mainWindow: BrowserWindow | null = null;

const loadUrl: string = isDev
  ? `http://localhost:${process.env.PORT}`
  : `file://${path.resolve(__dirname, '../render/index.html')}`;


const handleCreateMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1072,
    minWidth: 1072,
    height: 778,
    minHeight: 778,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      webSecurity: false,
    },
  });
  mainWindow.loadURL(loadUrl);
};

app.on('ready', () => {
  handleCreateMainWindow();
});
