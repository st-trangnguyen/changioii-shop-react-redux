/* eslint-disable no-undef */
const { app, BrowserWindow } = require('electron');
// const path = require('path');
// const url = require('url');
const isDev = require('electron-is-dev');
// const buildMenu = require('./menu');

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 890,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  const windowURL = `file://${__dirname}/index.html`;

  mainWindow.loadURL(windowURL);

  /**
   * Open dev tools by default on development env
   */
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  /**
   * Build app menu
   */
  // buildMenu(mainWindow);
};

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.whenReady().then(createWindow).catch(console.log);
