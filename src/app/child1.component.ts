// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

@Component({
    selector: 'child1_comp',
    standalone: true,
    templateUrl: './child1.component.html',
    styleUrls: ['./app.component.css']
})

export class ChildComponent1  {
    name = 'component1';
    cite1 = 'Между *опой и диваном доллар никогда не пролетит.';
    cite2 = 'У моих детей, конечно, будет компьютер. Но первым делом они получат книги.';
    cite3 = 'Наслаждайтесь тем, что вы делаете и вы никогда в своей жизни не будете работать.';
    cite4 = 'Жизнь несправедлива – привыкните к этому!';
    cite5 = `Выберите ленивого человека для выполнения трудной работы. 
        Потому что ленивый человек найдет легкий способ eё выполнить.`;
  }