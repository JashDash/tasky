const electron = require('electron');
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
    constructor(url) {
        super({
            webPreferences: {
                nodeIntegration: true,
                backgroundThrottling: false
            },
            width: 300,
            height: 500,
            resizable: false,
            frame: false,
            show: false,
            skipTaskbar: true
        });
        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }
    onBlur(){
        this.hide();
    }
}

module.exports = MainWindow;