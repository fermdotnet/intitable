import {Component, Input, Output, EventEmitter} from '@angular/core';
import {SettingsInterface} from './interfaces'

@Component({
    selector: 'inti-table',
    templateUrl: './table.html',
    styleUrls: ['./style.scss']
})
export class IntiTableComponent{
    @Input() loading:boolean;
    @Input() source:any;
    @Input() settings:SettingsInterface;
    @Output() onSort = new EventEmitter();
    @Output() onSearch = new EventEmitter();
    @Output() onBtn = new EventEmitter();
    @Output() onPage = new EventEmitter();

    constructor(){

    }

    keys(obj:any):Array<string>{
        return Object.keys(obj);
    }

    sort(column:string){
        if(!this.settings.sort || !this.settings.columns[column].sortable)
            return;

        if(column == this.settings.sort.column){
            this.settings.sort.order = (this.settings.sort.order == 'asc') ? 'desc' : 'asc';
        }
        else{
            this.settings.sort.column = column;
            this.settings.sort.order = 'asc';
        }

        this.onSort.emit();
    }

    search(){
        this.onSearch.emit();
    }

    button(key:string, element:any){
        this.onBtn.emit({
            type: key,
            item: element
        });
    }

    toggle(key:string, item:number){
        let position = this.source.indexOf(item);

        this.onBtn.emit({
            type: key,
            position: position
        });
    }

    page(position:number){
        if(this.settings.paginator.actual != position)
            this.onPage.emit(position);
    }
}
