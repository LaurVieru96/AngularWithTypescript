import { Component } from "@angular/core";

@Component({
    selector:'app-hello-world',
    template:'<h1>What ?!</h1>',
    styles:[`
    h1 {
        color: bufferToggle;
    }`]
})

export class HelloWorldComponent {
    title = 'Hello World !'
}