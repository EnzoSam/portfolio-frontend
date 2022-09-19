import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpladFileService } from '../../services/uplad-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input() urlBase:string;
  @Output() fileUploaded = new EventEmitter<string>();
  
  urlImagenSubida:string;

  imageForm:FormGroup;
  image:any;
  file:any;

  constructor(private uploadService: UpladFileService,
    private router:Router) 
  { 
    this.urlBase = '';
    this.urlImagenSubida = '';
    this.imageForm=new FormGroup({
      name: new FormControl(null,Validators.required),
      file:new FormControl(null, Validators.required)
  });    
  }

  ngOnInit(): void {

  }  

  onFileChange(event:any){
    if(event.target.files && event.target.files.length>0){//Identifica si hay archivos
        const file=event.target.files[0];
        if(file.type.includes("image")){//Evaluar si es una imagen
            const reader= new FileReader();
            reader.readAsDataURL(file);
            reader.onload=function load(this: any){
                this.image=reader.result; //Asignar al thumbnail
                this.uploadService.addPicture('file01',file,this.urlBase)
                .subscribe(
                    (data:any)=>{

                      this.urlImagenSubida = data.file.filename;
                      this.archivoSubido.emit(this.urlImagenSubida);
                    },
                  (err: any)=>
                    {
                      console.log;
                    }
                )                
            }.bind(this);
            this.file=file;
        }else{
            console.log('Error al subir imagen');
        }
    }
}

}
