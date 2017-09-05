import { Component } from '@angular/core';
import * as moment from 'moment';

import { TableData } from './app.model';
import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	tableData: TableData[];

	constructor(private appService: AppService){
		this.tableData = this.appService.getTableData();
		let intervalId = setInterval(() => {
			if(this.tableData.length < 4) return;
			let currentTableData = this.tableData[this.tableData.length - 4];
			this.tableData.push(new TableData(
				currentTableData.name,
				moment(currentTableData.joiningDate, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY'),
				this.getReversedNumber(currentTableData.age)
			));
			if(this.tableData.length === 8) clearInterval(intervalId);
		},5000);
	}

	sortByJoiningDate(): void {
		this.tableData.sort((a,b) => {
		  return +moment(a.joiningDate, 'DD/MM/YYYY').toDate() - +moment(b.joiningDate, 'DD/MM/YYYY').toDate();
		});
	}

	searchByName(query: string): void {
		this.tableData = this.appService.getTableData();
		if(query.length < 1) return;
		query = query.toLowerCase();
		this.tableData = this.tableData.filter(x => x.name.toLowerCase().indexOf(query) >= 0);
	}

	private getReversedNumber(num: number): number {
		let numInString = num + "";
		return parseInt(numInString.split("").reverse().join(""));
	}

}
