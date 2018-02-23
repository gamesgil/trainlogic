import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-menu',
    styles: [`
        ul {
            list-style: none;
            font-size: 1.5rem;
            background-color: white;
        }

        ul.first {
            padding-left: 0;
        }

        .active {
            background-color: lightblue;
        }
    `],
    template: `
        <ul *ngFor="let item of data; let i = index" [ngClass]="{first: depth === 0}">
            <li #menuItem (click)="click($event, i)" [ngClass]="{active: curMenu === i}">
                {{ item.name }}
                <app-menu *ngIf="item.contacts && curMenu === i" 
                    [data]="item.contacts" [depth]="depth + 1"
                    (onHilite)="dehilite()"></app-menu>
            </li>
        </ul>
    `
})

export class MenuComponent implements OnInit {
    @ViewChildren("menuItem") items;

    @Input() data: any[];
    @Input() depth: number = 0;

    @Output() onHilite: EventEmitter<boolean> = new EventEmitter();
    
    curMenu = -1;

    constructor() { }

    ngOnInit() { }

    click(e, idx) {
        this.curMenu = this.curMenu != idx ? idx : -1;
        this.onHilite.emit(e);

        e.stopImmediatePropagation();
    }
    
    dehilite() {
        this.items.map(item => item.nativeElement.classList.remove("active"));
    }
}