import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  count:number = 0;
  classes:string[] = ['bg-danger','bg-primary','bg-success','bg-dark'];
  cardBgcolor : string;
  @Input() dataTransfer : number
  constructor() { }

  ngOnInit(): void {
    this.cardBgcolor = this.classes[Math.floor(Math.random()*this.classes.length)]
  }

  child() : string{
    console.log("Child rendered !");
    this.count ++;
    return `Child rendered ${this.count} times`
  }

  
}
