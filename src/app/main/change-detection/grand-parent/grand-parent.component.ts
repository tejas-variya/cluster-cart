import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GrandParentComponent implements OnInit {
  contentHeader: object;
  count : number = 0;
  parentInput;

  constructor() {
    this.contentHeader = {
      headerTitle: 'Angular',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Change detection',
            isLink: false,
            link: '/'
          },
          {
            name: 'Parent',
            isLink: false
          }
        ]
      }
    }
  }


  ngOnInit(): void {
  }

  grandParent():string{
    console.log('GrandParent rendered !');
    this.count ++;
    return `Grand parent rendered ${this.count} times`;
  }

  fromParentToGP(event:Event){
    this.parentInput = event; 
  }
}
