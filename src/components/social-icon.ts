import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@material/web/button/text-button";

@customElement("social-icon")
export class SocialIcon extends LitElement {
	@property({ type: String })
	href = "";

	render() {
		return html`
			<md-text-button class="social-btn" @click=${this._click}>
				<slot></slot>
			</md-text-button>
		`;
	}

	static styles = css`
		:host {
			--button-size: 32px;
		}

		.social-btn {
			margin-right: 5px;
            --md-text-button-container-height: var(--button-size) !important;
            --md-text-button-horizontal-padding: 8px;

            min-width: var(--button-size);
            width: var(--button-size) !important;
            height: var(--button-size) !important;
        }

		::slotted(.custom-icons) {
			width: 24px;
			height: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			fill: var(--md-sys-color-primary);
		}
	`;

	private _click() {
		if (this.href) {
			window.open(this.href, "_blank");
		}

		this.dispatchEvent(new CustomEvent("icon-click", {
			detail: { href: this.href },
			bubbles: true,
			composed: true
		}));
	}
}
