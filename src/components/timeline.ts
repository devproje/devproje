import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "material-symbols/outlined.css";

export type TimelineType = "education" | "hackathon" | "conference" | "certificate";

export interface TimelineData {
	content: string;
	date: Date;
	type: TimelineType;
}

@customElement("timeline-item")
export class TimelineItem extends LitElement {
	@property({ attribute: false })
	data: TimelineData | null = null;

	static styles = css`
		.timeline-item {
			margin: 0.5rem 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.timeline-item-content {
			display: flex;
			align-items: center;
		}

		.timeline-item-date {
			display: flex;
			align-items: center;

			.timeline-item-year {
				margin-left: 5px;
			}
		}

		.material-symbols-outlined {
			margin-right: 5px;
			display: block !important;
			font-family: "Material Symbols Outlined";
			font-weight: normal;
			font-style: normal;
			width: 20px !important;
			height: 20px !important;
			font-size: 20px;
			display: inline-block;
			line-height: 1;
			text-transform: none;
			letter-spacing: normal;
			word-wrap: normal;
			white-space: nowrap;
			direction: ltr;
			-webkit-font-smoothing: antialiased;
		}
	`;

	renderDate(date: Date) {
		let month = "";
		let day = `${date.getDate()}`;
		let d = "";

		switch (date.getMonth()) {
			case 0:
				month = "Jan";
				break;
			case 1:
				month = "Feb";
				break;
			case 2:
				month = "Mar";
				break;
			case 3:
				month = "Apr";
				break;
			case 4:
				month = "May";
				break;
			case 5:
				month = "Jun";
				break;
			case 6:
				month = "Jul";
				break;
			case 7:
				month = "Aug";
				break;
			case 8:
				month = "Sep";
				break;
			case 9:
				month = "Oct";
				break;
			case 10:
				month = "Nov";
				break;
			case 11:
				month = "Dec";
		}

		switch (date.getDay()) {
			case 0:
				d = "Sun";
				break;
			case 1:
				d = "Mon";
				break;
			case 2:
				d = "Tue";
				break;
			case 3:
				d = "Wed";
				break;
			case 4:
				d = "Thu";
				break;
			case 5:
				d = "Fri";
				break;
			case 6:
				d = "Sat";
		}

		if (date.getDate() < 10)
			day = `0${date.getDate()}`;

		return html`
			${month} ${day}, ${d}
			<b class="timeline-item-year">${date.getFullYear()}</b>
		`;
	}

	render() {
		if (this.data === null)
			return html`<div></div>`;

		let symbol = "warning";

		switch (this.data.type) {
			case "certificate":
				symbol = "license";
				break;
			case "conference":
				symbol = "group";
				break;
			case "hackathon":
				symbol = "trophy";
				break;
			case "education":
				symbol = "school";
		}

		return html`
			<div class="timeline-item">
				<div class="timeline-item-content">
					<span class="material-symbols-outlined">${symbol}</span>
					${this.data.content}
				</div>

				<div class="timeline-item-date">
					<span class="material-symbols-outlined">calendar_month</span>
					${this.renderDate(this.data.date)}
				</div>
			</div>
		`;
	}
}

@customElement("timeline-element")
export class Timeline extends LitElement {
	@property({ attribute: false })
	timelines: TimelineData[] = [];

	render() {
		return html`
			<div>
				${this.timelines.map((data: TimelineData) => {
					return html`
						<timeline-item .data=${data}></timeline-item>
					`
				})}
			</div>
		`;
	}
}
