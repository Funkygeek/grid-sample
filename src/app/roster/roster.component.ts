import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class RosterComponent implements OnInit {
  numberOfCols = 7;

  constructor(breakpointObserver: BreakpointObserver) {


    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).subscribe(result => {
    if (result.matches) {
      const isOkScreen = breakpointObserver.isMatched('(max-width: 999px)');
      const isMediumScreen = breakpointObserver.isMatched('(max-width: 800px)');
      const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
      const isTinyScreen = breakpointObserver.isMatched('(max-width: 375px)');
      console.log(`==========================`);

      console.log(`result.matches ${result.matches}`);
      console.log(`isTinyScreen : ${isTinyScreen}`);
      console.log(`isSmallScreen : ${isSmallScreen}`);
      console.log(`isMediumScreen : ${isMediumScreen}`);
      console.log(`isOkScreen : ${isOkScreen}`);

      isTinyScreen ? this.numberOfCols = 1 : isSmallScreen ? this.numberOfCols = 2 : isMediumScreen ? this.numberOfCols = 3 :
        isOkScreen ? this.numberOfCols = 4 : this.numberOfCols = 5;
    } else {
      this.numberOfCols = 7;
    }
  }); }

  ngOnInit() {
  }

}
