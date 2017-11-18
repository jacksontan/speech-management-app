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
			let keywords: String[] = v.keywords.split(",").map((s: String) => s.trim().toLowerCase());
			return v.content.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || 
				('speech ' + v.id).indexOf(filterText.toLowerCase()) >= 0 ||
				keywords.indexOf(filterText.toLowerCase()) >= 0;
		})
	}
}