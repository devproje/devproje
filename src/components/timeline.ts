import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface TimelineData {
	content: string;
	date: Date;
}

@customElement("timeline-item")
export class TimelineItem extends LitElement {
	@property({ attribute: false })
	data: TimelineData | null = null;

	render() {
		return html`
			<div>
				${!this.data ? undefined : html`
					${this.data.content}
					${this.data.date}
				`}
			</div>
		`;
	}
}

@customElement("timeline-element")
export class Timeline extends LitElement {
	@property({ type: String })
	year = "";

	@property({ attribute: false })
	timelines: TimelineData[] = [];

	render() {
		return html`
			<div>
				<h3>${this.year}</h3>
				${this.timelines.map((data: TimelineData) => {
					return html`
						<timeline-item .data=${data}></timeline-item>
					`
				})}
			</div>
		`;
	}
}
