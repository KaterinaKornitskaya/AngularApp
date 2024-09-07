// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';
import {ChildComponent1} from './child1.component'
import {ChildComponent2} from './child2.component'
import {ChildComponent3} from './child3.component'
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app',
    standalone: true, // указывает, что компонент будет независимым, то есть для него не нужно создавать дополнительных модулей
    imports: [ChildComponent1, ChildComponent2, ChildComponent3, MatButtonModule, MatDividerModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

export class AppComponent {
    name = "";
  }