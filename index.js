const {app, BrowserWindow} = require('electron')

let window

app.on('ready', () => {
  window = new BrowserWindow({
    width: 300,
    height: 600,
    minWidth: 300,
    minHeight: 500
  })
  window.loadURL(`file://${__dirname}/index.html`)

  window.setVibrancy('ultra-dark')
})
