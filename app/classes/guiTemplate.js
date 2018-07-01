export class guiTemplate {
    constructor(drawground, name, background,buttons){
        this.drawground = drawground;
        this.name = name;
        this.objects = {
            background: background,
            buttons: buttons
        };
    }
}