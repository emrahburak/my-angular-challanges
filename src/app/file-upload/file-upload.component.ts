import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileUpload:File | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(e:any){
    console.log(e.result);
    this.fileUpload = e.files.item(0);
    // this.fileUpload = files.item(0);
    console.log(this.fileUpload);
    if(this.fileUpload){
      console.log(this.fileUpload.name);
    }

  }

}
