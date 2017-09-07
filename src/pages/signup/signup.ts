import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { TabsPage } from '../../pages/tabs/tabs';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'password'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private fauth: AngularFireAuth, private fdb: AngularFireDatabase, private keyboard: Keyboard) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup() {
    console.log('in signup function');
    this.keyboard.close();
    this.fauth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password).then((result)=> {
      this.writeUserData(this.fauth.auth.currentUser.uid, this.account.name, this.account.email);
    }).then(() => {
      this.navCtrl.setRoot(TabsPage);
    });
  }

  writeUserData(key, name, email) {
    console.log('in writeUserDAta');
    this.fdb.database.ref('users/').child(key).set({
      email: email,
      metadata: {
        name: name
      }
    });
  }

}
