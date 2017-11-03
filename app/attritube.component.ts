import { Component } from '@angular/core';

@Component({
	selector: 'my-attritube',
	template: `<div>
					<h1>{{title}}</h1>
					<div>
						<p>working this component</p>
					</div>
				</div>`,
	styles: [``]
})

export class MyAttritubeComponent{
	public title = "Welcome to Attritubes Directive";
	public cone = true;
	public ctwo = true;
	toggle(){
		this.cone = !this.cone;
		this.ctwo = !this.ctwo;
	};
}