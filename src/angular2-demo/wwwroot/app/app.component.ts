import { Component } from '@angular/core';

@Component({
   moduleId: module.id,
    selector: 'my-app',
    templateUrl:'app.component.html'
   
})
export class AppComponent {
    title = 'Structural Directives';
    public names = [
        { name: "Steph" },
        { name: "Tin" },
        { name: "Edward" },
        { name: "Jessy" },
        { name: "Kevin" }
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
