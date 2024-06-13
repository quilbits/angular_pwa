import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {


  
  spinnerLoading:boolean=false
  spinnerLoaded:boolean=false

   constructor(){    

    this.cargaSpinner()

   }

   ngOnInit(){   
    
    this.cargaSpinner()

   }

   cargaSpinner(){

      setTimeout(()=>{

        this.spinnerLoading=false
        this.spinnerLoaded=true
        
      },2000)

      this.spinnerLoading=true
      this.spinnerLoaded=false


   }
  }