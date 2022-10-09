import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  count:number =0;
  interval = interval(5000);
  dataTransfer:number = 1;
  dataToGP : string;
  numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

  @Output() fromParentToGP: EventEmitter<string> = new EventEmitter<string>();

  constructor(private cd:ChangeDetectorRef) {
   }

  ngOnInit(): void {
    this.interval.subscribe(()=>{
      this.dataTransfer ++;
      this.cd.detectChanges();
    })
  }

  parent():string{
    console.log('Parent rendered !');
    this.count ++;
    return `Parent rendered ${this.count} times`; 
  }

  sendData(event){
    console.log('event :>> ', event);
    this.fromParentToGP.emit(event);
  }
}
