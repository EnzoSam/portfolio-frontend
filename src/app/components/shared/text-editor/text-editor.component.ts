import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Input() text = '';
  @Output() save: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  saveClick()
  {
    this.save.emit(this.text);
  }
}
