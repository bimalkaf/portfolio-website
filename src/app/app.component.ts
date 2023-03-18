import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';

  @HostBinding('class.pc') pcMode = false;

  constructor(private observer: BreakpointObserver){
    this.observer.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.WebLandscape,
     ]).subscribe({
      next :(result:any)=>{
        this.pcMode = true
        for(let breakpoint of Object.keys(result.breakpoints)){
          
          if(result.breakpoints[breakpoint]){
            if(breakpoint === Breakpoints.HandsetPortrait){
              this.pcMode = false;
            }

          }
        }
      }
     });


  }

}
