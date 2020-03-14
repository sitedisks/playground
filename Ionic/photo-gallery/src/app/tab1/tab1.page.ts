import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  newTodo: string = '';
  todos;
  constructor(private data: DataService, public alertController: AlertController) { }

  ngOnInit(): void {
    this.data.getData().subscribe(
      data => {
        this.todos = data;
        console.log(this.todos);
      }
    );
  }

  firstClick() {
    console.log('button clicked');

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  addTodo() {
    console.log('add todo');
    let data = {
      title: this.newTodo,
      complete: false
    };
    this.data.addData(data).subscribe(
      data => {
        console.log(data);
        this.todos.push(data);
        this.newTodo = '';
      }
    );
  }

  toggleTodo(todo) {
    console.log('toggle the todo: ' + todo.id + ' - ' + todo.complete);
    this.data.updateData(todo).subscribe(
      data => {
        console.log('updated: ' + JSON.stringify(data));
      }
    );

  }

  async removeTodo(todo) {
    console.log('remove the todo: ' + JSON.stringify(todo));

    const alert = await this.alertController.create({
      header: 'Delete!',
      message: 'Confirm "' + todo.title + '" will be removed!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.data.removeData(todo).subscribe(
              data => {
                console.log('deleted: ' + JSON.stringify(data));
                this.todos = this.todos.filter((t) => t.id !== todo.id);
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }
}
