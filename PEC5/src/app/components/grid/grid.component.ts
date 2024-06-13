import { Component, Input } from '@angular/core';
import { ImagenCompleta } from 'src/app/models/image.interface';
import { stateView } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  images:ImagenCompleta; 
  @Input() tema:string;
  state:stateView;
  spinner:boolean=true
  

  constructor(private imagesServices:ImagesService) { 
   
  }

  ngOnInit(){

    
    this.enviar()   
    console.log("en grid components: ", this.tema)
    
  
  }

  enviar(){    
      
    this.imagesServices
    .getAllImages(this.tema)
    .subscribe((imgCompleta) =>{      
     
       setTimeout(()=>{
        this.spinner=false},1000);   
        this.images=imgCompleta                      
           
    })
    
    this.spinner=true
    
  } 
  

}


