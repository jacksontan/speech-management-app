import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterSpeech'})
export class FilterPipe implements PipeTransform {
	public transform(values: any[], filterText: string): any[] {
		if(!values || !values.length) {
			return [];
		}
		if(!filterText) {
			return values;
		}
		return values.filter(v => {
			let keywords: string[] = v.keywords.split(",").map((s: string) => s.trim().toLowerCase());
			filterText = filterText.toLowerCase();
			return v.content.toLowerCase().indexOf(filterText) >= 0 || 
				v.title.toLowerCase().indexOf(filterText) >= 0 ||
				this.isInKeywords(keywords, filterText);
		})
	}

	isInKeywords(keywords: string[], searchText: string) {
		return keywords.findIndex((keyword) => keyword.toLowerCase().indexOf(searchText) >= 0) >= 0;
	}
}