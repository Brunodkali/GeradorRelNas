const { app, BrowserWindow, nativeImage } = require("electron");

require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow() {
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/build/icon.png`);

  if (app.dock) {
    app.dock.setIcon(icon);
  }

  const win = new BrowserWindow({
    icon,
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("views/index.html");
}

app.whenReady().then(createWindow);