import { Option } from "./options/options";


export class Property {
    id: string = '';
	name: string = '';
    typeOfData: string | number | Option[];
    value?: string = '';
}
