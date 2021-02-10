const electron = require('electron');
const { app, Tray, Menu } = electron;
class TimerTray extends Tray {
    constructor(iconPath, mainWindow) {
        super(iconPath);
        // this.setToolTip('Tasky');
        this.mainWindow = mainWindow;
        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));
    }
    displayPlacement(){
        
    }
    onClick(event, bounds) {
        let { x, y } = bounds;// click event bounds
        let { width, height } = this.mainWindow.getBounds();// window height and width
        if (this.mainWindow.isVisible()) {
            this.mainWindow.hide();
        }
        else {
            const yBound =  process.platform == 'darwin'?y:Math.round(y-height);
            this.mainWindow.setBounds({
                x: Math.round(x - width / 2),
                y: yBound,
                width: width,
                height: height
            }, false);
            this.mainWindow.show();
        }
    }
    onRightClick() {
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => app.quit()
            }
        ])
        this.popUpContextMenu(menuConfig);
    }
}
module.exports = TimerTray;