import { App, PluginSettingTab, Setting } from 'obsidian';
import ActiveTable from './main';

export class ActiveTableSettingTab extends PluginSettingTab {
    plugin: ActiveTable;

    constructor(app: App, plugin: ActiveTable) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl).setName('ActiveTable').setHeading();

        new Setting(containerEl)
            .setName('Bool Setting')
            .setDesc('With description.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.bool)
                .onChange(async (value) => {
                    this.plugin.settings.bool = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('String Setting')
            .setDesc('With description')
            .addText(text => text
                .setPlaceholder('14px')
                .setValue(this.plugin.settings.string)
                .onChange(async (value) => {
                    this.plugin.settings.string = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Some text')
            .setDesc('With description');

    }
}