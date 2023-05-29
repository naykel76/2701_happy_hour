import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-popover',
    template: `
        <div class="pxy">
            <p>{{ data.title }}</p>
        </div>
    `,
})
export class PopoverComponent implements OnInit {

    @Input() data: any;

    ngOnInit() {
        console.log(this.data.title);
    }

}
