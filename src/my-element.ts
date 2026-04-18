import { customElement } from "lit/decorators.js";
import { LitElement, css, html } from "lit";
import logo from "./assets/logo.png";

import "material-symbols/outlined.css";
import "./components/social-icon";
import "@material/web/all";

@customElement("my-element")
export class MyElement extends LitElement {
	render() {
		return html`
			<section class="view">
				<div class="section">
					<img class="logo" src=${logo}>
					<h1 class="email-addr">
						<a href="mailto:me@projecttl.net">
							me@projecttl.net
						</a>
					</h1>
				</div>

				<span>Founder & DevOps Engineer of WSERVER</span>

				<div class="social-row">
					<social-icon href="mailto:me@projecttl.net">
						<span class="material-symbols-outlined">mail</span>
					</social-icon>
					<social-icon href="https://github.com/devproje">
						<svg class="custom-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
							<!-- !Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. -->
							<path d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"/>
						</svg>
					</social-icon>
					<social-icon href="https://discord.com/users/1017410607147913328">
						<svg class="custom-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
							<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
							<path d="M524.5 133.8C524.3 133.5 524.1 133.2 523.7 133.1C485.6 115.6 445.3 103.1 404 96C403.6 95.9 403.2 96 402.9 96.1C402.6 96.2 402.3 96.5 402.1 96.9C396.6 106.8 391.6 117.1 387.2 127.5C342.6 120.7 297.3 120.7 252.8 127.5C248.3 117 243.3 106.8 237.7 96.9C237.5 96.6 237.2 96.3 236.9 96.1C236.6 95.9 236.2 95.9 235.8 95.9C194.5 103 154.2 115.5 116.1 133C115.8 133.1 115.5 133.4 115.3 133.7C39.1 247.5 18.2 358.6 28.4 468.2C28.4 468.5 28.5 468.7 28.6 469C28.7 469.3 28.9 469.4 29.1 469.6C73.5 502.5 123.1 527.6 175.9 543.8C176.3 543.9 176.7 543.9 177 543.8C177.3 543.7 177.7 543.4 177.9 543.1C189.2 527.7 199.3 511.3 207.9 494.3C208 494.1 208.1 493.8 208.1 493.5C208.1 493.2 208.1 493 208 492.7C207.9 492.4 207.8 492.2 207.6 492.1C207.4 492 207.2 491.8 206.9 491.7C191.1 485.6 175.7 478.3 161 469.8C160.7 469.6 160.5 469.4 160.3 469.2C160.1 469 160 468.6 160 468.3C160 468 160 467.7 160.2 467.4C160.4 467.1 160.5 466.9 160.8 466.7C163.9 464.4 167 462 169.9 459.6C170.2 459.4 170.5 459.2 170.8 459.2C171.1 459.2 171.5 459.2 171.8 459.3C268 503.2 372.2 503.2 467.3 459.3C467.6 459.2 468 459.1 468.3 459.1C468.6 459.1 469 459.3 469.2 459.5C472.1 461.9 475.2 464.4 478.3 466.7C478.5 466.9 478.7 467.1 478.9 467.4C479.1 467.7 479.1 468 479.1 468.3C479.1 468.6 479 468.9 478.8 469.2C478.6 469.5 478.4 469.7 478.2 469.8C463.5 478.4 448.2 485.7 432.3 491.6C432.1 491.7 431.8 491.8 431.6 492C431.4 492.2 431.3 492.4 431.2 492.7C431.1 493 431.1 493.2 431.1 493.5C431.1 493.8 431.2 494 431.3 494.3C440.1 511.3 450.1 527.6 461.3 543.1C461.5 543.4 461.9 543.7 462.2 543.8C462.5 543.9 463 543.9 463.3 543.8C516.2 527.6 565.9 502.5 610.4 469.6C610.6 469.4 610.8 469.2 610.9 469C611 468.8 611.1 468.5 611.1 468.2C623.4 341.4 590.6 231.3 524.2 133.7zM222.5 401.5C193.5 401.5 169.7 374.9 169.7 342.3C169.7 309.7 193.1 283.1 222.5 283.1C252.2 283.1 275.8 309.9 275.3 342.3C275.3 375 251.9 401.5 222.5 401.5zM417.9 401.5C388.9 401.5 365.1 374.9 365.1 342.3C365.1 309.7 388.5 283.1 417.9 283.1C447.6 283.1 471.2 309.9 470.7 342.3C470.7 375 447.5 401.5 417.9 401.5z"/>
						</svg>
					</social-icon>
					<social-icon href="https://instagram.com/devproje_">
						<svg class="custom-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
							<!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
							<path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
						</svg>
					</social-icon>
					<social-icon href="https://blog.projecttl.net">
						<span class="material-symbols-outlined">rss_feed</span>
					</social-icon>
				</div>
			</section>
		`
	}

	static styles = css`
		:host {
			--text: #6b6375;
			--text-h: #08060d;
			--bg: #fff;
			--border: #e5e4e7;
			--code-bg: #f4f3ec;

			width: 960px;
			max-width: 100%;
			margin: 0 auto;
			text-align: center;
			min-height: 100svh;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			color: var(--text);
		}

		@media (prefers-color-scheme: dark) {
			:host {
				--text: #9ca3af;
				--text-h: #f3f4f6;
				--bg: #16171d;
				--border: #2e303a;
				--code-bg: #1f2028;
			}
		}

		h1,
		h2,
		::slotted(h1),
		::slotted(h2) {
			font-family: var(--heading);
			font-weight: bold;
			color: var(--text-h);
		}

		h1,
		::slotted(h1) {
			font-size: 32px;
			letter-spacing: -1.68px;
			margin: 32px 0;
		}

		h2 {
			font-size: 20px;
			line-height: 118%;
			letter-spacing: -0.24px;
			margin: 0 0 8px;
		}

		p {
			margin: 0;
		}

		code {
			font-family: var(--mono);
			font-size: 15px;
			line-height: 135%;
			display: inline-flex;
			padding: 4px 8px;
			border-radius: 4px;
			color: var(--text-h);
			background: var(--code-bg);
		}

		.logo {
			width: 50px;
			padding-right: 15px;
		}

		.section {
			display: flex;
			width: fit-content;
			height: fit-content;
			align-items: center;
		}

		.view {
			--y: 2.5rem;

			display: flex;
			flex-direction: column;
			padding: var(--y) 10px;

			flex: 1;
			max-height: 450px;

			h1, h2, p, span {
				margin: 0;
				width: fit-content;
				align-content: center;
				justify-content: flex-start;
			}
		}

		.email-addr {
			height: 50px;
			position: relative;
			display: inline-block;
			cursor: pointer;
			overflow: hidden;
			transition: all 0.4s ease;
		}

		.email-addr::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--text-h);
			z-index: 1;
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			transform: translateY(0);
		}

		.email-addr a {
			position: relative;
			display: inline-block;
			text-decoration: none;
			z-index: 2;
			color: var(--bg);
			font-family: var(--mono);
			transition: color 0.3s ease;
		}

		.email-addr:hover::before {
			transform: translateY(100%);
		}

		.email-addr:hover a {
			color: var(--text-h);
		}

		.social-row {
			display: flex;
			align-items: center;

			.material-symbols-outlined {
				display: block !important;
				font-family: "Material Symbols Outlined";
				font-weight: normal;
				font-style: normal;
				width: 24px !important;
				height: 24px !important;
				font-size: 24px;
				display: inline-block;
				line-height: 1;
				text-transform: none;
				letter-spacing: normal;
				word-wrap: normal;
				white-space: nowrap;
				direction: ltr;
				-webkit-font-smoothing: antialiased;
			}
		}
	`
}

declare global {
	interface HTMLElementTagNameMap {
		"my-element": MyElement
	}
}
