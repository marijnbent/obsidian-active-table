import { Plugin } from 'obsidian';
import { ActiveTableSettingTab } from './settings';
import { ActiveTableSettings, DEFAULT_SETTINGS } from './types';

export default class ActiveTable extends Plugin {
    settings: ActiveTableSettings;

    async onload() {

        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
        this.addSettingTab(new ActiveTableSettingTab(this.app, this));
        
        // this.addCommand({
        //     id: '',
        //     name: '',
        //     callback: () => null
        // });

        // this.addRibbonIcon('printer', 'Print Note', (evt: MouseEvent) => {
        // });
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}