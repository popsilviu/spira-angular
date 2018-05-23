import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  selectedFile: File;
  reader;

  constructor() { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.reader = new FileReader();
    this.reader.onload = () => {
      console.log(this.reader.result);
    };
    this.reader.readAsText(this.selectedFile);
  }
}
