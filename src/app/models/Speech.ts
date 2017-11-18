export class Speech  { 
	id: Number;
	content: String;
	author: String;
	keywords: String;
	date: Date;

	static create(data: any){
	    return new Speech(data);
	}
	constructor(data: any){
		if(data) {
			this.id = data.id;
			this.content = data.content;
			this.author = data.author;
			this.keywords = data.keywords;
			this.date = data.date;
		}
	}
}
