import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {IntiTableComponent} from "./component";

@NgModule({
    imports: [CommonModule, FormsModule],
    providers: [],
    declarations: [IntiTableComponent],
    exports: [IntiTableComponent]
})
export class IntiTableModule{

}