import { shell } from 'electron';
import { IS_MAC } from '../constants';
import { aboutMenu } from './items/about';

export const helpMenuTemplate = {
  label: 'Help',
  submenu: [
    {
        label: 'Learn More',
        click: () => shell.openExternal('https://github.com/chrisknepper/android-messages-desktop/')
    }
  ]
};

if (!IS_MAC) {
    helpMenuTemplate.submenu.push({
        label: 'About Android Messages Desktop',
        click: () => aboutMenu()
    });
}
