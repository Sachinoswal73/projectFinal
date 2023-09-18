import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPiechart]'
})

export class PiechartDirective implements OnInit, OnChanges {

      @Input() propr : any ;

      @HostBinding('style.background-image') bim =      `conic-gradient(
        pink 180deg, 
        lightblue 0 
        )`;
   
  // @HostBinding('style.width') pw = '150px';
  // @HostBinding('style.height') ph = '150px';

  @HostListener('click') clk () {

        // this.clr = 'blue';

  }

  constructor( private elRef : ElementRef, private rend : Renderer2 ) {

        rend.setStyle(elRef.nativeElement, 'fontSize', '10px');

   }


   ngOnInit(): void {
  
      // this.bim = `conic-gradient(
      //   pink 120deg, 
      //   lightblue 0 
      //   )`;

   }

   ngOnChanges(){
    this.bim = this.propr;
   }  

}
