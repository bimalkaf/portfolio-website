import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(
    private element : ElementRef,
    private observer : BreakpointObserver
    ) {
      this.observer.observe([
        Breakpoints.HandsetPortrait,
        Breakpoints.WebLandscape,
       ]).subscribe({
        next :(result:any)=>{
          this.element.nativeElement.classList.add('pc');
          for(let breakpoint of Object.keys(result.breakpoints)){
            
            if(result.breakpoints[breakpoint]){
              if(breakpoint === Breakpoints.HandsetPortrait){
                this.element.nativeElement.classList.remove('pc');
              }

            }
          }
        }
       });

     }

}
