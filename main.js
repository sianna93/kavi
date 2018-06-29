const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url')
let win


function createWindow() {

  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  });

  //win.loadURL('http://localhost:4200')﻿
  win.loadURL(`file://${__dirname}/dist/index.html`)
  /*win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))*/﻿

  //win.webContents.openDevTools()

  //Event when the window is closed
  win.on('closed', function () {
    win = null
  });

  // Create window on electron initialization
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin'){
      app.quit()
    }
  });

  app.on('active', function (){
    if (win === null) {
      createWindow()
    }
  });



}

