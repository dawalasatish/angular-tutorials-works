import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<div>
  				<h1>{{title}}</h1>
  				<div>
				Firstname: <input type="text" #demoinput [(ngModel)]="fname"> <br/><br/>
				Lastname: <input type="text" #demoinput [(ngModel)]="lname"><br/><br/>
				<button (click)="onClick(demoinput.value)">Click</button>
				<h3 *ngIf="showElement">Full Name: {{fname}} {{lname}}</h3>
				</div>
				<div [ngSwitch]='color'>
					<p *ngSwitchWhen="'blue'">Blue will be print on screen</p>
					<p *ngSwitchWhen="'green'">Green color will be print on screen</p>
					<p *ngSwitchDefault>Invalid Color</p>
					<p>ckjasckasfcvasdkcvksad</p>
				</div>
				<ul>
					<li *ngFor ="let array1 of arrays">{{array1}}</li>
				</ul>
		
  			</div>
				`,
  styles:[`
				h3{
					color:#998fbf;
				}
  			`]
})
export class AppComponent {
	public title = "Welcome to Angular2 App..!! "
	public fname;
	public lname;
	public showElement =true;
	public color = 'yellow';
	public arrays = ['Satish','Sravan','Ramana'];
	onClick(value){

		alert('button clicked..!! '   +value);
		console.log('button clicked '   +value);
	}
 }
