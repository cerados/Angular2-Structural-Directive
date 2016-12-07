import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-comp',
    templateUrl: 'my-component.component'
  
})
export class MyComponent {
    title = 'Structural Directives';

    public names = [
        { name: "Kamal" },
        { name: "Mitchel" },
        { name: "Yoon" },
        { name: "Johnson" },
        { name: "Jet Li" }
    ];
    public selectedName = { name: "" };

    onNameClicked(nam) {
        this.selectedName = nam;
    }
    onAddName(nam) {
        this.names.push({ name: nam.value });
    }
    onDeleteName() {
        this.names.splice(this.names.indexOf(this.selectedName), 1);
        this.selectedName.name = "";
    }
}