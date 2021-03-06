'use strict';

const Tab = require(__dirname + '/../components/tab.js');
const SystemUtil = require(__dirname + '/../utils/system-util.js');

const {ipcRenderer} = require('electron');

class ServerTab extends Tab {
	template() {
		return `<div class="tab" data-tab-id="${this.props.tabIndex}">
					<div class="server-tooltip" style="display:none">${this.props.name}</div>
					<div class="server-tab-badge"></div>
					<div class="server-tab">
					<img class="server-icons" src='${this.props.icon}' alt="" data-content='${this.props.name[0]}'/>
					</div>
					<div class="server-tab-shortcut">${this.generateShortcutText()}</div>
				</div>`;
	}

	init() {
		super.init();

		this.$badge = this.$el.getElementsByClassName('server-tab-badge')[0];
	}

	updateBadge(count) {
		if (count > 0) {
			const formattedCount = count > 999 ? '1K+' : count;

			this.$badge.innerHTML = formattedCount;
			this.$badge.classList.add('active');
		} else {
			this.$badge.classList.remove('active');
		}
	}

	generateShortcutText() {
		// Only provide shortcuts for server [0..10]
		if (this.props.index >= 10) {
			return '';
		}

		const shownIndex = this.props.index + 1;

		let shortcutText = '';

		if (SystemUtil.getOS() === 'Mac') {
			shortcutText = `⌘ ${shownIndex}`;
		} else {
			shortcutText = `Ctrl+${shownIndex}`;
		}

		// Array index == Shown index - 1
		ipcRenderer.send('switch-server-tab', shownIndex - 1);

		return shortcutText;
	}
}

module.exports = ServerTab;
