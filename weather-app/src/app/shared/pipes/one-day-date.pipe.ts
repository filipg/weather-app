import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'oneDayDate'
})
export class OneDayDatePipe implements PipeTransform {
    transform(value: number) {
        const dataToTransform: Date = new Date(value*1000);
        const day = dataToTransform.getDate();
        const month = (dataToTransform.getMonth()+1);
        return ((day>9)?day:'0'+day) + '/' + ((month>9)?month:'0'+month);
    }
}