import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image,  stateView } from 'src/app/models/image.interface';
import { ImagenCompleta } from 'src/app/models/image.interface';





@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  //images:Image[]=[]
  images:ImagenCompleta; 
  tema:string;
  gridView:boolean;
  cardView:boolean;
  displayedColumns: string[] = ['id', 'likes', 'tags', 'previewURL'];
  state:stateView;
  spinner:boolean=true
  
  

  constructor(private imagesServices:ImagesService) {  
  }

  ngOnInit(){

    this.state = JSON.parse(localStorage.getItem('temaView')) 
    this.tema= this.state.tema
   // this.enviar()   
    this.vista(this.state.card, this.state.table)  
  
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
 
  
  vista(cards:boolean, tables:boolean){
    
    this.cardView=cards;
    this.gridView=tables; 
    localStorage.setItem('temaView', JSON.stringify({"tema":this.tema, "card":this.cardView, "table":this.gridView}) );
    
    this.enviar();
   
    
    
  
  }

  clear(){
    this.tema=''    
    localStorage.clear()
    this.enviar()
  }

}
  function refreshBrowserTab() {
    throw new Error('Function not implemented.');
  }

