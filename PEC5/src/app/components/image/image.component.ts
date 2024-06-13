import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image.interface';
import { ImagenCompleta } from 'src/app/models/image.interface';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{

  images:ImagenCompleta;
  showDetails: boolean=false;
  spinner:boolean=true

  constructor(
    private imagesServices:ImagesService, 
    private activatedRoute: ActivatedRoute,
    // para redireccionar el usuario de esta vista si nosotros no tenemos un identificador valido
    private router:Router
  ) {}

  ngOnInit():void {

    const identifier=this.activatedRoute.snapshot.paramMap.get('id');
    //identifier=''



    this.imagesServices.getImageById(identifier).subscribe((image) =>{

      setTimeout(()=>{
        this.spinner=false},1000)
      
      if (!image){
        return this.router.navigateByUrl('')
      }

      this.images=image;
     
      return ''
      
    });

    this.spinner=true
  }

  changeShowDetails(details:boolean) {

    this.showDetails = details
  }

}
