import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  topicHasError = true;
  topics = ['Angular', 'React', 'Vue'];

  userModel: User = new User('', 'rob@email.com', 333666455, 'Vue', 'morning', true);
  
  constructor() { }

  ngOnInit(): void {
    // console.log(userForm);

  }

  showName(name, form){
    // form : FromGroup
    // form.controls.name FormControl
    
    console.info(name.value);
  }

  submitForm(form){
    console.info('form submitted');

  }

  validateTopic(topic){
    console.log('topic changed');
    if(topic === 'default'){
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }
}
