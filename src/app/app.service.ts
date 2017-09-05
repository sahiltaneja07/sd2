import { Injectable } from '@angular/core';

import { TableData } from './app.model';

@Injectable()
export class AppService {

	getTableData(): TableData[] {
		return [
			new TableData('Jon', '23/10/2015', 23),
			new TableData('Viki', '24/01/2015', 20),
			new TableData('Abc', '25/10/2015', 43),
			new TableData('XYZ', '28/10/2015', 21),
		];
	}

}
