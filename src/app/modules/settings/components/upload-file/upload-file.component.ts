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

  @Input() urlBase: string;
  @Output() fileUploaded: EventEmitter<string> = new EventEmitter();

  urlImagenSubida: string;

  imageForm: FormGroup;
  image: any;
  file: any;

  constructor(private uploadService: UpladFileService,
    private router: Router) {
    this.urlBase = '';
    this.urlImagenSubida = '';
    this.imageForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      file: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {

  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.count() > 0) {
      const file: File = event.target.files[0];
      this.uploadService.uploadFirebase(file).then((snapshot) => {
        this.urlImagenSubida = snapshot.metadata.name + "?alt=media";
        this.fileUploaded.emit(this.urlImagenSubida);
      });
    }
    /**
    let formData = new FormData();
    formData.append("file", file);

    this.uploadService.upload(this.urlBase, formData).subscribe(data=>
      {
        this.urlImagenSubida = data.fileName;
        this.fileUploaded.emit(this.urlImagenSubida);
      },error=>{
        console.log(error);
      })**/
  }

}
