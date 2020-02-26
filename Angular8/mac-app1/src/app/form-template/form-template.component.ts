import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  
  topics = ['Angular', 'React', 'Vue'];

  userModel: User = new User('Rob', 'rob@email.com', 333666455, 'Vue', 'morning', true);
  
  constructor() { }

  ngOnInit(): void {
  }

}
