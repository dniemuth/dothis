webpackJsonp([9],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientInfoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClientInfoModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClientInfoModalPage = (function () {
    function ClientInfoModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.data = this.navParams.get('info') || {};
        this.keys = Object.keys(this.navParams.get('info'));
    }
    ClientInfoModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientInfoModalPage');
        console.log(this.navParams.get('info'));
    };
    ClientInfoModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(this.data);
    };
    return ClientInfoModalPage;
}());
ClientInfoModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-client-info-modal',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\client-info-modal\client-info-modal.html"*/'<!--\n\n  Generated template for the ClientInfoModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons>\n\n      <button ion-button class="clientClose" (click)="closeModal()"><ion-icon name="arrow-back"></ion-icon></button>\n\n    </ion-buttons>\n\n    <ion-title><ion-textarea type="text" [(ngModel)]="data.secTitle" >{{data.secTitle}}</ion-textarea></ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list *ngFor="let key of keys">\n\n    <ion-item>\n\n      <!-- <ion-label floating>{{key}}</ion-label>\n\n      <ion-input type="date" [(ngModel)]="data[key]"></ion-input> -->\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\client-info-modal\client-info-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], ClientInfoModalPage);

//# sourceMappingURL=client-info-modal.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_info_modal_client_info_modal__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ClientModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClientModalPage = (function () {
    function ClientModalPage(navCtrl, navParams, viewCtrl, modal, fdb, fauth, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this.fdb = fdb;
        this.fauth = fauth;
        this.alert = alert;
        this.name = this.navParams.get('Name');
        this.address = this.navParams.get('Address') || '';
        this.clientType = this.navParams.get('ClientType') || '';
    }
    ClientModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskModalPage');
        //list of client detail sections
        this.clientDetails = this.fdb.list('clients/details/' + this.fauth.auth.currentUser.uid + '/' + this.navParams.get('$key'), {
            query: {
                orderByChild: 'SecTitle',
            }
        });
    };
    ClientModalPage.prototype.addSection = function (event, fab) {
        var _this = this;
        fab.close();
        var prompt = this.alert.create({
            title: 'New Section',
            message: 'Enter a name for this new section',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Section Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('saved clicked');
                        console.log(data);
                        _this.fdb.database.ref('clients/details/' + _this.fauth.auth.currentUser.uid + '/' + _this.navParams.get('$key')).push({
                            secTitle: data.title
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ClientModalPage.prototype.closeModal = function () {
        var obj = {
            'address': this.address,
            'name': this.name,
            'clientType': this.clientType
        };
        this.viewCtrl.dismiss(obj);
    };
    ClientModalPage.prototype.clientInfo = function (infoType) {
        var _this = this;
        //console.log(this);
        this.fdb.database.ref('clients/details/' + this.fauth.auth.currentUser.uid + '/' + this.navParams.get('$key') + '/' + infoType).once('value').then(function (data) {
            console.log(data.val());
            var info = { info: data.val() };
            var clientInfoModal = _this.modal.create(__WEBPACK_IMPORTED_MODULE_4__client_info_modal_client_info_modal__["a" /* ClientInfoModalPage */], info);
            clientInfoModal.present();
            clientInfoModal.onDidDismiss(function (data) {
                _this.fdb.database.ref('clients/details/' + _this.fauth.auth.currentUser.uid + '/' + _this.navParams.get('$key') + '/' + infoType).update(data);
            });
        });
    };
    ClientModalPage.prototype.deleteClient = function (client) {
        this.viewCtrl.dismiss(null);
    };
    return ClientModalPage;
}());
ClientModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-client-modal',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\client-modal\client-modal.html"*/'<!--\n\n  Generated template for the ClientModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-buttons>\n\n        <button ion-button class="clientClose" (click)="closeModal()"><ion-icon name="arrow-back"></ion-icon></button>\n\n      </ion-buttons>\n\n        <ion-segment class="client-type" [(ngModel)]="clientType" color="primary">\n\n          <ion-segment-button value="Buyer">\n\n            Buyer\n\n          </ion-segment-button>\n\n          <ion-segment-button value="Seller">\n\n            Seller\n\n          </ion-segment-button>\n\n        </ion-segment>  \n\n      \n\n      <ion-title><ion-textarea type="text" [(ngModel)]="name" >{{name}}</ion-textarea></ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-fab top right edge #fab>\n\n      <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n      <ion-fab-list side="bottom">\n\n        <button (click)="addSection($event, fab)" id="addSectionLabel">Add Section</button>\n\n      </ion-fab-list>\n\n    </ion-fab>\n\n    <ion-card>\n\n      <ion-item primary>\n\n          <ion-label floating>{{ \'Address\' }}</ion-label>\n\n          <ion-input type="text" [(ngModel)]="address" name="address"></ion-input>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card *ngFor="let section of clientDetails | async" (click)="clientInfo(section.$key)">\n\n        <ion-item >\n\n          <ion-label>{{section.secTitle}}</ion-label>\n\n        </ion-item>     \n\n    </ion-card>\n\n\n\n  </ion-content>\n\n\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-buttons end>\n\n        <button ion-button class="clientDelete" (click)="deleteClient(this)"><ion-icon name="ios-trash"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\client-modal\client-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ClientModalPage);

//# sourceMappingURL=client-modal.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_modal_client_modal__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ClientsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClientsPage = (function () {
    function ClientsPage(navCtrl, navParams, modal, fdb, fauth, keyboard, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.fdb = fdb;
        this.fauth = fauth;
        this.keyboard = keyboard;
        this.platform = platform;
        this.addNew = false;
        this.clientName = '';
        this.clientType = '';
        this.propertyAddress = '';
        this.isApp = true;
    }
    ClientsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TasksPage');
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.isApp = false;
        }
        //list of clients
        this.clients = this.fdb.list('clients/common/' + this.fauth.auth.currentUser.uid, {
            query: {
                orderByChild: 'Name',
            }
        });
    };
    ClientsPage.prototype.createNewClient = function () {
        var _this = this;
        this.addNew = true;
        setTimeout(function () {
            console.log(_this.client);
            _this.client.setFocus();
            if (_this.isApp) {
                _this.keyboard.show();
            }
        }, 150);
    };
    ClientsPage.prototype.addNewClient = function () {
        // this.fdb.database.ref('tasks/' + this.fauth.auth.currentUser.uid).once('value').then((snapshot) => {
        //   console.log(snapshot.val());
        // });
        if (this.clientName) {
            this.fdb.database.ref('clients/common/' + this.fauth.auth.currentUser.uid).push({
                Name: this.clientName,
                Created: __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP,
                Author: this.fauth.auth.currentUser.uid,
                Modified: __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP,
                Editor: this.fauth.auth.currentUser.uid
            });
            this.addNew = false;
            this.clientName = '';
        }
    };
    ClientsPage.prototype.editClient = function (client) {
        var _this = this;
        console.log(client);
        var clientModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__client_modal_client_modal__["a" /* ClientModalPage */], client);
        clientModal.present();
        clientModal.onDidDismiss(function (data) {
            console.log(data);
            if (data === null) {
                _this.deleteClient(client);
            }
            else {
                _this.fdb.database.ref('clients/common/' + _this.fauth.auth.currentUser.uid + '/' + client.$key).update({
                    Address: data.address,
                    Name: data.name,
                    ClientType: data.clientType,
                    Modified: __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP,
                    Editor: _this.fauth.auth.currentUser.uid
                });
            }
        });
    };
    ClientsPage.prototype.deleteClient = function (client) {
        this.fdb.database.ref('clients/common/' + this.fauth.auth.currentUser.uid + '/' + client.$key).remove();
    };
    return ClientsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('client'),
    __metadata("design:type", Object)
], ClientsPage.prototype, "client", void 0);
ClientsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-clients',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\clients\clients.html"*/'<!--\n\n  Generated template for the ClientsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>\n\n          <div id="navTitleContainer">\n\n            <span id="navTitle">Clients</span>\n\n            <img src="./assets/images/navLogo.png" id="navLogo" alt="ZenEstate" />\n\n          </div>\n\n      </ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <button *ngIf="!addNew" ion-button round class="addButton" (click)="createNewClient()"><ion-icon name="add"></ion-icon></button>\n\n  \n\n  <div class="newClientField" *ngIf="addNew">\n\n    <ion-item>\n\n      <ion-input #client name="addClientField" placeholder="New Client" [(ngModel)]="clientName"></ion-input>\n\n      <button class="submit" (click)="addNewClient()" item-right><ion-icon class="clientSubmit" name="ios-arrow-dropup-outline"></ion-icon></button>\n\n    </ion-item>\n\n  </div>\n\n  \n\n  <ion-content padding (click)="addNew = false">\n\n  \n\n    <ion-list>\n\n      <div class="clientWrapper" *ngFor="let client of clients | async" (click)="editClient(client)">\n\n        <div class="clientTop">\n\n          <h3 class="clientName">{{client.Name}}</h3>\n\n          <p class="clientType">{{client.ClientType}}</p>\n\n        </div>\n\n        <p class="clientDetails">{{client.Address}}</p>\n\n      </div>\n\n    </ion-list>\n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\clients\clients.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], ClientsPage);

//# sourceMappingURL=clients.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TaskModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TaskModalPage = (function () {
    function TaskModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.title = this.navParams.get('Title');
        this.date = this.navParams.get('DueDate') || '';
        this.notes = this.navParams.get('Notes') || '';
        this.created = new Date(this.navParams.get('Created')) || null;
        this.createdDisplay = '';
    }
    TaskModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskModalPage');
        this.createdDisplay = this.convertDate();
    };
    TaskModalPage.prototype.closeModal = function () {
        var obj = {
            'date': this.date,
            'title': this.title,
            'notes': this.notes
        };
        this.viewCtrl.dismiss(obj);
    };
    TaskModalPage.prototype.deleteTask = function () {
        this.viewCtrl.dismiss(null);
    };
    TaskModalPage.prototype.convertDate = function () {
        console.log('converting date');
        if (this.created != null) {
            var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var day = this.created.getDay();
            var date = this.created.getDate();
            var month = this.created.getMonth();
            var year = this.created.getFullYear().toString();
            if (year == new Date().getFullYear().toString()) {
                year = '';
            }
            var datestring = days[day] + ', ' + months[month] + ' ' + date + ' ' + year;
            return datestring;
        }
        else {
            return '';
        }
    };
    return TaskModalPage;
}());
TaskModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-task-modal',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\task-modal\task-modal.html"*/'<!--\n\n  Generated template for the TaskModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-buttons item-left>\n\n      <button ion-button class="taskClose" (click)="closeModal()"><ion-icon name="arrow-back"></ion-icon></button>\n\n    </ion-buttons>\n\n    <ion-title><ion-textarea type="text" [(ngModel)]="title" >{{title}}</ion-textarea></ion-title>    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>{{ \'Due Date\' }}</ion-label>\n\n      <ion-input type="date" [(ngModel)]="date" name="date"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating> {{ \'Notes\' }}  </ion-label>\n\n      <ion-textarea type="text" [(ngModel)]="notes" name="notes" placeholder=""></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    Created: {{createdDisplay}}\n\n    <ion-buttons end>\n\n      <button ion-button class="taskDelete" (click)="deleteTask(this)"><ion-icon name="ios-trash"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\task-modal\task-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], TaskModalPage);

//# sourceMappingURL=task-modal.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_modal_task_modal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TasksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TasksPage = (function () {
    function TasksPage(navCtrl, navParams, modal, fdb, fauth, keyboard, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.fdb = fdb;
        this.fauth = fauth;
        this.keyboard = keyboard;
        this.platform = platform;
        this.addNew = false;
        this.taskTitle = '';
        this.showCompleted = false;
        this.isApp = true;
    }
    TasksPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TasksPage');
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            this.isApp = false;
        }
        //list of in progress tasks
        this.tasks = this.fdb.list('tasks/' + this.fauth.auth.currentUser.uid, {
            query: {
                orderByChild: 'Completed',
                equalTo: false
            }
        }).map(function (tasks) { return tasks.sort(_this.orderByDueDate); });
        //list of completed tasks
        this.completedTasks = this.fdb.list('tasks/' + this.fauth.auth.currentUser.uid, {
            query: {
                orderByChild: 'Completed',
                equalTo: true
            }
        }).map(function (tasks) { return tasks.sort(_this.orderByCompletedDate); });
    };
    TasksPage.prototype.createNewTask = function () {
        var _this = this;
        this.addNew = true;
        setTimeout(function () {
            console.log(_this.task);
            _this.task.setFocus();
            if (_this.isApp) {
                _this.keyboard.show();
            }
        }, 150);
    };
    TasksPage.prototype.addNewTask = function () {
        // this.fdb.database.ref('tasks/' + this.fauth.auth.currentUser.uid).once('value').then((snapshot) => {
        //   console.log(snapshot.val());
        // });
        if (this.taskTitle) {
            this.fdb.database.ref('tasks/' + this.fauth.auth.currentUser.uid).push({
                Title: this.taskTitle,
                Completed: false,
                Notes: '',
                DueDate: '',
                Created: __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP,
                Author: this.fauth.auth.currentUser.uid,
                Modified: __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP,
                Editor: this.fauth.auth.currentUser.uid
            });
            this.addNew = false;
            this.taskTitle = '';
        }
    };
    TasksPage.prototype.editTask = function (task) {
        var _this = this;
        console.log(task);
        var taskModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__task_modal_task_modal__["a" /* TaskModalPage */], task);
        taskModal.present();
        taskModal.onDidDismiss(function (data) {
            if (data == null) {
                _this.deleteTask(task);
            }
            else {
                _this.fdb.database.ref('tasks/' + _this.fauth.auth.currentUser.uid + '/' + task.$key).update({
                    DueDate: data.date,
                    Title: data.title,
                    Notes: data.notes,
                    Modified: __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP,
                    Editor: _this.fauth.auth.currentUser.uid
                });
            }
        });
    };
    TasksPage.prototype.deleteTask = function (task) {
        this.fdb.database.ref('tasks/' + this.fauth.auth.currentUser.uid + '/' + task.$key).remove();
    };
    TasksPage.prototype.toggleComplete = function (task) {
        console.log(task);
        this.fdb.database.ref('tasks/' + this.fauth.auth.currentUser.uid + '/' + task.$key).update({
            Completed: !task.Completed,
            CompletedDate: __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP
        });
        //console.log(task.Completed);
    };
    TasksPage.prototype.showCompletedTasks = function () {
        console.log('showing completed tasks');
        this.showCompleted = !this.showCompleted;
        // this.fdb.database.ref('/tasks/' + this.fauth.auth.currentUser.uid)
        // .orderByChild('Completed').equalTo(true).once('value').then((snapshot) => {
        //   this.completedTasks = snapshot.val();
        //   console.log(snapshot.val());
        // }); 
    };
    TasksPage.prototype.orderByDueDate = function (a, b) {
        console.log(a.DueDate + '; ' + b.DueDate);
        if (a.DueDate < b.DueDate) {
            if (a.DueDate == '' || a.DueDate == null) {
                return 1;
            }
            else {
                return -1;
            }
        }
        if (a.DueDate > b.DueDate) {
            if (b.DueDate == '' || a.DueDate == null) {
                return -1;
            }
            else {
                return 1;
            }
        }
        return 0;
    };
    TasksPage.prototype.orderByCompletedDate = function (a, b) {
        var aDate = new Date(a.CompletedDate);
        var bDate = new Date(b.CompletedDate);
        console.log(aDate);
        if (aDate < bDate)
            return 1;
        if (aDate > bDate)
            return -1;
        return 0;
    };
    return TasksPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('task'),
    __metadata("design:type", Object)
], TasksPage.prototype, "task", void 0);
TasksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tasks',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\tasks\tasks.html"*/'<!--\n\n  Generated template for the TasksPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <div id="navTitleContainer">\n\n        <span id="navTitle">Tasks</span>\n\n        <img src="./assets/images/navLogo.png" id="navLogo" alt="ZenEstate" />\n\n      </div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<button *ngIf="!addNew" ion-button round class="addButton" (click)="createNewTask()"><ion-icon name="add"></ion-icon></button>\n\n\n\n<div class="newTaskField" *ngIf="addNew">\n\n  <ion-item>\n\n    <ion-input #task name="addTaskField" placeholder="New Task" [(ngModel)]="taskTitle"></ion-input>\n\n    <button class="submit" (click)="addNewTask()" item-right><ion-icon class="taskSubmit" name="ios-arrow-dropup-outline"></ion-icon></button>\n\n  </ion-item>\n\n</div>\n\n\n\n<ion-content padding (click)="addNew = false">\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks | async" [ngClass]="{\'completed\': task.Completed}" >\n\n      <ion-checkbox mode="ios" [ngModel]="task.Completed" (ionChange)="toggleComplete(task)" ></ion-checkbox>\n\n      <ion-label (click)="editTask(task)">{{task.Title}}</ion-label>\n\n      <div class="item-note" item-right (click)="editTask(task)">\n\n        {{task.DueDate}}\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div padding>\n\n    <button ion-button color="primary" block (click)="showCompleted = !showCompleted" id="completedTasksBTN">\n\n      <span *ngIf="!showCompleted" id="showCompletedText">{{\'Show Completed Tasks\'}}</span>\n\n      <span *ngIf="showCompleted" id="completedText">{{ \'Completed Tasks\' }}</span>\n\n    </button>\n\n  </div>\n\n\n\n  <ion-list id="completedTasks" *ngIf="showCompleted" >\n\n    <ion-item *ngFor="let ctask of completedTasks | async" [ngClass]="{\'completed\': ctask.Completed}">\n\n      <ion-checkbox mode="ios" [ngModel]="ctask.Completed" (ionChange)="toggleComplete(ctask)" ></ion-checkbox>\n\n      <ion-label (click)="editTask(ctask)">{{ctask.Title}}</ion-label>\n\n      <div class="item-note" item-right (click)="editTask(ctask)">\n\n        {{ctask.DueDate}}\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\tasks\tasks.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], TasksPage);

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, fauth, fdb, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fauth = fauth;
        this.fdb = fdb;
        this.keyboard = keyboard;
        this.account = {
            name: 'Test Human',
            email: 'test@example.com',
            password: 'password'
        };
        this.signupError = false;
        this.errorMessage = "There was an issue";
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        console.log('in signup function');
        this.keyboard.close();
        this.fauth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password).then(function (result) {
            _this.writeUserData(_this.fauth.auth.currentUser.uid, _this.account.name, _this.account.email);
        }).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (error) {
            _this.signupError = true;
            _this.errorMessage = error.message;
        });
    };
    SignupPage.prototype.writeUserData = function (key, name, email) {
        console.log('in writeUserDAta');
        this.fdb.database.ref('users/').child(key).set({
            email: email,
            metadata: {
                name: name
            }
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>signup</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   <div>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{\'Name\'}}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{\'Email\'}}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{\'Password\'}}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <div padding class="signup-error" *ngIf = "signupError">\n\n        <p>{{errorMessage}}</p>\n\n      </div>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block (click)="doSignup()">{{\'Create New Account\'}}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, fauth, fdb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fauth = fauth;
        this.fdb = fdb;
        this.account = {
            name: 'Derek',
            email: 'test@test.com',
            photo: 'http://photo.com'
        };
        this.editmode = false;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        var user = this.fauth.auth.currentUser;
        this.account.name = user.displayName;
        this.account.email = user.email;
        this.account.photo = user.photoURL;
    };
    ProfilePage.prototype.toggleEditMode = function () {
        this.editmode = !this.editmode;
    };
    ProfilePage.prototype.doSignUp = function () {
        var _this = this;
        var user = this.fauth.auth.currentUser;
        user.updateProfile({
            displayName: this.account.name,
            photoURL: this.account.photo
        }).then(function () {
            _this.toggleEditMode();
            _this.account.name = user.displayName;
            _this.account.photo = user.photoURL;
        });
    };
    ProfilePage.prototype.signOut = function () {
        this.fauth.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Profile</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="top" *ngIf="!editmode">\n\n      <img src="{{account.photo}}">\n\n      <h3>{{account.name}}</h3>\n\n      <p>{{account.email}}</p>\n\n    </div>\n\n    <div class="topPrime" *ngIf="editmode">\n\n      <form>\n\n        <ion-list>\n\n  \n\n          <ion-item>\n\n            <ion-label fixed>{{ \'NAME\' }}</ion-label>\n\n            <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <ion-label fixed>{{ \'EMAIL\' }}</ion-label>\n\n            <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <ion-label fixed>{{ \'PHOTO\' }}</ion-label>\n\n            <ion-input type="text" [(ngModel)]="account.photo" name="photo"></ion-input>\n\n          </ion-item>\n\n  \n\n          <div padding>\n\n            <button ion-button color="primary" block (click)="doSignUp()">{{ \'Update Account\' }}</button>\n\n          </div>\n\n  \n\n        </ion-list>\n\n      </form>\n\n    </div>\n\n    <div class="lower">\n\n      <ion-list>\n\n        <ion-item (click)="toggleEditMode()">Update Profile</ion-item>\n\n        <ion-item>Manage Subscription</ion-item>\n\n        <ion-item>Linked Accounts</ion-item>\n\n        <ion-item (click)="signOut()" >Sign Out</ion-item>\n\n      </ion-list>\n\n    </div>\n\n  \n\n  </ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/client-info-modal/client-info-modal.module": [
		460,
		8
	],
	"../pages/client-modal/client-modal.module": [
		461,
		7
	],
	"../pages/clients/clients.module": [
		462,
		6
	],
	"../pages/conversations/conversations.module": [
		468,
		5
	],
	"../pages/login/login.module": [
		466,
		4
	],
	"../pages/profile/profile.module": [
		467,
		3
	],
	"../pages/signup/signup.module": [
		465,
		2
	],
	"../pages/task-modal/task-modal.module": [
		463,
		1
	],
	"../pages/tasks/tasks.module": [
		464,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConversationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConversationsPage = (function () {
    function ConversationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConversationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConversationsPage');
    };
    return ConversationsPage;
}());
ConversationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conversations',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\conversations\conversations.html"*/'<!--\n\n  Generated template for the ConversationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Conversations</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>Pardon our dust...</h2>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\conversations\conversations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ConversationsPage);

//# sourceMappingURL=conversations.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(324);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tasks_tasks__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_conversations_conversations__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_task_modal_task_modal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_clients_clients__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_client_modal_client_modal__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_client_info_modal_client_info_modal__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseConfig = {
    apiKey: "AIzaSyDu_v9sj0rs41gDzvWZeUCWz357uuozlQQ",
    authDomain: "cms-skin.firebaseapp.com",
    databaseURL: "https://cms-skin.firebaseio.com",
    projectId: "cms-skin",
    storageBucket: "cms-skin.appspot.com",
    messagingSenderId: "111138137302"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tasks_tasks__["a" /* TasksPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_conversations_conversations__["a" /* ConversationsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_task_modal_task_modal__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_clients_clients__["a" /* ClientsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_client_modal_client_modal__["a" /* ClientModalPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_client_info_modal_client_info_modal__["a" /* ClientInfoModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/client-info-modal/client-info-modal.module#ClientInfoModalPageModule', name: 'ClientInfoModalPage', segment: 'client-info-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/client-modal/client-modal.module#ClientModalPageModule', name: 'ClientModalPage', segment: 'client-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/clients/clients.module#ClientsPageModule', name: 'ClientsPage', segment: 'clients', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/task-modal/task-modal.module#TaskModalPageModule', name: 'TaskModalPage', segment: 'task-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tasks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/conversations/conversations.module#ConversationsPageModule', name: 'ConversationsPage', segment: 'conversations', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tasks_tasks__["a" /* TasksPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_conversations_conversations__["a" /* ConversationsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_task_modal_task_modal__["a" /* TaskModalPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_clients_clients__["a" /* ClientsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_client_modal_client_modal__["a" /* ClientModalPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_client_info_modal_client_info_modal__["a" /* ClientInfoModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: "Profile", component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        console.log(page);
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\Dev\dat-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <div class="menuLogoHorz divEr">\n\n            <div class="menuSpacer">&nbsp;</div>\n\n            <div class="menuLogo"><img src="./assets/images/menuLogo.png" alt="ZenEstate" /></div>\n\n            <div class="menuSpacer">&nbsp;</div>\n\n        </div>\n\n        <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="menuNavBtn">\n\n                {{p.title}}\n\n            </button>\n\n        </ion-list>\n\n\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu" class="whiteMenu"></ion-icon>\n\n    </button>\n\n    <ion-title class="toolbar-background"><img src="./assets/images/navLogo.png" id="navLogo" alt="ZenEstate" /></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to ZenEstate!</h2>\n\n  <p>\n\n    This is the home page of ZenEstate. In future builds\n\n    this screen will hold your "Today\'s Tasks" as well as\n\n    your "Upcoming Tasks". \n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clients_clients__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_tasks__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__tasks_tasks__["a" /* TasksPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__clients_clients__["a" /* ClientsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Tasks" tabIcon="ios-list"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Transactions" tabIcon="folder"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fauth, fdb, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fauth = fauth;
        this.fdb = fdb;
        this.keyboard = keyboard;
        this.account = {
            name: 'Test Human',
            email: '',
            password: ''
        };
        this.loginError = false;
    }
    LoginPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log('view is about to load');
        this.fauth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                console.log('no user');
            }
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        console.log('in login function');
        this.keyboard.close();
        this.fauth.auth.signInWithEmailAndPassword(this.account.email, this.account.password).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (error) {
            _this.loginError = true;
            console.log(error);
        });
    };
    LoginPage.prototype.createAccount = function () {
        console.log('in createAccount()');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.toHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"c:\Dev\dat-app\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <div id="navTitleContainer">\n\n        <span id="navTitle">Login</span>\n\n        <img src="./assets/images/navLogo.png" id="navLogo" alt="ZenEstate" />\n\n      </div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n          <div class="loginLogo"><img src="./assets/images/ZenEstateAlt.png" alt="ZenEstateAlt" /></div>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{\'Email\'}}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{\'Password\'}}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block (click)="doLogin()" >{{\'Login\'}}</button>\n\n      </div>\n\n\n\n      <div padding class="login-error" *ngIf = "loginError">\n\n        <p>Your email or password is incorrect.</p>\n\n      </div>\n\n\n\n      <div padding>\n\n        <p class="createAccount" (click)="createAccount()" align="center">{{\'Create New Account\'}}</p>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\Dev\dat-app\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_keyboard__["a" /* Keyboard */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map