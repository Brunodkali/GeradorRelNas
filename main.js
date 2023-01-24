const { app, BrowserWindow, nativeImage } = require("electron");

require("electron-reload")(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`),
});

function createWindow() {
  const icon = nativeImage.createFromPath('./public/img/iconRel.png');

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