import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'child3_comp',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './child3.component.html',
    styleUrl: './app.component.css'
})

export class ChildComponent3{
    name = 'component3'
}