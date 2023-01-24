const { app, BrowserWindow, nativeImage } = require("electron");

function createWindow() {
  const icon = nativeImage.createFromPath('favicon.ico');

  if (app.dock) {
    app.dock.setIcon(icon);
  }

  const win = new BrowserWindow({
    icon,
    height: 900,
    width: 1200,
    webPreferences: {
      nodeIntegration: true,
    },
  });

	win.show();
  win.loadFile("views/index.html");
}

app.whenReady().then(createWindow);