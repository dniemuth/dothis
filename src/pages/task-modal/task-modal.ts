import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TaskModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-modal',
  templateUrl: 'task-modal.html',
})
export class TaskModalPage {

  title = this.navParams.get('Title');
  created = new Date(this.navParams.get('Created')) || null;
  createdDisplay = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskModalPage');

    this.createdDisplay = this.convertDate();
    
    
  }

  closeModal() {
    let obj = {
      'title': this.title,
    } 
    this.viewCtrl.dismiss(obj);
  }

  deleteTask() {
    this.viewCtrl.dismiss(null);
  }

  convertDate() {
    console.log('converting date');

    if(this.created != null) {
      let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      let day = this.created.getDay();
      let date = this.created.getDate();
      let month =  this.created.getMonth();
      let year = this.created.getFullYear().toString();
      if(year == new Date().getFullYear().toString()) { year = ''}
      let datestring = days[day] + ', ' + months[month] + ' ' + date + ' ' + year;
      return datestring;
    } else {
      return '';
    }
  }

}
