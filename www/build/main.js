webpackJsonp([0],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeRatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_currency__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base__ = __webpack_require__(29);
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
 * Generated class for the ExchangeRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExchangeRatesPage = (function () {
    function ExchangeRatesPage(navCtrl, currencyProvider, baseSingleton, navParams) {
        this.navCtrl = navCtrl;
        this.currencyProvider = currencyProvider;
        this.baseSingleton = baseSingleton;
        this.navParams = navParams;
        this.currencies = [];
        this.currency = '';
        this.rates = [];
        this.amount = 1;
        this.enterTimeout = null;
    }
    ExchangeRatesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.currencyProvider.currencyList().then(function (list) {
            _this.currencies = list.results;
            _this.currencyProvider.defaultCurrencyByUser(_this.baseSingleton.currentUserPhone, 'LoadingEntry').then(function (data) {
                if (data.currency) {
                    _this.currency = data.currency;
                }
            }, function (err) {
                _this.currency = 'SEK';
            });
        }, function (err) { });
    };
    ExchangeRatesPage.prototype.amountEntered = function (e) {
        var _this = this;
        if (e.keyCode === 13) {
            clearTimeout(this.enterTimeout);
            this.loadRates();
        }
        else {
            if (this.enterTimeout !== null) {
                clearTimeout(this.enterTimeout);
            }
            this.enterTimeout = setTimeout(function () {
                _this.loadRates();
            }, 1500);
        }
    };
    ExchangeRatesPage.prototype.loadRates = function () {
        var _this = this;
        this.currencyProvider.currencyRate(this.currency, this.amount).then(function (rate) {
            _this.rates = rate;
        }, function (err) { });
    };
    ExchangeRatesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-exchange-rates',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\exchange-rates\exchange-rates.html"*/'<!--\n\n  Generated template for the ExchangeRatesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Exchange rates</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list class="top-block">\n\n    <p class="select-name">Select your local currency</p>\n\n    <ion-item class="top-block-item">\n\n      <ion-input type="tel"\n\n                 (keydown)="amountEntered($event)"\n\n                 [(ngModel)]="amount"\n\n      ></ion-input>\n\n      <ion-select\n\n        [(ngModel)]="currency"\n\n        (ionChange)="loadRates()"\n\n        color="primary"\n\n        class="select-currency-container"\n\n      >\n\n        <ion-option *ngFor="let currencyItem of currencies">{{currencyItem.currency}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n  <p class="rate-note">\n\n        Please choose currency so we can show you a conversion to the local currency\n\n  </p>\n\n  <ion-list class="currencies-list">\n\n    <ion-item *ngFor="let rate of rates" class="currency-item">\n\n      <div class="currency-flag currency-flag-{{rate.currency.toLocaleLowerCase()}}" item-start></div>\n\n      <ion-label>\n\n        <span class="rate-currency">{{rate.currency}}</span> </ion-label>\n\n      <ion-note item-end>\n\n      {{rate.value}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\exchange-rates\exchange-rates.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ExchangeRatesPage);
    return ExchangeRatesPage;
}());

//# sourceMappingURL=exchange-rates.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePaymentMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_add_card__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_list_contact_list__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_submit_transaction_submit__ = __webpack_require__(70);
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
 * Generated class for the ChoosePaymentMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoosePaymentMethodPage = (function () {
    function ChoosePaymentMethodPage(navCtrl, transactionsProvider, baseService, alertCtrl, viewCtrl, events, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.transactionsProvider = transactionsProvider;
        this.baseService = baseService;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.navParams = navParams;
        this.creditCards = [];
        this.source = this.navParams.get('source');
        this.paymentRequestTransaction = this.navParams.get('transaction');
        events.subscribe('paymentMethods:cardAdded', function (methodID) {
            _this.selectPaymentMethod(methodID, true);
        });
    }
    ChoosePaymentMethodPage_1 = ChoosePaymentMethodPage;
    ChoosePaymentMethodPage.prototype.ionViewDidEnter = function () {
        this.baseService.paymentOptionsView = this.viewCtrl.index;
        this.loadMethods();
    };
    ChoosePaymentMethodPage.prototype.loadMethods = function () {
        var _this = this;
        this.creditCards = [];
        this.transactionsProvider.paymentMethods().then(function (data) {
            _this.paymentMethods = data.results;
            _this.paymentMethods.forEach(function (method) {
                switch (method.type) {
                    case ChoosePaymentMethodPage_1.CREDIT_CARD_METHOD:
                        _this.creditCards.push(method);
                        break;
                    case ChoosePaymentMethodPage_1.BANK_ACCOUNT_METHOD:
                        _this.bankAccountId = method.id;
                        break;
                    case ChoosePaymentMethodPage_1.SWISH_METHOD:
                        _this.swishId = method.id;
                        break;
                }
            });
        }, function (err) { });
    };
    ChoosePaymentMethodPage.prototype.selectPaymentMethod = function (methodId, fromEvent) {
        var _this = this;
        if (fromEvent === void 0) { fromEvent = false; }
        this.transactionsProvider.selectPaymentMethod(methodId).then(function (res) {
            if (fromEvent)
                _this.navCtrl.pop();
            switch (_this.source) {
                case ChoosePaymentMethodPage_1.SOURCE_PROFILE:
                    _this.navCtrl.pop();
                    break;
                case ChoosePaymentMethodPage_1.SOURCE_PAYMENT_REQUEST:
                    _this.baseService.transactionDetails.amount = _this.paymentRequestTransaction.amount;
                    _this.baseService.transactionDetails.currency = _this.paymentRequestTransaction.currency.currency;
                    _this.baseService.transactionDetails.comment = _this.paymentRequestTransaction.comment;
                    _this.baseService.transactionDetails.phoneNumber = _this.paymentRequestTransaction.user.phone_number;
                    _this.transactionsProvider.prepareTransaction({
                        amount_to: _this.baseService.transactionDetails.amount,
                        phone_number_to: _this.baseService.transactionDetails.phoneNumber,
                        currency_to: _this.baseService.transactionDetails.currency,
                        comment: _this.baseService.transactionDetails.comment
                    }).then(function (transaction) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__transaction_submit_transaction_submit__["a" /* TransactionSubmitPage */], { transaction: transaction.transaction });
                    }, function (err) { });
                    break;
                default:
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_list_contact_list__["a" /* ContactListPage */]);
            }
        }, function (err) { });
    };
    ChoosePaymentMethodPage.prototype.selectCard = function (method) {
        this.selectPaymentMethod(method.id);
    };
    ChoosePaymentMethodPage.prototype.showError = function (message) {
        var prompt = this.alertCtrl.create({
            title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
            message: message,
            buttons: [
                {
                    text: 'GOT IT',
                    handler: function (data) {
                    }
                },
            ]
        });
        prompt.present();
    };
    ChoosePaymentMethodPage.prototype.selectBankAccount = function () {
        if (!this.bankAccountId) {
            this.showError("This payment method is not available in your country");
            return;
        }
        this.selectPaymentMethod(this.bankAccountId);
    };
    ChoosePaymentMethodPage.prototype.selectSwish = function () {
        if (!this.swishId) {
            this.showError("This payment method is not available in your country");
            return;
        }
        this.selectPaymentMethod(this.swishId);
    };
    ChoosePaymentMethodPage.prototype.selectMobilePay = function () {
        this.showError("Service not yet available. We are working on it.");
    };
    ChoosePaymentMethodPage.prototype.selectVips = function () {
        this.showError("Service not yet available. We are working on it.");
    };
    ChoosePaymentMethodPage.prototype.addCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_card_add_card__["a" /* AddCardPage */]);
    };
    ChoosePaymentMethodPage.CREDIT_CARD_METHOD = 'Stripe Credit card';
    ChoosePaymentMethodPage.BANK_ACCOUNT_METHOD = 'Bank account';
    ChoosePaymentMethodPage.SWISH_METHOD = 'Swish';
    ChoosePaymentMethodPage.SOURCE_PROFILE = 1;
    ChoosePaymentMethodPage.SOURCE_PAYMENT_REQUEST = 2;
    ChoosePaymentMethodPage = ChoosePaymentMethodPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choose-payment-method',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\choose-payment-method\choose-payment-method.html"*/'<!--\n\n  Generated template for the ChoosePaymentMethodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Choose the payment method</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n <ion-card class="method-card swish"\n\n           (click)="selectSwish()"\n\n           *ngIf="baseService.currentUserCountry === \'SWE\'">\n\n   <div class="method-name">\n\n     Swish\n\n   </div>\n\n   <div class="card-image">\n\n     <img src="assets/imgs/swish_logo.svg">\n\n   </div>\n\n   <div class="action-button">\n\n     <a href="#"></a>\n\n   </div>\n\n </ion-card>\n\n  <ion-card class="method-card credit" *ngFor="let card of creditCards" (click)="selectCard(card)">\n\n    <div class="method-name">\n\n      Credit card\n\n    </div>\n\n    <div class="card-note">\n\n      Not recommended for the best rates\n\n    </div>\n\n    <div class="card-image">\n\n      <img src="assets/imgs/credit.svg">\n\n    </div>\n\n    <div class="action-button">\n\n      <a href="#">**** **** **** {{card.last_4}}</a>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card class="method-card bank" (click)="selectBankAccount()">\n\n    <div class="method-name">\n\n      Bank account\n\n    </div>\n\n    <div class="card-image">\n\n      <img src="assets/imgs/bank_icon.svg">\n\n    </div>\n\n    <div class="action-button">\n\n      <a href="#">Select method</a>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card class="method-card bank" (click)="selectMobilePay()" *ngIf="baseService.currentUserCountry === \'DNK\'">\n\n    <div class="method-name">\n\n      MobilePay\n\n    </div>\n\n    <div class="action-button">\n\n      <a href="#">Select method</a>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card class="method-card bank" (click)="selectVips()" *ngIf="baseService.currentUserCountry === \'NOR\'">\n\n    <div class="method-name">\n\n      Vips\n\n    </div>\n\n    <div class="action-button">\n\n      <a href="#">Select method</a>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card class="method-card add-card"\n\n            (click)="addCard()">\n\n    <div class="method-name">\n\n\n\n    </div>\n\n    <div class="card-image">\n\n      <img src="assets/imgs/plus_logo.svg">\n\n    </div>\n\n    <div class="action-button">\n\n      <a href="#">Add credit card</a>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\choose-payment-method\choose-payment-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChoosePaymentMethodPage);
    return ChoosePaymentMethodPage;
    var ChoosePaymentMethodPage_1;
}());

//# sourceMappingURL=choose-payment-method.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__amount_amount__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_confirm_contact_confirm__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transaction_submit_transaction_submit__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_paymentRequests__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__request_submit_request_submit__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__ = __webpack_require__(390);
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
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactListPage = (function () {
    function ContactListPage(navCtrl, contacts, platform, device, keyboard, loadingCtrl, baseService, viewCtrl, modalCtrl, transactionsProvider, paymentRequestsProvider, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.contacts = contacts;
        this.platform = platform;
        this.device = device;
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.baseService = baseService;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.transactionsProvider = transactionsProvider;
        this.paymentRequestsProvider = paymentRequestsProvider;
        this.navParams = navParams;
        this.showConfirmButton = false;
        this.contactsList = [];
        this.lastContactsList = [];
        this.keyboard.onKeyboardShow().subscribe(function () { _this.showConfirmButton = true; });
        this.keyboard.onKeyboardHide().subscribe(function () { _this.showConfirmButton = false; });
    }
    ContactListPage.prototype.isWebPlatform = function () {
        return (!this.platform.is('cordova') || this.device.platform === 'browser' || this.device.platform === 'iOS');
    };
    ContactListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.baseService.contactListView = this.viewCtrl.index;
        this.transactionsProvider.lastContacts().then(function (data) {
            _this.lastContactsList = data.results;
        }, function () { });
        if (!this.isWebPlatform() || this.device.platform == 'iOS') {
            var loader_1 = this.loadingCtrl.create({
                content: "Reading contacts...",
            });
            loader_1.present();
            this.contacts.find(['*']).then(function (contacts) {
                _this.contactsList = __WEBPACK_IMPORTED_MODULE_9_lodash__["sortBy"](contacts, [function (user) {
                        return (user.displayName || user.name.formatted);
                    }]);
                loader_1.dismiss();
            }, function (err) {
                loader_1.dismiss();
            });
        }
    };
    ContactListPage.prototype.selectContact = function (contact) {
        this.phoneNumber = contact.phoneNumbers[0].value;
        this.userName = contact.displayName || contact.name.formatted;
        this.confirm();
    };
    ContactListPage.prototype.selectContactFromLast = function (contact) {
        this.phoneNumber = contact.phone_number;
        this.confirm();
    };
    ContactListPage.prototype.confirm = function () {
        var _this = this;
        if (this.phoneNumber.indexOf('+') === -1) {
            var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__contact_confirm_contact_confirm__["a" /* ContactConfirmPage */], { userPhone: this.phoneNumber, userName: this.userName });
            contactModal.onDidDismiss(function (data) {
                _this.finalStep();
            });
            contactModal.present();
        }
        else {
            this.baseService.transactionDetails.phoneNumber = this.phoneNumber;
            this.finalStep();
        }
    };
    ContactListPage.prototype.finalStep = function () {
        var _this = this;
        switch (this.baseService.actionSource) {
            case __WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */].SOURCE_TRANSACTION:
                this.transactionsProvider.checkIfTransactionTemplate({ phone_number: this.baseService.transactionDetails.phoneNumber })
                    .then(function (transaction) {
                    _this.baseService.transactionDetails.amount = transaction.transaction.amount.amount;
                    _this.baseService.transactionDetails.currency = transaction.transaction.amount.currency;
                    _this.baseService.transactionDetails.comment = transaction.transaction.comment;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__transaction_submit_transaction_submit__["a" /* TransactionSubmitPage */], { transaction: transaction.transaction });
                }, function (err) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__amount_amount__["a" /* AmountPage */]);
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */].SOURCE_REQUEST:
                this.paymentRequestsProvider.checkIfPaymentRequestTemplate({ phone_number: this.baseService.transactionDetails.phoneNumber })
                    .then(function (paymentRequest) {
                    _this.baseService.transactionDetails.amount = paymentRequest.payment_request.amount_to;
                    _this.baseService.transactionDetails.currency = paymentRequest.payment_request.currency_to.currency;
                    _this.baseService.transactionDetails.comment = paymentRequest.payment_request.comment;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__request_submit_request_submit__["a" /* RequestSubmitPage */], { paymentRequest: paymentRequest.payment_request });
                }, function (err) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__amount_amount__["a" /* AmountPage */]);
                });
        }
    };
    ContactListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-list',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\contact-list\contact-list.html"*/'<!--\n\n  Generated template for the ContactListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Contact list</ion-title>\n\n    <ion-buttons end [hidden]="!isWebPlatform()">\n\n      <button ion-button (click)="confirm()">\n\n        OK\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <country-selector\n\n    (onSelect)="phoneNumber = $event.data"\n\n    class="phone-selector"></country-selector>\n\n  <div class="recent-selector" *ngIf="lastContactsList.length">\n\n    <p class="recent-text">Recent contacts</p>\n\n    <ng-container  *ngFor="let recentContact of lastContactsList">\n\n      <div class="recent-contact" (click)="selectContactFromLast(recentContact)">\n\n        <img [src]="recentContact.avatar?transactionsProvider.envVars.API + recentContact.avatar: \'assets/icon/empty_avatar.svg\'"/>\n\n        <span class="contact-number-wrap">{{recentContact.full_name || recentContact.phone_number}}</span>\n\n      </div>\n\n    </ng-container>\n\n  </div>\n\n  <ion-list *ngIf="contactsList.length" class="contact-list">\n\n    <ng-container *ngFor="let contact of contactsList">\n\n      <ion-item  (click)="selectContact(contact)" *ngIf="contact.phoneNumbers">\n\n        <ion-avatar item-start>\n\n          <img src="assets/icon/empty_avatar.svg"/>\n\n        </ion-avatar>\n\n        <h2>{{contact.displayName || contact.name.formatted}}</h2>\n\n        <ion-note item-end class="contact-number">\n\n          {{contact.phoneNumbers[0].value}}\n\n        </ion-note>\n\n      </ion-item>\n\n    </ng-container>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar" *ngIf="showConfirmButton">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            class="orange footer-button"\n\n            full\n\n            (click)="confirm()"\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\contact-list\contact-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_paymentRequests__["a" /* PaymentRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactListPage);
    return ContactListPage;
}());

//# sourceMappingURL=contact-list.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestSubmitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_success_transaction_success__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_paymentRequests__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amount_amount__ = __webpack_require__(97);
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
 * Generated class for the RequestSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestSubmitPage = (function () {
    function RequestSubmitPage(navCtrl, baseService, modalCtrl, paymentRequestsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.baseService = baseService;
        this.modalCtrl = modalCtrl;
        this.paymentRequestsProvider = paymentRequestsProvider;
        this.navParams = navParams;
        this.paymentRequest = this.navParams.get('paymentRequest');
    }
    RequestSubmitPage.prototype.ionViewDidLoad = function () {
    };
    RequestSubmitPage.prototype.edit = function () {
        var _this = this;
        var amountModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__amount_amount__["a" /* AmountPage */], { isModal: true });
        amountModal.present();
        amountModal.onDidDismiss(function (data) {
            if (data.confirmed) {
                _this.paymentRequestsProvider.editPaymentRequest(_this.paymentRequest.id, {
                    amount: _this.baseService.transactionDetails.amount,
                    currency: _this.baseService.transactionDetails.currency,
                    comment: _this.baseService.transactionDetails.comment
                }).then(function (paymentRequest) {
                    _this.paymentRequest = paymentRequest.payment_request;
                }, function (err) { });
            }
        });
    };
    RequestSubmitPage.prototype.submit = function () {
        var _this = this;
        this.paymentRequestsProvider.sendPaymentRequest({
            amount: this.baseService.transactionDetails.amount,
            phone_number_from: this.baseService.transactionDetails.phoneNumber,
            currency: this.baseService.transactionDetails.currency,
            comment: this.baseService.transactionDetails.comment
        }).then(function (data) {
            if (_this.saveAsTemplate) {
                _this.paymentRequestsProvider.savePaymentRequestAsTemplate(data.payment_rquest_id).then(function () { }, function () { });
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transaction_success_transaction_success__["a" /* TransactionSuccessPage */]);
        }, function (err) { });
    };
    RequestSubmitPage.prototype.cancel = function () {
        this.navCtrl.popToRoot();
    };
    RequestSubmitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-request-submit',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\request-submit\request-submit.html"*/'<!--\n\n  Generated template for the RequestSubmitPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Payment info</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="edit()">\n\n        Edit\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/right-top-arrow.svg"/></div>\n\n      Request to\n\n      <ion-note item-end class="value">{{baseService.transactionDetails.phoneNumber}}</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/wallet-gray.svg"/></div>\n\n      Amount\n\n      <ion-note item-end class="value">{{baseService.transactionDetails.amount}} {{baseService.transactionDetails.currency}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="baseService.transactionDetails.comment">\n\n      <ion-row>\n\n        <ion-col col-2 class="icon-col">\n\n          <img src="assets/icon/comment-gray.svg"/>\n\n        </ion-col>\n\n        <ion-col col-4 class="name-col">\n\n          Comment\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          "{{baseService.transactionDetails.comment}}"\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row class="save-checkbox">\n\n        <ion-col col-3></ion-col>\n\n        <ion-col col-9>\n\n          <ion-item>\n\n            <ion-label>Save as template</ion-label>\n\n            <ion-checkbox [(ngModel)]="saveAsTemplate"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          block\n\n          (click)="cancel()"\n\n          class="sign-up footer-button"\n\n        >Cancel</button></ion-col>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          block\n\n          (click)="submit()"\n\n          class="orange footer-button"\n\n        >Submit</button></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\request-submit\request-submit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_paymentRequests__["a" /* PaymentRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RequestSubmitPage);
    return RequestSubmitPage;
}());

//# sourceMappingURL=request-submit.js.map

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseProvider__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserProvider = (function (_super) {
    __extends(UserProvider, _super);
    function UserProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.envVars = _this.ENV;
        return _this;
    }
    UserProvider.prototype.userAuth = function (data) {
        return this.makeRawRequest('post', 'login', data);
    };
    UserProvider.prototype.registerPhone = function (data) {
        return this.makeRawRequest('post', 'signup_phone', data);
    };
    UserProvider.prototype.resetPassword = function (data) {
        return this.makeRawRequest('post', 'resset_password', data);
    };
    UserProvider.prototype.registerSmsSignup = function (token, id) {
        return this.makeRawRequest('put', 'signup_sms/' + id, { token: token });
    };
    UserProvider.prototype.registerSmsReset = function (token, id) {
        return this.makeRawRequest('post', 'resset_password_sms', { token: token, user_id: id });
    };
    UserProvider.prototype.signupPassword = function (password, id) {
        return this.makeRawRequest('put', 'signup_password/' + id, { password: password });
    };
    UserProvider.prototype.changePassword = function (password, url) {
        return this.makeRawRequest('post', this.ENV.API + url, { new_password: password });
    };
    UserProvider.prototype.registerSmsSignin = function (token, id) {
        return this.makeRawRequest('put', 'login_sms/' + id, { token: token });
    };
    UserProvider.prototype.repeatSms = function (data) {
        return this.makeRawRequest('post', 'repeat_sms', data);
    };
    UserProvider.prototype.termsAndConditions = function () {
        return this.makeRawRequest('get', 'policy');
    };
    UserProvider.prototype.countries = function () {
        return this.makeRawRequest('get', 'countries');
    };
    UserProvider.prototype.status = function (source) {
        if (source === void 0) { source = ''; }
        return this.makeRawRequest('get', 'login_status', {}, source);
    };
    UserProvider.prototype.verifyEmailAndName = function (data, id) {
        return this.makeRawRequest('put', 'verify_account/' + id, data);
    };
    UserProvider.prototype.logout = function () {
        return this.makeRawRequest('get', 'logout');
    };
    UserProvider.prototype.profile = function () {
        return this.makeRawRequest('get', 'profile');
    };
    UserProvider.prototype.saveProfile = function (data) {
        var formData = new FormData();
        if (data.photo instanceof File)
            formData.append('photo', data.photo, data.photo.name);
        if (data.withdraw_type)
            formData.append('withdraw_type', data.withdraw_type);
        if (data.currency)
            formData.append('currency', data.currency);
        return this.makeRawRequest('post', 'profile/change', formData);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], UserProvider);
    return UserProvider;
}(__WEBPACK_IMPORTED_MODULE_3__baseProvider__["a" /* BaseProvider */]));

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
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
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoadingPage = (function () {
    function LoadingPage(navCtrl, userProvider, alertCtrl, events, loadingCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.loadingCounter = [];
        events.subscribe('loading:show', function (message) {
            _this.showLoader(message);
        });
        events.subscribe('loading:hide', function () {
            _this.hideLoader();
        });
        events.subscribe('error:show', function (title, message) {
            var prompt = _this.alertCtrl.create({
                title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>' + title,
                message: message,
                buttons: [
                    {
                        text: 'GOT IT',
                        handler: function (data) {
                        }
                    },
                ]
            });
            prompt.present();
        });
        events.subscribe('403:show', function () {
            if (!_this.show403) {
                _this.show403 = true;
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                _this.navCtrl.popToRoot();
                var prompt_1 = _this.alertCtrl.create({
                    title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                    message: "Your session has expired or you have insufficient rights to access this content. Please sign in again.",
                    buttons: [
                        {
                            text: 'GOT IT',
                            handler: function (data) {
                                _this.events.publish('403:hide');
                                _this.show403 = false;
                            }
                        },
                    ]
                });
                prompt_1.present();
            }
        });
        events.subscribe('500:show', function () {
            if (!_this.show500) {
                _this.show500 = true;
                var prompt_2 = _this.alertCtrl.create({
                    title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                    message: "Something went wrong. Please try again later.",
                    buttons: [
                        {
                            text: 'GOT IT',
                            handler: function (data) {
                                _this.events.publish('500:hide');
                                _this.show500 = false;
                            }
                        },
                    ]
                });
                prompt_2.present();
            }
        });
        events.subscribe('offline:show', function () {
            if (!_this.showOffline) {
                _this.showOffline = true;
                var prompt_3 = _this.alertCtrl.create({
                    title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                    message: "Please check your internet connection",
                    buttons: [
                        {
                            text: 'GOT IT',
                            handler: function (data) {
                                _this.events.publish('offline:hide');
                                _this.showOffline = false;
                            }
                        },
                    ]
                });
                prompt_3.present();
            }
        });
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider.status('LoadingEntry').then(function (data) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            _this.navCtrl.popToRoot();
        }, function (err) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            _this.navCtrl.popToRoot();
        });
    };
    LoadingPage.prototype.showLoader = function (message) {
        if (this.loadingCounter.length === 0) {
            this.loader = this.loadingCtrl.create({
                content: message || "Please wait...",
            });
            this.loader.present();
        }
        this.loadingCounter.push(true);
    };
    LoadingPage.prototype.hideLoader = function () {
        if (this.loadingCounter.length > 0)
            this.loadingCounter.pop();
        if (this.loadingCounter.length === 0)
            this.loader.dismiss();
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loading',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\loading\loading.html"*/'<!--\n\n  Generated template for the LoadingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSingleton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaseSingleton = (function () {
    function BaseSingleton() {
        this.actionSource = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */].SOURCE_TRANSACTION;
        this.currentUserPaymentMethodSelected = false;
        this.transactionDetails = {
            phoneNumber: '',
            amount: '',
            currency: '',
            currencyFrom: '',
            comment: '',
            showCommentInput: false
        };
    }
    BaseSingleton.prototype.initiateTransactionDetails = function () {
        this.transactionDetails = {
            phoneNumber: '',
            amount: '',
            currency: '',
            currencyFrom: '',
            comment: '',
            showCommentInput: false
        };
    };
    BaseSingleton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BaseSingleton);
    return BaseSingleton;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseProvider__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TransactionsProvider = (function (_super) {
    __extends(TransactionsProvider, _super);
    function TransactionsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransactionsProvider.prototype.transactions = function (source) {
        if (source === void 0) { source = ''; }
        return this.makeRawRequest('get', 'transactions', {}, source);
    };
    TransactionsProvider.prototype.lastContacts = function () {
        return this.makeRawRequest('get', 'last_contacts');
    };
    TransactionsProvider.prototype.paymentMethods = function (source) {
        if (source === void 0) { source = ''; }
        return this.makeRawRequest('get', 'payment_methods', {}, source);
    };
    TransactionsProvider.prototype.selectPaymentMethod = function (id) {
        return this.makeRawRequest('get', 'payment_methods/' + id);
    };
    TransactionsProvider.prototype.addCard = function (data) {
        return this.makeRawRequest('post', 'add_card', data);
    };
    TransactionsProvider.prototype.prepareTransaction = function (data) {
        if (!data.comment)
            delete data.comment;
        return this.makeRawRequest('post', 'transactions', data);
    };
    TransactionsProvider.prototype.saveTransactionAsTemplate = function (id) {
        return this.makeRawRequest('post', 'transactions/' + id + '/' + 'save_as_template');
    };
    TransactionsProvider.prototype.approveTransaction = function (id) {
        return this.makeRawRequest('post', 'transactions/' + id + '/' + 'user_approve');
    };
    TransactionsProvider.prototype.cancelTransaction = function (id) {
        return this.makeRawRequest('post', 'transactions/' + id + '/' + 'user_cancel');
    };
    TransactionsProvider.prototype.withdrawMethods = function () {
        return this.makeRawRequest('get', 'withdrow_methods');
    };
    TransactionsProvider.prototype.checkIfTransactionTemplate = function (phone_number) {
        return this.makeRawRequest('post', 'transactions/check_template', phone_number, 'hideError');
    };
    TransactionsProvider.prototype.editTransaction = function (id, data) {
        return this.makeRawRequest('put', 'transactions/' + id, data);
    };
    TransactionsProvider.prototype.withdrawalUserMethods = function () {
        return this.makeRawRequest('get', 'withdrawals/user_methods');
    };
    TransactionsProvider.prototype.withdrawMoney = function (data) {
        return this.makeRawRequest('post', 'withdrawals', data);
    };
    TransactionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TransactionsProvider);
    return TransactionsProvider;
}(__WEBPACK_IMPORTED_MODULE_1__baseProvider__["a" /* BaseProvider */]));

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verify_account_verify_account__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exchange_rates_exchange_rates__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_balance__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__choose_payment_method_choose_payment_method__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_list_contact_list__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_paymentRequests__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transaction_submit_transaction_submit__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__choose_withdrawal_method_choose_withdrawal_method__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_baseProvider__ = __webpack_require__(48);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, userProvider, balanceProvider, baseSingleton, transactionsProvider, paymentRequestsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.balanceProvider = balanceProvider;
        this.baseSingleton = baseSingleton;
        this.transactionsProvider = transactionsProvider;
        this.paymentRequestsProvider = paymentRequestsProvider;
        this.navParams = navParams;
        this.historyToShow = {};
        this.Object = Object;
        this.HomePage = HomePage_1;
        this.today = (new Date().toDateString());
        this.requestsArray = [];
        this.fabClicked = false;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.doRefresh = function (refresher) {
        this.reloadData(refresher);
    };
    HomePage.prototype.requestCompleted = function (refresher) {
        this.requestsArray.pop();
        if (refresher && this.requestsArray.length === 0) {
            refresher.complete();
        }
    };
    HomePage.prototype.requestStarted = function (refresher) {
        this.requestsArray.push(true);
    };
    HomePage.prototype.reloadData = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = false; }
        this.requestStarted(refresher);
        this.userProvider.status(refresher ? __WEBPACK_IMPORTED_MODULE_15__providers_baseProvider__["a" /* BaseProvider */].HIDE_LOADING : '').then(function (data) {
            _this.requestCompleted(refresher);
            var userStatus = data;
            _this.baseSingleton.currentUserPaymentMethod = userStatus.payment_method;
            _this.baseSingleton.currentUserStatus = userStatus.status;
            _this.baseSingleton.currentUserCountry = userStatus.country;
            _this.baseSingleton.currentUserPaymentMethodSelected = userStatus.payment_method_selected;
            _this.baseSingleton.currentUserPhone = userStatus.phone_number;
            _this.userStatus = userStatus.status;
            _this.rejectReason = userStatus.reason;
            _this.userID = userStatus.user_id;
            _this.documentsUploaded = userStatus.documents_uploaded;
            _this.verified = userStatus.verify;
            _this.content.resize();
        }, function (err) { _this.requestCompleted(refresher); });
        this.requestStarted(refresher);
        this.balanceProvider.balances(refresher ? __WEBPACK_IMPORTED_MODULE_15__providers_baseProvider__["a" /* BaseProvider */].HIDE_LOADING : '').then(function (data) {
            _this.requestCompleted(refresher);
            _this.balance = data.results;
        }, function (err) { _this.requestCompleted(refresher); });
        this.requestStarted(refresher);
        this.transactionsProvider.transactions(refresher ? __WEBPACK_IMPORTED_MODULE_15__providers_baseProvider__["a" /* BaseProvider */].HIDE_LOADING : '').then(function (data) {
            _this.requestCompleted(refresher);
            _this.transactions = data.results;
            _this.transactions.forEach(function (transaction) {
                transaction['source_type'] = HomePage_1.SOURCE_TRANSACTION;
            });
            _this.requestStarted(refresher);
            _this.paymentRequestsProvider.paymentRequests(refresher ? __WEBPACK_IMPORTED_MODULE_15__providers_baseProvider__["a" /* BaseProvider */].HIDE_LOADING : '').then(function (requestsData) {
                _this.requestCompleted(refresher);
                _this.paymentRequests = requestsData.results;
                _this.paymentRequests.forEach(function (request) {
                    request['source_type'] = HomePage_1.SOURCE_REQUEST;
                });
                var mergedArray = _this.transactions.concat(_this.paymentRequests);
                var sortedArray = __WEBPACK_IMPORTED_MODULE_11_lodash__["sortBy"](mergedArray, [function (historyItem) { return historyItem.created_at; }]);
                var groupedArray = __WEBPACK_IMPORTED_MODULE_11_lodash__["groupBy"](sortedArray, function (historyItem) {
                    var formattedDate = (new Date(historyItem.created_at).toDateString());
                    return formattedDate;
                });
                var historyKeys = __WEBPACK_IMPORTED_MODULE_11_lodash__["reverse"](__WEBPACK_IMPORTED_MODULE_11_lodash__["keys"](groupedArray));
                _this.historyKeysToShow = historyKeys;
                historyKeys.forEach(function (key) {
                    groupedArray[key] = __WEBPACK_IMPORTED_MODULE_11_lodash__["reverse"](groupedArray[key]);
                });
                _this.historyToShow = groupedArray;
            }, function (err) { _this.requestCompleted(refresher); });
        }, function (err) { _this.requestCompleted(refresher); });
        this.requestStarted(refresher);
        this.transactionsProvider.paymentMethods(refresher ? __WEBPACK_IMPORTED_MODULE_15__providers_baseProvider__["a" /* BaseProvider */].HIDE_LOADING : '').then(function (data) {
            _this.requestCompleted(refresher);
            _this.paymentMethods = data.results;
        }, function (err) { _this.requestCompleted(refresher); });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.reloadData();
    };
    HomePage.prototype.verifyProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__verify_account_verify_account__["a" /* VerifyAccountPage */], { userID: this.userID });
    };
    HomePage.prototype.goToRates = function () {
        if (this.blurPage)
            return;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__exchange_rates_exchange_rates__["a" /* ExchangeRatesPage */]);
    };
    HomePage.prototype.sendMoney = function (fab) {
        if (fab === void 0) { fab = false; }
        if (fab) {
            fab.close();
            this.blurPage = false;
        }
        this.baseSingleton.initiateTransactionDetails();
        this.baseSingleton.actionSource = HomePage_1.SOURCE_TRANSACTION;
        if (this.baseSingleton.currentUserPaymentMethodSelected) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__contact_list_contact_list__["a" /* ContactListPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */]);
        }
    };
    HomePage.prototype.requestMoney = function (fab) {
        if (fab === void 0) { fab = false; }
        if (fab) {
            fab.close();
            this.blurPage = false;
        }
        this.baseSingleton.initiateTransactionDetails();
        this.baseSingleton.actionSource = HomePage_1.SOURCE_REQUEST;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__contact_list_contact_list__["a" /* ContactListPage */]);
    };
    HomePage.prototype.profile = function () {
        if (this.blurPage)
            return;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.processTransaction = function (transaction) {
        var _this = this;
        if (this.blurPage)
            return;
        if (transaction.source_type !== HomePage_1.SOURCE_REQUEST)
            return;
        if ('id' in this.baseSingleton.currentUserPaymentMethod) {
            this.baseSingleton.transactionDetails.amount = transaction.amount;
            this.baseSingleton.transactionDetails.currency = transaction.currency.currency;
            this.baseSingleton.transactionDetails.currencyFrom = transaction.currency_from.currency;
            this.baseSingleton.transactionDetails.phoneNumber = transaction.user.phone_number;
            //this.baseSingleton.transactionDetails.comment = transaction.comment;
            this.transactionsProvider.prepareTransaction({
                amount_to: this.baseSingleton.transactionDetails.amount,
                phone_number_to: this.baseSingleton.transactionDetails.phoneNumber,
                currency_to: this.baseSingleton.transactionDetails.currency,
                currency_from: this.baseSingleton.transactionDetails.currencyFrom,
            }).then(function (transaction) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__transaction_submit_transaction_submit__["a" /* TransactionSubmitPage */], { transaction: transaction.transaction, fromRequest: true });
            }, function (err) {
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */], { source: __WEBPACK_IMPORTED_MODULE_7__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */].SOURCE_PAYMENT_REQUEST, transaction: transaction });
        }
    };
    HomePage.prototype.toggleBlur = function () {
        this.fabClicked = true;
        this.blurPage = !this.blurPage;
    };
    HomePage.prototype.withdraw = function (balanceID) {
        if (this.blurPage)
            return;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__choose_withdrawal_method_choose_withdrawal_method__["a" /* ChooseWithdrawalMethodPage */], { balanceID: balanceID });
    };
    HomePage.prototype.clickOnContent = function () {
        if (this.blurPage && !this.fabClicked) {
            this.blurPage = false;
            this.fabButton.close();
        }
        this.fabClicked = false;
    };
    HomePage.STATUS_ACTIVE = 'ACTIVE';
    HomePage.STATUS_HAVE_DOCS = "HAVE_DOCS";
    HomePage.STATUS_REJECT = "REJECTED";
    HomePage.STATUS_APPROVED = "APPROVED";
    HomePage.STATUS_NO_TRANSACTIONS = "NO_TRANSACTIONS";
    HomePage.STATUS_BLANK = "BLANK";
    HomePage.SOURCE_TRANSACTION = 'transaction';
    HomePage.SOURCE_REQUEST = 'request';
    HomePage.TRANSACTION_STATUSES = [
        {
            value: 'PENDING',
            display: 'Pending',
            className: 'transaction-status-warning'
        },
        {
            value: 'SUCCESS',
            display: 'Success',
            className: 'transaction-status-hide'
        },
        {
            value: 'CANCELED',
            display: 'Canceled',
            className: 'transaction-status-error'
        },
        {
            value: 'UNSUCCESS',
            display: 'Failed',
            className: 'transaction-status-error'
        }
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fab'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "fabButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header [ngClass]="{ \'blur\' : blurPage }">\n\n\n\n  <ion-navbar color="primary" (click)="clickOnContent()">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="profile()">\n\n        <img src="assets/icon/user-white.svg"/>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="goToRates()">\n\n        <img src="assets/icon/rates-white.svg"/>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content (click)="clickOnContent()">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <div class="no-history"\n\n       [ngClass]="{ \'blur\' : blurPage }"\n\n       *ngIf="userStatus === HomePage.STATUS_NO_TRANSACTIONS">\n\n    <img src="assets/imgs/astronaut.svg"/>\n\n    <h3>No transaction history</h3>\n\n    <p>\n\n      Tap + to send money to someone special\n\n    </p>\n\n  </div>\n\n  <div class="no-history"\n\n       [ngClass]="{ \'blur\' : blurPage }"\n\n       *ngIf="userStatus === HomePage.STATUS_APPROVED">\n\n    <img src="assets/imgs/skate_man.svg"/>\n\n    <h3>Congratulations!</h3>\n\n    <p>\n\n      Your account has been verified. What <br/>would you like to do next?\n\n    </p>\n\n  </div>\n\n  <div class="hello"\n\n       [ngClass]="{ \'blur\' : blurPage }"\n\n       *ngIf="[HomePage.STATUS_BLANK, HomePage.STATUS_REJECT].indexOf(userStatus) > -1">\n\n    <img src="assets/imgs/hello_user.svg"/>\n\n    <h3 *ngIf="userStatus === HomePage.STATUS_BLANK">Hello, new user</h3>\n\n    <h3 *ngIf="userStatus === HomePage.STATUS_REJECT">Unverified</h3>\n\n    <p *ngIf="userStatus === HomePage.STATUS_BLANK">\n\n      Your account has been successfully created.<br/>Please add your name and photos of your ID to complete\n\n      the registration.\n\n    </p>\n\n    <p *ngIf="userStatus === HomePage.STATUS_REJECT" class="release-reason">\n\n      <span [outerHTML]="rejectReason"></span>\n\n    </p>\n\n  </div>\n\n  <div class="hello"\n\n       [ngClass]="{ \'blur\' : blurPage }"\n\n       *ngIf="userStatus === HomePage.STATUS_HAVE_DOCS">\n\n    <img src="assets/imgs/hello_user.svg"/>\n\n    <h3>Thank you!</h3>\n\n    <p>\n\n      You will get a notification once your<br/>account is verified and ready to use\n\n    </p>\n\n  </div>\n\n  <ion-scroll scrollX="true"\n\n              [ngClass]="{ \'blur\' : blurPage }"\n\n              *ngIf="balance !== undefined && balance.length > 0 && userStatus === HomePage.STATUS_ACTIVE">\n\n    <ion-card class="currency-card" *ngFor="let balanceUnit of balance" (click)="withdraw(balanceUnit.id)">\n\n      <div class="header">Balance</div>\n\n      <div class="balance">{{balanceUnit.balance}} {{balanceUnit.currency}} </div>\n\n      <div class="withdraw">Withdraw money</div>\n\n      <div class="card-logo">\n\n        <img src="assets/imgs/diamond.svg"/>\n\n      </div>\n\n    </ion-card>\n\n  </ion-scroll>\n\n  <ng-container\n\n    *ngIf="[HomePage.STATUS_ACTIVE].indexOf(userStatus) > -1">\n\n    <ion-item-group *ngFor="let day of historyKeysToShow"\n\n                    [ngClass]="{ \'blur\' : blurPage }"\n\n    >\n\n      <ion-item-divider color="light">{{(day === today) ? \'Today\' : day}}</ion-item-divider>\n\n      <ng-container *ngFor="let transaction of historyToShow[day]">\n\n        <ion-item *ngIf="transaction.user">\n\n          <ion-avatar item-start>\n\n            <img src="{{transaction.user.photo !== \'\'?\n\n          (userProvider.envVars.API + transaction.user.photo):\n\n          \'assets/icon/empty_avatar.svg\'}}"/>\n\n          </ion-avatar>\n\n          <h2 *ngIf="transaction.source_type === HomePage.SOURCE_TRANSACTION">\n\n            {{transaction.user.full_name || transaction.user.phone_number}}\n\n          </h2>\n\n          <h2 *ngIf="transaction.source_type === HomePage.SOURCE_REQUEST" class="wrap">\n\n            <b>{{transaction.user.full_name || transaction.user.phone_number}}</b> sent a request for <b>{{transaction.amount}} {{transaction.currency.currency}}</b>\n\n          </h2>\n\n          <div class="transaction-time">\n\n            {{(transaction.created_at | amDateFormat: \'h:mma\').toUpperCase()}}\n\n            <div class="transaction-status" *ngIf="transaction.source_type === HomePage.SOURCE_TRANSACTION">\n\n              <ng-container *ngFor="let status of HomePage.TRANSACTION_STATUSES">\n\n                <span *ngIf="transaction.status === status.value"\n\n                      [class]="status.className">\n\n                  {{status.display}}\n\n                </span>\n\n              </ng-container>\n\n            </div>\n\n            <div class="explore-button"\n\n                 *ngIf="transaction.source_type === HomePage.SOURCE_REQUEST"\n\n                 (click)="processTransaction(transaction)"\n\n            >Explore</div>\n\n          </div>\n\n          <p *ngIf="transaction.comment" class="transaction-comment">"{{transaction.comment}}"</p>\n\n          <ion-note\n\n            item-end\n\n            *ngIf="transaction.source_type === HomePage.SOURCE_TRANSACTION"\n\n            [ngClass]="{\'transaction-amount-positive\': transaction.type === \'+\',\n\n                                     \'transaction-amount-negative\': transaction.type === \'-\'}"\n\n          >\n\n            {{transaction.type}} {{transaction.amount}} {{transaction.currency.currency}}\n\n          </ion-note>\n\n        </ion-item>\n\n      </ng-container>\n\n    </ion-item-group>\n\n  </ng-container>\n\n  <ion-fab right bottom\n\n           #fab\n\n           *ngIf="userStatus === HomePage.STATUS_NO_TRANSACTIONS || userStatus === HomePage.STATUS_ACTIVE">\n\n    <button ion-fab\n\n            (click)="toggleBlur()"\n\n            class="fab-orange"><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="primary" (click)="requestMoney(fab)">\n\n        <ion-icon name="wifi" class="rotation-90"></ion-icon>\n\n        <div class="label">Money request</div>\n\n      </button>\n\n      <button ion-fab class="fab-orange" (click)="sendMoney(fab)">\n\n        <ion-icon name="arrow-round-forward"></ion-icon>\n\n        <div class="label">Send money</div>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n\n\n<ion-footer class="grey-toolbar" *ngIf="[HomePage.STATUS_BLANK, HomePage.STATUS_REJECT].indexOf(userStatus) > -1">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            class="orange footer-button"\n\n            full\n\n            (click)="verifyProfile()"\n\n          >Verify your profile</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<ion-footer class="grey-toolbar" *ngIf="userStatus === HomePage.STATUS_APPROVED">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          class="sign-up footer-button"\n\n          (click)="requestMoney()"\n\n          block>Request money</button></ion-col>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          type="submit"\n\n          block\n\n          (click)="sendMoney()"\n\n          class="orange footer-button"\n\n        >Send money</button></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_balance__["a" /* BalanceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_6__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_paymentRequests__["a" /* PaymentRequestsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvVariables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var EnvVariables = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]("env.variables");
//# sourceMappingURL=env.token.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_code_register_code__ = __webpack_require__(96);
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
 * Generated class for the RegisterPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPhonePage = (function () {
    function RegisterPhonePage(navCtrl, user) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.phone_number = '';
    }
    RegisterPhonePage.prototype.submitForm = function () {
        var _this = this;
        this.user.registerPhone({ phone_number: this.phone_number })
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_code_register_code__["a" /* RegisterCodePage */], { phone: _this.phone_number, user: data.user_id, source: 'signup' });
        }, function (err) { });
    };
    RegisterPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register-phone',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\register-phone\register-phone.html"*/'<!--\n\n  Generated template for the RegisterPhonePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Phone number</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form id="registerPhone" (ngSubmit)="submitForm()" novalidate>\n\n    <country-selector (onSelect)="phone_number = $event.data"></country-selector>\n\n\n\n  </form>\n\n</ion-content>\n\n\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            [disabled]="!phone_number"\n\n            type="submit"\n\n            form="registerPhone"\n\n            class="orange footer-button"\n\n            full\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\register-phone\register-phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */]])
    ], RegisterPhonePage);
    return RegisterPhonePage;
}());

//# sourceMappingURL=register-phone.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
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
 * Generated class for the CreatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePasswordPage = (function () {
    function CreatePasswordPage(navCtrl, user, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.userID = this.navParams.get('userID');
        this.source = this.navParams.get('source');
        this.URL = this.navParams.get('url');
    }
    CreatePasswordPage.prototype.ionViewDidLoad = function () {
    };
    CreatePasswordPage.prototype.createPassword = function () {
        var _this = this;
        var action;
        switch (this.source) {
            case 'signup':
                action = this.user.signupPassword(this.password, this.userID);
                break;
            case 'reset':
                action = this.user.changePassword(this.password, this.URL);
        }
        action.then(function (data) {
            switch (_this.source) {
                case 'signup':
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    _this.navCtrl.popToRoot();
                    break;
                case 'reset':
                    var alertPopup = _this.alertCtrl.create({
                        title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                        message: 'Your password has been successfully reset',
                        buttons: [
                            {
                                text: 'GOT IT',
                                handler: function (data) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                                    _this.navCtrl.popToRoot();
                                }
                            },
                        ]
                    });
                    alertPopup.present();
            }
        }, function (err) { });
    };
    CreatePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-password',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\create-password\create-password.html"*/'<!--\n\n  Generated template for the CreatePasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Create password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list no-lines>\n\n    <ion-item>\n\n      <img src="assets/icon/lock-blue.svg" item-start class="lock-icon"/>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input\n\n        [(ngModel)]="password"\n\n        type="password"\n\n      ></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            [disabled]="!password"\n\n            class="orange footer-button"\n\n            (click)="createPassword()"\n\n            full\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\create-password\create-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CreatePasswordPage);
    return CreatePasswordPage;
}());

//# sourceMappingURL=create-password.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents_documents__ = __webpack_require__(380);
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
 * Generated class for the VerifyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyAccountPage = (function () {
    function VerifyAccountPage(navCtrl, formBuilder, userProvider, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.userProvider = userProvider;
        this.navParams = navParams;
        this.verifyProfileForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
            full_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.userID = this.navParams.get('userID');
    }
    VerifyAccountPage.prototype.ionViewDidLoad = function () {
    };
    VerifyAccountPage.prototype.submitForm = function (value) {
        var _this = this;
        this.userProvider.verifyEmailAndName(value, this.userID)
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documents_documents__["a" /* DocumentsPage */]);
        }, function (err) { });
    };
    VerifyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verify-account',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\verify-account\verify-account.html"*/'<!--\n\n  Generated template for the VerifyAccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Verify account</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form id="verifyProfileForm" [formGroup]="verifyProfileForm" (ngSubmit)="submitForm(verifyProfileForm.value)" novalidate>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-icon name="person" item-start color="primary"></ion-icon>\n\n        <ion-label floating>Full name</ion-label>\n\n        <ion-input\n\n          type="text"\n\n          formControlName="full_name"\n\n          autocorrect="off"\n\n          autocapitalize="off"\n\n          spellcheck="false"\n\n        ></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="mail" item-start color="primary"></ion-icon>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email"\n\n                   formControlName="email"\n\n                   autocorrect="off"\n\n                   autocapitalize="off"\n\n                   spellcheck="false"\n\n        ></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            [disabled]="!verifyProfileForm.valid"\n\n            type="submit"\n\n            form="verifyProfileForm"\n\n            class="orange footer-button"\n\n            full\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\verify-account\verify-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VerifyAccountPage);
    return VerifyAccountPage;
}());

//# sourceMappingURL=verify-account.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_documents__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(34);
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
 * Generated class for the DocumentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentsPage = (function () {
    function DocumentsPage(navCtrl, docsProvider, loadingCtrl, sanitizer, elementRef, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.docsProvider = docsProvider;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.elementRef = elementRef;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.documents = [];
        this.baseURL = this.docsProvider.envVars.API;
    }
    DocumentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.docsProvider.documentsList().then(function (data) {
            _this.documents = data.results;
        }, function (err) { });
    };
    DocumentsPage.prototype.skip = function () {
        this.navCtrl.popToRoot();
    };
    DocumentsPage.prototype.selectPhoto = function (document, files) {
        var _this = this;
        if (files[0]) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Loading...'
            });
            loading_1.present();
            document.image = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(document.image);
            reader_1.onload = function () {
                loading_1.dismiss();
                if (reader_1.result.indexOf('data:image') === -1) {
                    document.image = false;
                    var prompt_1 = _this.alertCtrl.create({
                        title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                        message: 'Please select images only',
                        buttons: [
                            {
                                text: 'GOT IT',
                                handler: function (data) {
                                }
                            },
                        ]
                    });
                    prompt_1.present();
                    return;
                }
                document.tmpImage = _this.sanitizer.bypassSecurityTrustUrl(reader_1.result);
                _this.elementRef.nativeElement.querySelector('#photo_' + document.field_name).value = '';
            };
            reader_1.onerror = function (error) {
                console.log('Error: ', error);
                loading_1.dismiss();
                _this.elementRef.nativeElement.querySelector('#photo_' + document.field_name).value = '';
            };
        }
    };
    DocumentsPage.prototype.removePhoto = function (document) {
        document.image = undefined;
        document.tmpImage = undefined;
    };
    DocumentsPage.prototype.submitEnabled = function () {
        var allowed = true;
        this.documents.forEach(function (document) {
            if (!document.image) {
                allowed = false;
            }
        });
        return allowed;
    };
    DocumentsPage.prototype.sendDocuments = function () {
        var _this = this;
        this.docsProvider.saveDocuments(this.documents).then(function (res) {
            _this.navCtrl.popToRoot();
        }, function (err) { });
    };
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-documents',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\documents\documents.html"*/'<!--\n\n  Generated template for the DocumentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Documents</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="skip()">\n\n        Skip\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let document of documents">\n\n      <ion-thumbnail item-start>\n\n        <img\n\n          [src]="document.tmpImage?document.tmpImage:(baseURL + document.thumb)"\n\n          (click)="elementRef.nativeElement.querySelector(\'#photo_\' + document.field_name).click()"\n\n        >\n\n      </ion-thumbnail>\n\n      <p>{{document.name}}</p>\n\n      <p class="upload-photo" [hidden]="document.image">\n\n        <a href="#"\n\n           (click)="elementRef.nativeElement.querySelector(\'#photo_\' + document.field_name).click()"\n\n        >Upload photo</a>\n\n      </p>\n\n      <p class="remove-photo" [hidden]="!document.image"><a href="#" (click)="removePhoto(document)">Delete photo</a></p>\n\n      <input type="file"\n\n             hidden\n\n             accept="image/x-png,image/heif,image/jpeg"\n\n             (change)="selectPhoto(document, elementRef.nativeElement.querySelector(\'#photo_\' + document.field_name).files)"\n\n             id="photo_{{document.field_name}}"\n\n      >\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            (click)="sendDocuments()"\n\n            ion-button\n\n            [disabled]="!submitEnabled()"\n\n            class="orange footer-button"\n\n            full\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\documents\documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_documents__["a" /* DocumentsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseProvider__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DocumentsProvider = (function (_super) {
    __extends(DocumentsProvider, _super);
    function DocumentsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentsProvider.prototype.documentsList = function () {
        return this.makeRawRequest('get', 'documents');
    };
    DocumentsProvider.prototype.saveDocuments = function (docs) {
        var formData = new FormData();
        docs.forEach(function (document) {
            formData.append(document.field_name, document.image, document.image.name);
        });
        return this.makeRawRequest('post', 'documents', formData);
    };
    DocumentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DocumentsProvider);
    return DocumentsProvider;
}(__WEBPACK_IMPORTED_MODULE_1__baseProvider__["a" /* BaseProvider */]));

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseProvider__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BalanceProvider = (function (_super) {
    __extends(BalanceProvider, _super);
    function BalanceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BalanceProvider.prototype.balances = function (source) {
        if (source === void 0) { source = ''; }
        return this.makeRawRequest('get', 'balances', {}, source);
    };
    BalanceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], BalanceProvider);
    return BalanceProvider;
}(__WEBPACK_IMPORTED_MODULE_1__baseProvider__["a" /* BaseProvider */]));

//# sourceMappingURL=balance.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_currency__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transactions__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the AddCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCardPage = (function () {
    function AddCardPage(navCtrl, formBuilder, currencyProvider, events, transactionsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.currencyProvider = currencyProvider;
        this.events = events;
        this.transactionsProvider = transactionsProvider;
        this.navParams = navParams;
        this.cardForm = this.formBuilder.group({
            number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9]{16}')])],
            currency: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            cvc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[0-9]{3}')])],
            expDate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    AddCardPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.currencyProvider.currencyList()];
                    case 1:
                        _a.currencies = (_b.sent()).results;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddCardPage.prototype.addCard = function () {
        var _this = this;
        this.transactionsProvider.addCard({
            card_number: this.cardForm.controls['number'].value,
            expired_year: this.cardForm.controls['expDate'].value.split("-")[0],
            expired_month: this.cardForm.controls['expDate'].value.split("-")[1],
            cvc: this.cardForm.controls['cvc'].value,
            currency: this.cardForm.controls['currency'].value,
        }).then(function (res) {
            _this.events.publish('paymentMethods:cardAdded', res.payment_method_id);
        }, function (err) { });
    };
    AddCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-card',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\add-card\add-card.html"*/'<!--\n\n  Generated template for the AddCardPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Lägg till kort</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="cardForm" (ngSubmit)="submitForm()" novalidate>\n\n    <ion-list>\n\n      <ion-item>\n\n        <img src="assets/icon/card-gray.svg" item-start/>\n\n        <ion-label stacked>Card number</ion-label>\n\n        <ion-input\n\n          formControlName="number"\n\n          type="tel"\n\n          maxlength="16"\n\n        ></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!cardForm.get(\'number\').valid && cardForm.get(\'number\').touched" no-lines>\n\n        <p class="error">16 siffror krävs</p>\n\n      </ion-item>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <img src="assets/icon/calendar-gray.svg" item-start/>\n\n              <ion-label stacked>Utgångsdatum</ion-label>\n\n              <ion-datetime formControlName="expDate" displayFormat="MM/YY" min="2018" max="2030"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item *ngIf="!cardForm.get(\'expDate\').valid && cardForm.get(\'expDate\').touched" no-lines>\n\n              <p class="error">krävs</p>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item>\n\n              <img src="assets/icon/shield-gray.svg" item-start/>\n\n              <ion-label stacked>CVC</ion-label>\n\n              <ion-input type="tel" formControlName="cvc" maxlength="3" pattern="[0-9]*" inputmode="numeric" min="000" max="999" style="-webkit-text-security: disc;"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="!cardForm.get(\'cvc\').valid && cardForm.get(\'cvc\').touched" no-lines>\n\n              <p class="error">3 numbers</p>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      <ion-item>\n\n        <ion-label>Kortvaluta</ion-label>\n\n        <ion-select formControlName="currency" >\n\n          <ion-option *ngFor="let currency of currencies">{{currency.currency}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="!cardForm.get(\'currency\').valid && cardForm.get(\'currency\').touched" no-lines>\n\n        <p class="error">Card currency is required</p>\n\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            class="orange footer-button"\n\n            [disabled]="!cardForm.valid"\n\n            full\n\n            (click)="addCard()"\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\add-card\add-card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddCardPage);
    return AddCardPage;
}());

//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSubmitManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_success_transaction_success__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transactions__ = __webpack_require__(30);
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
 * Generated class for the TransactionSubmitManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionSubmitManualPage = (function () {
    function TransactionSubmitManualPage(navCtrl, transactionsProvider, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.transactionsProvider = transactionsProvider;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.transaction = this.navParams.get('transaction');
    }
    TransactionSubmitManualPage.prototype.ionViewDidLoad = function () {
    };
    TransactionSubmitManualPage.prototype.submit = function () {
        var _this = this;
        this.transactionsProvider.approveTransaction(this.transaction.id).then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__transaction_success_transaction_success__["a" /* TransactionSuccessPage */]);
        }, function (err) { });
    };
    TransactionSubmitManualPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Copied to clipboard',
            duration: 3000
        });
        toast.present();
    };
    TransactionSubmitManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction-submit-manual',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\transaction-submit-manual\transaction-submit-manual.html"*/'<!--\n\n  Generated template for the TransactionSubmitSwishPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Payment info</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="steps-container">\n\n    <img src="assets/icon/swish-transfer.svg"/>\n\n    <img src="assets/icon/big-blue-right-arrow.svg"/>\n\n    <img src="assets/icon/plingpay-transfer.svg"/>\n\n    <img src="assets/icon/big-blue-right-arrow.svg"/>\n\n    <img src="assets/icon/user-transfer.svg"/>\n\n  </div>\n\n  <div class="instructions">\n\n    To send <span class="receiver-name">{{transaction.user_to.full_name || transaction.user_to.phone_number}}</span>\n\n    {{transaction.amount.amount}} {{transaction.amount.currency}} transfer <span class="amount">{{transaction.total.total}} {{transaction.total.currency}}</span>\n\n    to the PlingPay account\n\n  </div>\n\n  <ion-list>\n\n    <ion-item *ngFor="let data of transaction.payment_data">\n\n      <ion-label floating>{{data.name}}</ion-label>\n\n      <ion-input type="text" value="{{data.value}}" disabled></ion-input>\n\n      <button class="copy" item-end ngxClipboard [cbContent]="data.value" (cbOnSuccess)="presentToast()">Copy</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="grey-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            type="submit"\n\n            class="orange footer-button"\n\n            (click)="submit()"\n\n            full\n\n          >Ok</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\transaction-submit-manual\transaction-submit-manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TransactionSubmitManualPage);
    return TransactionSubmitManualPage;
}());

//# sourceMappingURL=transaction-submit-manual.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base__ = __webpack_require__(29);
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
 * Generated class for the ContactConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactConfirmPage = (function () {
    function ContactConfirmPage(navCtrl, userProvider, viewCtrl, elementRef, renderer, baseSingleton, navParams) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.viewCtrl = viewCtrl;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.baseSingleton = baseSingleton;
        this.navParams = navParams;
        this.countriesData = [];
        this.userPhone = this.navParams.get('userPhone');
        this.userName = this.navParams.get('userName');
    }
    ContactConfirmPage.prototype.ionViewDidLoad = function () {
    };
    ContactConfirmPage.prototype.selectCountry = function (country) {
        var _this = this;
        this.selectedCode = country.phone_code;
        this.selectedFlag = this.userProvider.envVars.API + country.flag_image;
        var phoneInput = this.elementRef.nativeElement.querySelector('#phoneNativeInput>input');
        setTimeout(function () {
            console.log("elementSelected");
            _this.renderer.invokeElementMethod(phoneInput, 'focus', []);
        }, 0);
    };
    ContactConfirmPage.prototype.confirm = function () {
        this.baseSingleton.transactionDetails.phoneNumber = this.userPhoneInput;
        this.viewCtrl.dismiss();
    };
    ContactConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-confirm',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\contact-confirm\contact-confirm.html"*/'<!--\n\n  Generated template for the ContactConfirmPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Confirm phone number</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <h3>Check the number</h3>\n\n  <p class="text-muted">below or international format and correct them if needed</p>\n\n  <country-selector class="contact-selector"\n\n    (onSelect)="userPhoneInput = $event.data"\n\n    (onCountriesLoaded)="countriesData = $event.data"\n\n    [inputLabel]="userName"\n\n    [inputModel]="userPhone"\n\n    [inputCode]="selectedCode"\n\n    [inputFlag]="selectedFlag"\n\n  ></country-selector>\n\n  <ion-list no-lines class="country-list">\n\n    <ng-container *ngFor="let country of countriesData" >\n\n      <ion-item class="country-item" (click)="selectCountry(country)">\n\n        <ion-label><img src="{{userProvider.envVars.API + country.flag_image}}"/>\n\n          <span class="country-code">{{country.country_name}}</span> </ion-label>\n\n        <ion-note item-end>\n\n          {{country.phone_code}}\n\n        </ion-note>\n\n      </ion-item>\n\n    </ng-container>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="grey-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            class="orange footer-button"\n\n            full\n\n            (click)="confirm()"\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\contact-confirm\contact-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_3__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ContactConfirmPage);
    return ContactConfirmPage;
}());

//# sourceMappingURL=contact-confirm.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_currency__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choose_payment_method_choose_payment_method__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_webstorage__ = __webpack_require__(94);
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
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, userProvider, currencyProvider, baseSingleton, sanitizer, alertCtrl, transactionsProvider, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.currencyProvider = currencyProvider;
        this.baseSingleton = baseSingleton;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.transactionsProvider = transactionsProvider;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.profile = {
            photo: undefined
        };
        this.tmpImage = false;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if ([__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */].STATUS_ACTIVE, __WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */].STATUS_APPROVED, __WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */].STATUS_NO_TRANSACTIONS].indexOf(this.baseSingleton.currentUserStatus) > -1)
            this.enablePaymentOptions = true;
        this.userProvider.profile().then(function (profileData) {
            _this.profile = profileData;
            _this.transactionsProvider.paymentMethods().then(function (data) {
                _this.paymentMethods = data.results;
                _this.paymentMethods.forEach(function (method) {
                    if (method.id === profileData.payment_method) {
                        if (method.type === __WEBPACK_IMPORTED_MODULE_6__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */].CREDIT_CARD_METHOD) {
                            _this.methodString = 'Card **** ' + method.last_4;
                        }
                        if (method.type === __WEBPACK_IMPORTED_MODULE_6__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */].BANK_ACCOUNT_METHOD) {
                            _this.methodString = 'Bank account';
                        }
                        if (method.type === __WEBPACK_IMPORTED_MODULE_6__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */].SWISH_METHOD) {
                            _this.methodString = 'Swish';
                        }
                    }
                });
            }, function (err) { });
        }, function (err) { });
        this.currencyProvider.currencyList().then(function (data) {
            _this.currencies = data.results;
        }, function (err) { });
        // this.transactionsProvider.withdrawMethods().then(data => {
        //   this.withdrawMethods = data.results;
        // }, err => {});
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.userProvider.logout().then(function (res) {
            _this.token = '';
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            _this.navCtrl.popToRoot();
        }, function () { });
    };
    ProfilePage.prototype.chooseMethod = function () {
        if (this.enablePaymentOptions)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */], { source: __WEBPACK_IMPORTED_MODULE_6__choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */].SOURCE_PROFILE });
    };
    ProfilePage.prototype.saveProfile = function () {
        this.userProvider.saveProfile(this.profile).then(function (_) { }, function (_) { });
    };
    ProfilePage.prototype.onPhotoChange = function (files) {
        var _this = this;
        if (files[0]) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            this.profile.photo = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(this.profile.photo);
            reader_1.onload = function () {
                loading_1.dismiss();
                if (reader_1.result.indexOf('data:image') === -1) {
                    _this.profile.photo = false;
                    var prompt_1 = _this.alertCtrl.create({
                        title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                        message: 'Please select images only',
                        buttons: [
                            {
                                text: 'GOT IT',
                                handler: function (data) {
                                }
                            },
                        ]
                    });
                    prompt_1.present();
                    return;
                }
                _this.tmpImage = _this.sanitizer.bypassSecurityTrustUrl(reader_1.result);
                _this.saveProfile();
            };
            reader_1.onerror = function (error) {
                loading_1.dismiss();
            };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10_ngx_webstorage__["a" /* LocalStorage */])(),
        __metadata("design:type", String)
    ], ProfilePage.prototype, "token", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="avatar-container" (click)="photo.click()">\n\n    <div class="user-avatar">\n\n      <img *ngIf="tmpImage || profile.photo"\n\n           [src]="tmpImage?tmpImage:(userProvider.envVars.API + profile.photo)"\n\n           onError="this.src=\'assets/imgs/image-error.svg\';"/>\n\n      <input type="file" hidden accept="image/x-png,image/heif,image/jpeg" (change)="onPhotoChange(photo.files)" #photo>\n\n      <span class="plus" *ngIf="!profile.photo">+</span>\n\n      <span class="add-photo" *ngIf="!profile.photo">Add photo</span>\n\n    </div>\n\n  </div>\n\n  <div class="user-full-name">\n\n    <h2>{{profile?.full_name}}</h2>\n\n  </div>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Personal info\n\n    </ion-list-header>\n\n    <ion-item *ngIf="profile.email">\n\n      <div class="item-icon" item-start><img src="assets/icon/mail-gray.svg"/></div>{{profile?.email}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/phone-gray.svg"/></div>{{profile?.phone_number}}\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Payment info\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/card-gray.svg"/></div>\n\n      <ion-label [ngClass]="{\'disabled\': !enablePaymentOptions}">Payment method</ion-label>\n\n      <button\n\n        [disabled]="!enablePaymentOptions"\n\n        clear\n\n        item-end\n\n        class="choose-method-button"\n\n        (click)="chooseMethod()"\n\n        *ngIf="profile.payment_method == 0"\n\n      >Choose method</button>\n\n      <ion-label\n\n                 [ngClass]="{\'disabled\': !enablePaymentOptions, \'payment-method-name\': true}"\n\n                 *ngIf="profile.payment_method > 0"\n\n        (click)="chooseMethod()"\n\n                 item-end><div class="container-right">{{methodString}} <ion-icon name="arrow-dropdown"></ion-icon></div>\n\n      </ion-label>\n\n    </ion-item>\n\n    <!--<ion-item>-->\n\n      <!--<div class="item-icon" item-start><img src="assets/icon/cash-gray.svg"/></div>-->\n\n      <!--<ion-label>Withdraw method</ion-label>-->\n\n      <!--<ion-select-->\n\n        <!--[disabled]="!enablePaymentOptions"-->\n\n        <!--[(ngModel)]="profile.withdraw_type"-->\n\n        <!--(ionChange)="saveProfile()"-->\n\n        <!--class="method-selector"-->\n\n        <!--placeholder="Choose option" item-end>-->\n\n        <!--<ion-option *ngFor="let withdrawMethodItem of withdrawMethods" [value]="withdrawMethodItem.id">{{withdrawMethodItem.name}}</ion-option>-->\n\n      <!--</ion-select>-->\n\n    <!--</ion-item>-->\n\n    <!--<ion-item>-->\n\n      <!--<div class="item-icon" item-start><img src="assets/icon/currency-gray.svg"/></div>-->\n\n      <!--<ion-label>Currency</ion-label>-->\n\n      <!--<ion-select-->\n\n        <!--[disabled]="!enablePaymentOptions"-->\n\n        <!--[(ngModel)]="profile.currency"-->\n\n        <!--(ionChange)="saveProfile()"-->\n\n        <!--class="currency-selector" item-end>-->\n\n        <!--<ion-option *ngFor="let currencyItem of currencies">{{currencyItem.currency}}</ion-option>-->\n\n      <!--</ion-select>-->\n\n    <!--</ion-item>-->\n\n  </ion-list>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button\n\n          (click)="logout()"\n\n          ion-button\n\n          clear\n\n          full\n\n          class="logout-button"\n\n        >Log out</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_8__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseWithdrawalMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__withdraw_money_withdraw_money__ = __webpack_require__(393);
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
 * Generated class for the ChooseWithdrawalMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseWithdrawalMethodPage = (function () {
    function ChooseWithdrawalMethodPage(navCtrl, transactionsProvider, navParams) {
        this.navCtrl = navCtrl;
        this.transactionsProvider = transactionsProvider;
        this.navParams = navParams;
    }
    ChooseWithdrawalMethodPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.balanceID = this.navParams.get('balanceID');
        this.transactionsProvider.withdrawalUserMethods().then(function (methods) {
            _this.withdrawMethods = methods;
        }, function (err) { });
    };
    ChooseWithdrawalMethodPage.prototype.selectMethod = function (method) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__withdraw_money_withdraw_money__["a" /* WithdrawMoneyPage */], { balanceID: this.balanceID, method: method });
    };
    ChooseWithdrawalMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-choose-withdrawal-method',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\choose-withdrawal-method\choose-withdrawal-method.html"*/'<!--\n\n  Generated template for the ChooseWithdrawalMethodPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Choose the withdraw method</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card class="method-card credit" (click)="selectMethod(method)" *ngFor="let method of withdrawMethods">\n\n    <div class="method-name">\n\n      {{method.method.method_name}}\n\n    </div>\n\n    <div class="action-button">\n\n      <a href="#">Choose</a>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\choose-withdrawal-method\choose-withdrawal-method.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChooseWithdrawalMethodPage);
    return ChooseWithdrawalMethodPage;
}());

//# sourceMappingURL=choose-withdrawal-method.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transactions__ = __webpack_require__(30);
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
 * Generated class for the WithdrawMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WithdrawMoneyPage = (function () {
    function WithdrawMoneyPage(navCtrl, transactionsProvider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.transactionsProvider = transactionsProvider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.method = this.navParams.get('method');
        this.balanceID = this.navParams.get('balanceID');
    }
    WithdrawMoneyPage.prototype.ionViewDidEnter = function () {
    };
    WithdrawMoneyPage.prototype.confirm = function () {
        var _this = this;
        var data = {
            balance_id: this.balanceID,
            method_id: this.method.id
        };
        this.method.method.fields.forEach(function (field) {
            data[field.name] = field.val;
        });
        this.transactionsProvider.withdrawMoney(data).then(function (res) {
            var prompt = _this.alertCtrl.create({
                title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                message: 'Your request has been successfully sent',
                buttons: [
                    {
                        text: 'GOT IT',
                        handler: function (data) {
                            _this.navCtrl.popToRoot();
                        }
                    },
                ]
            });
            prompt.present();
        }, function (err) { });
    };
    WithdrawMoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-withdraw-money',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\withdraw-money\withdraw-money.html"*/'<!--\n\n  Generated template for the WithdrawMoneyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Withdraw money</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let input of method.method.fields">\n\n      <ion-label floating>{{input.name_verbose}}</ion-label>\n\n      <ion-input [(ngModel)]="input.val"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            class="orange footer-button"\n\n            (click)="confirm()"\n\n            full\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\withdraw-money\withdraw-money.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WithdrawMoneyPage);
    return WithdrawMoneyPage;
}());

//# sourceMappingURL=withdraw-money.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
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
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionsPage = (function () {
    function TermsAndConditionsPage(navCtrl, user, navParams) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.navParams = navParams;
    }
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user.termsAndConditions()
            .then(function (data) {
            _this.terms = data.text;
        }, function (err) { });
    };
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\terms-and-conditions\terms-and-conditions.html"*/'<!--\n\n  Generated template for the TermsAndConditionsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Terms & Conditions</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div [innerHTML]="terms"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\terms-and-conditions\terms-and-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_code_register_code__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(23);
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
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, user) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.phone_number = '';
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
    };
    ForgotPasswordPage.prototype.submitForm = function () {
        var _this = this;
        var phone_striped = this.phone_number.replace(/\D/g, '');
        this.user.resetPassword({ phone_number: '+' + phone_striped })
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_code_register_code__["a" /* RegisterCodePage */], { phone: _this.phone_number, user: data.user_id, source: 'reset' });
        }, function (err) { });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\forgot-password\forgot-password.html"*/'<!--\n\n  Generated template for the ForgotPasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Reset password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form id="resetPhone" (ngSubmit)="submitForm()" novalidate>\n\n    <country-selector (onSelect)="phone_number = $event.data"></country-selector>\n\n\n\n  </form>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            [disabled]="!phone_number"\n\n            type="submit"\n\n            form="resetPhone"\n\n            class="orange footer-button"\n\n            full\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPhoneSelectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_country_data__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_country_data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_country_data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(23);
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
 * Generated class for the CountryPhoneSelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CountryPhoneSelectorPage = (function () {
    function CountryPhoneSelectorPage(navCtrl, viewCtrl, userProvider, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.userProvider = userProvider;
        this.navParams = navParams;
        this.countriesData = __WEBPACK_IMPORTED_MODULE_2_country_data__;
        this.countriesData = this.navParams.get('countries');
    }
    CountryPhoneSelectorPage.prototype.ionViewDidLoad = function () {
    };
    CountryPhoneSelectorPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CountryPhoneSelectorPage.prototype.selectCountry = function (code) {
        this.viewCtrl.dismiss(code);
    };
    CountryPhoneSelectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-country-phone-selector',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\country-phone-selector\country-phone-selector.html"*/'<!--\n\n  Generated template for the CountryPhoneSelectorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Country Code</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list no-lines>\n\n      <ion-item class="country-item" (click)="selectCountry(country)" *ngFor="let country of countriesData" >\n\n        <ion-label><img src="{{userProvider.envVars.API + country.flag_image}}"/>\n\n        <span class="country-code">{{country.country_name}}</span> </ion-label>\n\n      <ion-note item-end>\n\n        {{country.phone_code}}\n\n      </ion-note>\n\n      </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\country-phone-selector\country-phone-selector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], CountryPhoneSelectorPage);
    return CountryPhoneSelectorPage;
}());

//# sourceMappingURL=country-phone-selector.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_env_token__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_webstorage__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var BaseProvider = (function () {
    function BaseProvider(events, envVars, http) {
        this.events = events;
        this.envVars = envVars;
        this.http = http;
        this.API = this.envVars.API + '/api/';
        this.ENV = this.envVars;
    }
    BaseProvider_1 = BaseProvider;
    BaseProvider.prototype.reqOptions = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]()
                .set('Accept', 'application/json')
                .set('Authorization', 'Token ' + this.token),
            withCredentials: true
        };
    };
    BaseProvider.prototype._catchRequestError = function (error, source) {
        if (source !== BaseProvider_1.HIDE_LOADING)
            this.events.publish('loading:hide');
        if (source === 'hideError')
            return;
        if (error.status === 0) {
            this.showOfflineError();
            return;
        }
        if (error.status === 500) {
            this.show500();
            return;
        }
        if (error.status === 403) {
            if (source !== 'LoadingEntry')
                this.show403();
        }
        else {
            this.events.publish('error:show', 'Error', (('message' in error.error) ? error.error.message : error.message));
        }
    };
    BaseProvider.prototype._catchRequestResult = function (result) {
        this.events.publish('loading:hide');
    };
    BaseProvider.prototype.show403 = function () {
        this.events.publish('403:show');
    };
    BaseProvider.prototype.show500 = function () {
        this.events.publish('500:show');
    };
    BaseProvider.prototype.showOfflineError = function () {
        this.events.publish('offline:show');
    };
    BaseProvider.prototype.makeRawRequest = function (method, path, data, source) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (source === void 0) { source = ''; }
        if (source !== BaseProvider_1.HIDE_LOADING)
            this.events.publish('loading:show');
        var finalPath = (path.indexOf('http') !== -1) ? path : this.API + path;
        var action = (method === 'get') ? this.http[method](finalPath, this.reqOptions())
            : this.http[method](finalPath, data, this.reqOptions());
        return action
            .do(function (res) { _this._catchRequestResult(res); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(_this._catchRequestError(error, source)); })
            .toPromise();
    };
    BaseProvider.HIDE_LOADING = 'hideLoading';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ngx_webstorage__["a" /* LocalStorage */])(),
        __metadata("design:type", String)
    ], BaseProvider.prototype, "token", void 0);
    BaseProvider = BaseProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__config_env_token__["a" /* EnvVariables */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], BaseProvider);
    return BaseProvider;
    var BaseProvider_1;
}());

//# sourceMappingURL=baseProvider.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(537);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_phone_register_phone__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_input_mask__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_code_register_code__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_exchange_rates_exchange_rates__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_country_phone_selector_country_phone_selector__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_password_create_password__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_country_selector_country_selector__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_verify_account_verify_account__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_documents_documents__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_documents__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_loading_loading__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_balance__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_moment__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_choose_payment_method_choose_payment_method__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_add_card_add_card__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_http__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_currency__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_error_error__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_contact_list_contact_list__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_contacts__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_amount_amount__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_transaction_submit_transaction_submit__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_keyboard__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_contact_confirm_contact_confirm__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_profile_profile__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_transaction_success_transaction_success__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_request_submit_request_submit__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_paymentRequests__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_transaction_submit_manual_transaction_submit_manual__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ngx_clipboard__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_choose_withdrawal_method_choose_withdrawal_method__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_withdraw_money_withdraw_money__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__config_env_module__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_device__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ngx_webstorage__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__directives_input_mask__["a" /* InputMask */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_phone_register_phone__["a" /* RegisterPhonePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_code_register_code__["a" /* RegisterCodePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_exchange_rates_exchange_rates__["a" /* ExchangeRatesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_country_phone_selector_country_phone_selector__["a" /* CountryPhoneSelectorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_password_create_password__["a" /* CreatePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__components_country_selector_country_selector__["a" /* CountrySelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_verify_account_verify_account__["a" /* VerifyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_add_card_add_card__["a" /* AddCardPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_error_error__["a" /* ErrorPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_list_contact_list__["a" /* ContactListPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_amount_amount__["a" /* AmountPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_transaction_submit_transaction_submit__["a" /* TransactionSubmitPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_transaction_submit_manual_transaction_submit_manual__["a" /* TransactionSubmitManualPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_contact_confirm_contact_confirm__["a" /* ContactConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_transaction_success_transaction_success__["a" /* TransactionSuccessPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_request_submit_request_submit__["a" /* RequestSubmitPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_choose_withdrawal_method_choose_withdrawal_method__["a" /* ChooseWithdrawalMethodPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_withdraw_money_withdraw_money__["a" /* WithdrawMoneyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_25_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_28__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_42_ngx_clipboard__["a" /* ClipboardModule */],
                __WEBPACK_IMPORTED_MODULE_45__config_env_module__["a" /* EnvironmentsModule */],
                __WEBPACK_IMPORTED_MODULE_47_ngx_webstorage__["b" /* Ng2Webstorage */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_phone_register_phone__["a" /* RegisterPhonePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_code_register_code__["a" /* RegisterCodePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_exchange_rates_exchange_rates__["a" /* ExchangeRatesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_country_phone_selector_country_phone_selector__["a" /* CountryPhoneSelectorPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_password_create_password__["a" /* CreatePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_verify_account_verify_account__["a" /* VerifyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_choose_payment_method_choose_payment_method__["a" /* ChoosePaymentMethodPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_add_card_add_card__["a" /* AddCardPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_error_error__["a" /* ErrorPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_list_contact_list__["a" /* ContactListPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_amount_amount__["a" /* AmountPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_transaction_submit_transaction_submit__["a" /* TransactionSubmitPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_transaction_submit_manual_transaction_submit_manual__["a" /* TransactionSubmitManualPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_contact_confirm_contact_confirm__["a" /* ContactConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_transaction_success_transaction_success__["a" /* TransactionSuccessPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_request_submit_request_submit__["a" /* RequestSubmitPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_choose_withdrawal_method_choose_withdrawal_method__["a" /* ChooseWithdrawalMethodPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_withdraw_money_withdraw_money__["a" /* WithdrawMoneyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__providers_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_documents__["a" /* DocumentsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_balance__["a" /* BalanceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_transactions__["a" /* TransactionsProvider */],
                __WEBPACK_IMPORTED_MODULE_7__services_base__["a" /* BaseSingleton */],
                __WEBPACK_IMPORTED_MODULE_29__providers_currency__["a" /* CurrencyProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_paymentRequests__["a" /* PaymentRequestsProvider */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_contacts__["a" /* Contacts */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_loading_loading__ = __webpack_require__(277);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_loading_loading__["a" /* LoadingPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\repos\plingpay-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseProvider__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CurrencyProvider = (function (_super) {
    __extends(CurrencyProvider, _super);
    function CurrencyProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrencyProvider.prototype.currencyList = function () {
        return this.makeRawRequest('get', 'currency');
    };
    CurrencyProvider.prototype.currencyRate = function (currency, amount) {
        return this.makeRawRequest('post', 'currency', { currency: currency, amount: amount });
    };
    CurrencyProvider.prototype.defaultCurrencyByUser = function (userPhone, source) {
        if (source === void 0) { source = ''; }
        return this.makeRawRequest('post', 'users/currency', { phone_number: userPhone }, source);
    };
    CurrencyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CurrencyProvider);
    return CurrencyProvider;
}(__WEBPACK_IMPORTED_MODULE_1__baseProvider__["a" /* BaseProvider */]));

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSubmitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_success_transaction_success__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__amount_amount__ = __webpack_require__(97);
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
 * Generated class for the TransactionSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionSubmitPage = (function () {
    function TransactionSubmitPage(navCtrl, transactionsProvider, baseService, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.transactionsProvider = transactionsProvider;
        this.baseService = baseService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.transaction = this.navParams.get('transaction');
        this.fromRequest = this.navParams.get('fromRequest');
    }
    TransactionSubmitPage.prototype.ionViewDidLoad = function () {
    };
    TransactionSubmitPage.prototype.edit = function () {
        var _this = this;
        var amountModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__amount_amount__["a" /* AmountPage */], { isModal: true });
        amountModal.present();
        amountModal.onDidDismiss(function (data) {
            if (data.confirmed) {
                _this.transactionsProvider.editTransaction(_this.transaction.id, {
                    amount_to: _this.baseService.transactionDetails.amount,
                    currency_to: _this.baseService.transactionDetails.currency,
                    comment: _this.baseService.transactionDetails.comment
                }).then(function (transaction) {
                    _this.transaction = transaction.transaction;
                }, function (err) { });
            }
        });
    };
    TransactionSubmitPage.prototype.submit = function () {
        var _this = this;
        this.transactionsProvider.approveTransaction(this.transaction.id).then(function (data) {
            if (_this.saveAsTemplate) {
                _this.transactionsProvider.saveTransactionAsTemplate(_this.transaction.id).then(function () { }, function () { });
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transaction_success_transaction_success__["a" /* TransactionSuccessPage */]);
        }, function (err) { });
    };
    TransactionSubmitPage.prototype.cancel = function () {
        var _this = this;
        this.baseService.initiateTransactionDetails();
        this.transactionsProvider.cancelTransaction(this.transaction.id).then(function (data) { _this.navCtrl.popToRoot(); }, function (err) { });
    };
    TransactionSubmitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction-submit',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\transaction-submit\transaction-submit.html"*/'<!--\n\n  Generated template for the TransactionSubmitPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Payment info</ion-title>\n\n    <ion-buttons end>\n\n      <button\n\n        ion-button\n\n        *ngIf="fromRequest || transaction.from_template"\n\n        (click)="edit()">\n\n        Edit\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/right-top-arrow.svg"/></div>\n\n      Transfer to\n\n      <ion-note item-end class="value">{{transaction.user_to.full_name || transaction.user_to.phone_number}}</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/card.svg"/></div>\n\n      Payment method\n\n      <ion-note item-end class="value">{{transaction.payment_method.name}}\n\n        {{transaction.payment_method.name === \'Credit card\'?\' *** \' + transaction.payment_method.last4:\'\'}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/wallet-gray.svg"/></div>\n\n      Transfer amount\n\n      <ion-note item-end class="value">{{transaction.amount.amount}} {{transaction.amount.currency}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="item-icon" item-start><img src="assets/icon/db.svg"/></div>\n\n      Total\n\n      <ion-note item-end class="value">{{transaction.total.total}} {{transaction.total.currency}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="transaction.comment">\n\n      <ion-row>\n\n        <ion-col col-2 class="icon-col">\n\n          <img src="assets/icon/comment-gray.svg"/>\n\n        </ion-col>\n\n        <ion-col col-4 class="name-col">\n\n          Comment\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          "{{transaction.comment}}"\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row class="save-checkbox">\n\n        <ion-col col-3></ion-col>\n\n        <ion-col col-9>\n\n          <ion-item>\n\n            <ion-label>Save as template</ion-label>\n\n            <ion-checkbox [(ngModel)]="saveAsTemplate"></ion-checkbox>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          class="sign-up footer-button"\n\n          (click)="cancel()"\n\n          block>Cancel</button></ion-col>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          block\n\n          (click)="submit()"\n\n          class="orange footer-button"\n\n        >Submit</button></ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\transaction-submit\transaction-submit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TransactionSubmitPage);
    return TransactionSubmitPage;
}());

//# sourceMappingURL=transaction-submit.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_phone_register_phone__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_and_conditions_terms_and_conditions__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exchange_rates_exchange_rates__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_code_register_code__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__ = __webpack_require__(395);
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
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, user, elRef) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.elRef = elRef;
        this.phone_number = '';
        this.password = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.submitForm = function () {
        var _this = this;
        this.user.userAuth({ phone_number: this.phone_number, password: this.password })
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_code_register_code__["a" /* RegisterCodePage */], { phone: _this.phone_number, user: data.user_id, source: 'signin' });
        }, function (err) { });
    };
    LoginPage.prototype.openTerms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]);
    };
    LoginPage.prototype.signUp = function () {
        var _this = this;
        if (this.phone_number.length > 5) {
            this.user.registerPhone({ phone_number: this.phone_number })
                .then(function (data) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_code_register_code__["a" /* RegisterCodePage */], { phone: _this.phone_number, user: data.user_id, source: 'signup' });
            }, function (err) { });
        }
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_phone_register_phone__["a" /* RegisterPhonePage */]);
    };
    LoginPage.prototype.goToRates = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__exchange_rates_exchange_rates__["a" /* ExchangeRatesPage */]);
    };
    LoginPage.prototype.goToForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('phoneInput'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "phoneInput", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid class="logo">\n\n    <ion-row>\n\n      <ion-col col-3></ion-col>\n\n      <ion-col col-6><img src="assets/imgs/plingpay-logo.svg"/></ion-col>\n\n      <ion-col col-3 class="stats-button-container">\n\n        <button ion-button icon-only color="primary" clear float-right (click)="goToRates()">\n\n          <img src="assets/icon/rates-blue.svg"/>\n\n      </button></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div id="logo">\n\n\n\n  </div>\n\n  <form id="login" (ngSubmit)="submitForm()" novalidate>\n\n    <country-selector (onSelect)="phone_number = $event.data"></country-selector>\n\n    <ion-item id="passwordInput">\n\n      <ion-label floating>Lösenord</ion-label>\n\n      <ion-input\n\n        [(ngModel)]="password"\n\n        type="password"\n\n        [ngModelOptions]="{standalone: true}"\n\n      ></ion-input>\n\n    </ion-item>\n\n    <ion-item class="hollow-item">\n\n      <span class="forgot-pass" (click)="goToForgotPassword()">Glömt lösenord?</span>\n\n    </ion-item>\n\n\n\n  </form>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          class="sign-up footer-button"\n\n          (click)="signUp()"\n\n          block>Sign up</button></ion-col>\n\n        <ion-col col-6><button\n\n          ion-button\n\n          [disabled]="!phone_number || (password.length < 8)"\n\n          type="submit"\n\n          form="login"\n\n          block\n\n          class="orange footer-button"\n\n        >Sign in</button></ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 class="terms">\n\n          <span>By signing up, you agree to our <a href="#" (click)="openTerms()">Terms and Privacy Policy</a></span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var InputMask = (function () {
    function InputMask(pattern) {
        this.pattern = pattern;
    }
    InputMask.prototype.onInputChange = function (e) {
        try {
            var value = e.target.value, caret = e.target.selectionStart, pattern = this.pattern, reserve = pattern.replace(/\*/, 'g'), applied = '', ordinal = 0;
            if (e.keyCode === 8 || e.key === 'Backspace' || e.keyCode === 46 || e.key === 'Delete') {
                if (value.length) {
                    //remove all trailing formatting
                    while (value.length && pattern[value.length] && pattern[value.length] !== '*') {
                        value = value.substring(0, value.length - 1);
                    }
                    //remove all leading formatting to restore placeholder
                    if (pattern.substring(0, value.length).indexOf('*') < 0) {
                        value = value.substring(0, value.length - 1);
                    }
                }
            }
            //apply mask characters
            for (var i = 0; i < value.length; i++) {
                //enforce pattern limit
                if (i < pattern.length) {
                    //match mask
                    if (value[i] === pattern[ordinal]) {
                        applied += value[i];
                        ordinal++;
                    }
                    else if (reserve.indexOf(value[i]) > -1) {
                        //skip other reserved characters
                    }
                    else {
                        //apply leading formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                        applied += value[i];
                        ordinal++;
                        //apply trailing formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                    }
                }
            }
            e.target.value = applied;
            if (caret < value.length) {
                e.target.setSelectionRange(caret, caret);
            }
        }
        catch (ex) {
            console.error(ex.message);
        }
    };
    InputMask = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[mask]',
            host: {
                '(keyup)': 'onInputChange($event)'
            }
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('mask')),
        __metadata("design:paramtypes", [String])
    ], InputMask);
    return InputMask;
}());

//# sourceMappingURL=input-mask.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountrySelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_country_phone_selector_country_phone_selector__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(23);
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
 * Generated class for the CountrySelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CountrySelectorComponent = (function () {
    function CountrySelectorComponent(modalCtrl, userProvider, renderer, elementRef) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.userProvider = userProvider;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCountriesLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputModel = '';
        this.inputLabel = 'Phone';
        this.userProvider.countries()
            .then(function (data) {
            _this.countries = data.results;
            _this.onCountriesLoaded.emit({ data: _this.countries });
            _this.imagePath = _this.userProvider.envVars.API + data.results[0].flag_image;
            _this.selectedCode = data.results[0].phone_code;
            _this.triggerInputEvent();
        }, function (err) { });
    }
    CountrySelectorComponent.prototype.openCodesSelector = function () {
        var _this = this;
        var countryModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__pages_country_phone_selector_country_phone_selector__["a" /* CountryPhoneSelectorPage */], { countries: this.countries });
        countryModal.onDidDismiss(function (data) {
            if (data) {
                _this.selectedCode = data.phone_code;
                _this.triggerInputEvent();
                _this.imagePath = _this.userProvider.envVars.API + data.flag_image;
                var phoneNativeInput_1 = _this.elementRef.nativeElement.querySelector('#phoneNativeInput>input');
                setTimeout(function () {
                    _this.renderer.invokeElementMethod(phoneNativeInput_1, 'focus', []);
                }, 0);
            }
        });
        countryModal.present();
    };
    CountrySelectorComponent.prototype.triggerInputEvent = function () {
        var phoneStriped = '';
        if (this.inputModel) {
            phoneStriped = this.inputModel.replace(/\D/g, '');
        }
        var codeStriped = this.selectedCode.replace(/\D/g, '');
        this.onSelect.emit({ data: '+' + codeStriped + phoneStriped });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CountrySelectorComponent.prototype, "onSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CountrySelectorComponent.prototype, "onCountriesLoaded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('inputModel'),
        __metadata("design:type", String)
    ], CountrySelectorComponent.prototype, "inputModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('inputLabel'),
        __metadata("design:type", String)
    ], CountrySelectorComponent.prototype, "inputLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('inputFlag'),
        __metadata("design:type", String)
    ], CountrySelectorComponent.prototype, "imagePath", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('inputCode'),
        __metadata("design:type", String)
    ], CountrySelectorComponent.prototype, "selectedCode", void 0);
    CountrySelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'country-selector',template:/*ion-inline-start:"D:\repos\plingpay-app\src\components\country-selector\country-selector.html"*/'<!-- Generated template for the CountrySelectorComponent component -->\n\n<ion-item id="phoneInput">\n\n  <div id="phone-country" (click)="openCodesSelector()" item-start>\n\n    <div class="phone-country-inner">\n\n      <img src="{{imagePath}}" *ngIf="imagePath"/>\n\n      <span class="selected-code">{{selectedCode}}</span>\n\n    </div>\n\n  </div>\n\n  <ion-label floating>{{inputLabel}}</ion-label>\n\n  <ion-input\n\n    type="tel"\n\n    pattern="\d*"\n\n    [(ngModel)]="inputModel"\n\n    name="inputModel"\n\n    id="phoneNativeInput"\n\n    (ionChange)="triggerInputEvent()"\n\n    (ionFocus)="triggerInputEvent()"\n\n  ></ion-input>\n\n</ion-item>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\components\country-selector\country-selector.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], CountrySelectorComponent);
    return CountrySelectorComponent;
}());

//# sourceMappingURL=country-selector.js.map

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 399,
	"./af.js": 399,
	"./ar": 400,
	"./ar-dz": 401,
	"./ar-dz.js": 401,
	"./ar-kw": 402,
	"./ar-kw.js": 402,
	"./ar-ly": 403,
	"./ar-ly.js": 403,
	"./ar-ma": 404,
	"./ar-ma.js": 404,
	"./ar-sa": 405,
	"./ar-sa.js": 405,
	"./ar-tn": 406,
	"./ar-tn.js": 406,
	"./ar.js": 400,
	"./az": 407,
	"./az.js": 407,
	"./be": 408,
	"./be.js": 408,
	"./bg": 409,
	"./bg.js": 409,
	"./bm": 410,
	"./bm.js": 410,
	"./bn": 411,
	"./bn.js": 411,
	"./bo": 412,
	"./bo.js": 412,
	"./br": 413,
	"./br.js": 413,
	"./bs": 414,
	"./bs.js": 414,
	"./ca": 415,
	"./ca.js": 415,
	"./cs": 416,
	"./cs.js": 416,
	"./cv": 417,
	"./cv.js": 417,
	"./cy": 418,
	"./cy.js": 418,
	"./da": 419,
	"./da.js": 419,
	"./de": 420,
	"./de-at": 421,
	"./de-at.js": 421,
	"./de-ch": 422,
	"./de-ch.js": 422,
	"./de.js": 420,
	"./dv": 423,
	"./dv.js": 423,
	"./el": 424,
	"./el.js": 424,
	"./en-au": 425,
	"./en-au.js": 425,
	"./en-ca": 426,
	"./en-ca.js": 426,
	"./en-gb": 427,
	"./en-gb.js": 427,
	"./en-ie": 428,
	"./en-ie.js": 428,
	"./en-nz": 429,
	"./en-nz.js": 429,
	"./eo": 430,
	"./eo.js": 430,
	"./es": 431,
	"./es-do": 432,
	"./es-do.js": 432,
	"./es-us": 433,
	"./es-us.js": 433,
	"./es.js": 431,
	"./et": 434,
	"./et.js": 434,
	"./eu": 435,
	"./eu.js": 435,
	"./fa": 436,
	"./fa.js": 436,
	"./fi": 437,
	"./fi.js": 437,
	"./fo": 438,
	"./fo.js": 438,
	"./fr": 439,
	"./fr-ca": 440,
	"./fr-ca.js": 440,
	"./fr-ch": 441,
	"./fr-ch.js": 441,
	"./fr.js": 439,
	"./fy": 442,
	"./fy.js": 442,
	"./gd": 443,
	"./gd.js": 443,
	"./gl": 444,
	"./gl.js": 444,
	"./gom-latn": 445,
	"./gom-latn.js": 445,
	"./gu": 446,
	"./gu.js": 446,
	"./he": 447,
	"./he.js": 447,
	"./hi": 448,
	"./hi.js": 448,
	"./hr": 449,
	"./hr.js": 449,
	"./hu": 450,
	"./hu.js": 450,
	"./hy-am": 451,
	"./hy-am.js": 451,
	"./id": 452,
	"./id.js": 452,
	"./is": 453,
	"./is.js": 453,
	"./it": 454,
	"./it.js": 454,
	"./ja": 455,
	"./ja.js": 455,
	"./jv": 456,
	"./jv.js": 456,
	"./ka": 457,
	"./ka.js": 457,
	"./kk": 458,
	"./kk.js": 458,
	"./km": 459,
	"./km.js": 459,
	"./kn": 460,
	"./kn.js": 460,
	"./ko": 461,
	"./ko.js": 461,
	"./ky": 462,
	"./ky.js": 462,
	"./lb": 463,
	"./lb.js": 463,
	"./lo": 464,
	"./lo.js": 464,
	"./lt": 465,
	"./lt.js": 465,
	"./lv": 466,
	"./lv.js": 466,
	"./me": 467,
	"./me.js": 467,
	"./mi": 468,
	"./mi.js": 468,
	"./mk": 469,
	"./mk.js": 469,
	"./ml": 470,
	"./ml.js": 470,
	"./mr": 471,
	"./mr.js": 471,
	"./ms": 472,
	"./ms-my": 473,
	"./ms-my.js": 473,
	"./ms.js": 472,
	"./mt": 474,
	"./mt.js": 474,
	"./my": 475,
	"./my.js": 475,
	"./nb": 476,
	"./nb.js": 476,
	"./ne": 477,
	"./ne.js": 477,
	"./nl": 478,
	"./nl-be": 479,
	"./nl-be.js": 479,
	"./nl.js": 478,
	"./nn": 480,
	"./nn.js": 480,
	"./pa-in": 481,
	"./pa-in.js": 481,
	"./pl": 482,
	"./pl.js": 482,
	"./pt": 483,
	"./pt-br": 484,
	"./pt-br.js": 484,
	"./pt.js": 483,
	"./ro": 485,
	"./ro.js": 485,
	"./ru": 486,
	"./ru.js": 486,
	"./sd": 487,
	"./sd.js": 487,
	"./se": 488,
	"./se.js": 488,
	"./si": 489,
	"./si.js": 489,
	"./sk": 490,
	"./sk.js": 490,
	"./sl": 491,
	"./sl.js": 491,
	"./sq": 492,
	"./sq.js": 492,
	"./sr": 493,
	"./sr-cyrl": 494,
	"./sr-cyrl.js": 494,
	"./sr.js": 493,
	"./ss": 495,
	"./ss.js": 495,
	"./sv": 496,
	"./sv.js": 496,
	"./sw": 497,
	"./sw.js": 497,
	"./ta": 498,
	"./ta.js": 498,
	"./te": 499,
	"./te.js": 499,
	"./tet": 500,
	"./tet.js": 500,
	"./th": 501,
	"./th.js": 501,
	"./tl-ph": 502,
	"./tl-ph.js": 502,
	"./tlh": 503,
	"./tlh.js": 503,
	"./tr": 504,
	"./tr.js": 504,
	"./tzl": 505,
	"./tzl.js": 505,
	"./tzm": 506,
	"./tzm-latn": 507,
	"./tzm-latn.js": 507,
	"./tzm.js": 506,
	"./uk": 508,
	"./uk.js": 508,
	"./ur": 509,
	"./ur.js": 509,
	"./uz": 510,
	"./uz-latn": 511,
	"./uz-latn.js": 511,
	"./uz.js": 510,
	"./vi": 512,
	"./vi.js": 512,
	"./x-pseudo": 513,
	"./x-pseudo.js": 513,
	"./yo": 514,
	"./yo.js": 514,
	"./zh-cn": 515,
	"./zh-cn.js": 515,
	"./zh-hk": 516,
	"./zh-hk.js": 516,
	"./zh-tw": 517,
	"./zh-tw.js": 517
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 876;

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the ErrorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ErrorPage = (function () {
    function ErrorPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.title = navParams.get('title') || 'Something went wrong';
        this.message = navParams.get('message') || 'Sorry bro';
    }
    ErrorPage.prototype.ionViewDidLoad = function () {
    };
    ErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-error',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\error\error.html"*/'<!--\n\n  Generated template for the ErrorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content>\n\n  <div class="error-img">\n\n    <img src="assets/imgs/error_general.svg"/>\n\n  </div>\n\n  <h3>{{title}}</h3>\n\n  <p>{{message}}</p>\n\n</ion-content>\n\n\n\n<ion-footer class="grey-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            class="orange footer-button"\n\n            full\n\n            (click)="viewCtrl.dismiss()"\n\n          >Try again</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\error\error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ErrorPage);
    return ErrorPage;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environmentFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_token__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_dev__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_prod__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




function environmentFactory() {
    return  false ? prodVars : __WEBPACK_IMPORTED_MODULE_2__config_dev__["a" /* devVars */];
}
var EnvironmentsModule = (function () {
    function EnvironmentsModule() {
    }
    EnvironmentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__env_token__["a" /* EnvVariables */],
                    // useFactory instead of useValue so we can easily add more logic as needed.
                    useFactory: environmentFactory
                }
            ]
        })
    ], EnvironmentsModule);
    return EnvironmentsModule;
}());

//# sourceMappingURL=env.module.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return devVars; });
var devVars = {
    API: 'https://plingpay.eu'
};
//# sourceMappingURL=config.dev.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prodVars */
var prodVars = {
    API: 'https://plingpay.eu'
};
//# sourceMappingURL=config.prod.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_password_create_password__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_webstorage__ = __webpack_require__(94);
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
 * Generated class for the RegisterCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterCodePage = (function () {
    function RegisterCodePage(navCtrl, elementRef, renderer, user, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.codeNum1 = '';
        this.codeNum2 = '';
        this.codeNum3 = '';
        this.codeNum4 = '';
        this.registerPhone = this.navParams.get('phone');
        this.registerUserID = this.navParams.get('user');
        this.source = this.navParams.get('source');
    }
    RegisterCodePage.prototype.selectFirst = function () {
        var _this = this;
        this.codeNum1 = '';
        var codeNum1 = this.elementRef.nativeElement.querySelector('#codeNum1>input');
        setTimeout(function () {
            _this.renderer.invokeElementMethod(codeNum1, 'focus', []);
        }, 0);
    };
    RegisterCodePage.prototype.selectSecond = function () {
        var _this = this;
        this.codeNum2 = '';
        var codeNum2 = this.elementRef.nativeElement.querySelector('#codeNum2>input');
        setTimeout(function () {
            _this.renderer.invokeElementMethod(codeNum2, 'focus', []);
        }, 0);
    };
    RegisterCodePage.prototype.selectThird = function () {
        var _this = this;
        this.codeNum3 = '';
        var codeNum3 = this.elementRef.nativeElement.querySelector('#codeNum3>input');
        setTimeout(function () {
            _this.renderer.invokeElementMethod(codeNum3, 'focus', []);
        }, 0);
    };
    RegisterCodePage.prototype.selectFourth = function () {
        var _this = this;
        this.codeNum4 = '';
        var codeNum4 = this.elementRef.nativeElement.querySelector('#codeNum4>input');
        setTimeout(function () {
            _this.renderer.invokeElementMethod(codeNum4, 'focus', []);
        }, 0);
    };
    RegisterCodePage.prototype.codeInputFirst = function (event) {
        event.preventDefault();
        var keyIdentifier = '';
        if (event.keyIdentifier)
            keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
        var key = event.key || keyIdentifier;
        if (/^\d$/.test(key)) {
            this.codeNum1 = key;
            this.selectSecond();
        }
    };
    RegisterCodePage.prototype.codeInputSecond = function (event) {
        event.preventDefault();
        var keyIdentifier = '';
        if (event.keyIdentifier)
            keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
        var key = event.key || keyIdentifier;
        if (/^\d$/.test(key)) {
            this.codeNum2 = key;
            this.selectThird();
        }
        else if (((event.key === 'Backspace') || (event.keyIdentifier === 'U+0008')) && (this.codeNum2 === '')) {
            this.selectFirst();
        }
    };
    RegisterCodePage.prototype.codeInputThird = function (event) {
        event.preventDefault();
        var keyIdentifier = '';
        if (event.keyIdentifier)
            keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
        var key = event.key || keyIdentifier;
        if (/^\d$/.test(key)) {
            this.codeNum3 = key;
            this.selectFourth();
        }
        else if (((event.key === 'Backspace') || (event.keyIdentifier === 'U+0008')) && (this.codeNum3 === '')) {
            this.selectSecond();
        }
    };
    RegisterCodePage.prototype.codeInputFourth = function (event) {
        var _this = this;
        event.preventDefault();
        var keyIdentifier = '';
        if (event.keyIdentifier)
            keyIdentifier = String.fromCharCode(event.keyIdentifier.replace('U+', '0x'));
        var key = event.key || keyIdentifier;
        if (/^\d$/.test(key)) {
            this.codeNum4 = key;
            var submitButton_1 = this.elementRef.nativeElement.querySelector('#submitButton');
            setTimeout(function () {
                _this.renderer.invokeElementMethod(submitButton_1, 'click', []);
            }, 0);
        }
        else if ((event.key === 'Backspace') || (event.keyIdentifier === 'U+0008')) {
            this.selectThird();
        }
    };
    RegisterCodePage.prototype.registerCode = function () {
        var _this = this;
        var action;
        switch (this.source) {
            case 'signup':
                action = this.user.registerSmsSignup("" + this.codeNum1 + this.codeNum2 + this.codeNum3 + this.codeNum4, this.registerUserID);
                break;
            case 'reset':
                action = this.user.registerSmsReset("" + this.codeNum1 + this.codeNum2 + this.codeNum3 + this.codeNum4, this.registerUserID);
                break;
            case 'signin':
                action = this.user.registerSmsSignin("" + this.codeNum1 + this.codeNum2 + this.codeNum3 + this.codeNum4, this.registerUserID);
        }
        action.then(function (data) {
            _this.token = data.token;
            switch (_this.source) {
                case 'signup':
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_password_create_password__["a" /* CreatePasswordPage */], { userID: _this.registerUserID, source: 'signup' });
                    break;
                case 'signin':
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    _this.navCtrl.popToRoot();
                    break;
                case 'reset':
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_password_create_password__["a" /* CreatePasswordPage */], { userID: _this.registerUserID, url: data.url, source: 'reset' });
            }
        }, function (err) { });
    };
    RegisterCodePage.prototype.retry = function () {
        var _this = this;
        var phone_striped = this.registerPhone.replace(/\D/g, '');
        this.user.repeatSms({ phone_number: '+' + phone_striped })
            .then(function (data) {
            var alert = _this.alertCtrl.create({
                title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
                message: 'Please wait for sms',
                buttons: ['GOT IT']
            });
            alert.present();
        }, function (err) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ngx_webstorage__["a" /* LocalStorage */])(),
        __metadata("design:type", String)
    ], RegisterCodePage.prototype, "token", void 0);
    RegisterCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register-code',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\register-code\register-code.html"*/'<!--\n\n  Generated template for the RegisterCodePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{registerPhone}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="retry()">\n\n        Retry\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list no-lines>\n\n    <ion-item>\n\n      <ion-note>Verification code</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <img src="assets/icon/phone-blue.svg" item-start/>\n\n      <ion-input\n\n        type="tel"\n\n        pattern="\d"\n\n        id="codeNum1"\n\n        name="codeNum1"\n\n        (keydown)="codeInputFirst($event)"\n\n        (click)="selectFirst()"\n\n        [(ngModel)]="codeNum1"\n\n      ></ion-input>\n\n      <ion-input\n\n        type="tel"\n\n        (keydown)="codeInputSecond($event)"\n\n        (click)="selectSecond()"\n\n        pattern="\d"\n\n        id="codeNum2"\n\n        name="codeNum2"\n\n        [(ngModel)]="codeNum2"\n\n      ></ion-input>\n\n      <ion-input\n\n        type="tel"\n\n        (keydown)="codeInputThird($event)"\n\n        (click)="selectThird()"\n\n        pattern="\d"\n\n        id="codeNum3"\n\n        name="codeNum3"\n\n        [(ngModel)]="codeNum3"\n\n      ></ion-input>\n\n      <ion-input\n\n        type="tel"\n\n        (keydown)="codeInputFourth($event)"\n\n        (click)="selectFourth()"\n\n        pattern="\d"\n\n        id="codeNum4"\n\n        name="codeNum4"\n\n        [(ngModel)]="codeNum4"\n\n      ></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            [disabled]="!codeNum1 || !codeNum2 || !codeNum3 || !codeNum4"\n\n            type="submit"\n\n            class="orange footer-button"\n\n            id="submitButton"\n\n            (click)="registerCode()"\n\n            full\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\register-code\register-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_2__providers_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterCodePage);
    return RegisterCodePage;
}());

//# sourceMappingURL=register-code.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_currency__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transactions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_submit_transaction_submit__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_base__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__request_submit_request_submit__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transaction_submit_manual_transaction_submit_manual__ = __webpack_require__(385);
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
 * Generated class for the AmountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AmountPage = (function () {
    function AmountPage(navCtrl, currencyProvider, transactionsProvider, events, baseSingleton, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.currencyProvider = currencyProvider;
        this.transactionsProvider = transactionsProvider;
        this.events = events;
        this.baseSingleton = baseSingleton;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.isModal = false;
        this.HomePage = __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */];
    }
    AmountPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.amount = this.baseSingleton.transactionDetails.amount;
        this.currency = this.baseSingleton.transactionDetails.currency;
        this.currencyFrom = this.baseSingleton.transactionDetails.currencyFrom,
            this.comment = this.baseSingleton.transactionDetails.comment;
        this.isModal = this.navParams.get('isModal');
        this.currencyProvider.currencyList().then(function (data) {
            _this.currencies = data.results;
            if (!_this.baseSingleton.transactionDetails.currency) {
                _this.currencyProvider.defaultCurrencyByUser(_this.baseSingleton.transactionDetails.phoneNumber).then(function (data) {
                    if (data.currency) {
                        _this.currency = data.currency;
                    }
                    else {
                        _this.currency = _this.currencies[0].currency;
                    }
                }, function (err) {
                });
            }
        }, function (err) { });
    };
    AmountPage.prototype.back = function () {
        this.viewCtrl.dismiss({ confirmed: false });
    };
    AmountPage.prototype.confirm = function () {
        var _this = this;
        this.baseSingleton.transactionDetails.amount = this.amount;
        this.baseSingleton.transactionDetails.currency = this.currency;
        this.baseSingleton.transactionDetails.currencyFrom = this.currencyFrom;
        this.baseSingleton.transactionDetails.comment = this.comment;
        if (this.isModal) {
            this.viewCtrl.dismiss({ confirmed: true });
            return;
        }
        switch (this.baseSingleton.actionSource) {
            case __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */].SOURCE_TRANSACTION:
                var transactionToSend = {
                    amount_to: this.baseSingleton.transactionDetails.amount,
                    phone_number_to: this.baseSingleton.transactionDetails.phoneNumber,
                    currency_to: this.baseSingleton.transactionDetails.currency,
                    currency_from: this.baseSingleton.transactionDetails.currencyFrom,
                    comment: this.baseSingleton.transactionDetails.comment
                };
                if (!transactionToSend.currency_from)
                    delete transactionToSend.currency_from;
                this.transactionsProvider.prepareTransaction(transactionToSend).then(function (transaction) {
                    if (_this.baseSingleton.currentUserPaymentMethod.drive === 'MANUAL') {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__transaction_submit_manual_transaction_submit_manual__["a" /* TransactionSubmitManualPage */], { transaction: transaction.transaction });
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transaction_submit_transaction_submit__["a" /* TransactionSubmitPage */], { transaction: transaction.transaction });
                    }
                }, function (err) { });
                break;
            case __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */].SOURCE_REQUEST:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__request_submit_request_submit__["a" /* RequestSubmitPage */]);
        }
    };
    AmountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-amount',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\amount\amount.html"*/'<!--\n\n  Generated template for the AmountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Amount</ion-title>\n\n    <ion-buttons start [hidden]="!isModal" class="button-back">\n\n      <button ion-button icon-only (click)="back()">\n\n        <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <div class="icon-container" item-start>\n\n        <img src="assets/icon/wallet.svg"/>\n\n      </div>\n\n      <!--<ion-label floating>Amount</ion-label>-->\n\n      <ion-input type="tel" [(ngModel)]="amount" placeholder="Amount"></ion-input>\n\n      <ion-select [(ngModel)]="currency" item-end>\n\n        <ion-option *ngFor="let currencyItem of currencies">{{currencyItem.currency}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="(baseSingleton.currentUserPaymentMethod.drive === \'MANUAL\')\n\n                      && (baseSingleton.actionSource === HomePage.SOURCE_TRANSACTION)">\n\n      <div class="icon-container" item-start>\n\n        <img src="assets/icon/currency-gray.svg"/>\n\n      </div>\n\n      <!--<ion-label floating>Your currency</ion-label>-->\n\n      <ion-input disabled placeholder="Your currency" (click)="currency.open()"></ion-input>\n\n      <ion-select [(ngModel)]="currencyFrom" #currency item-end>\n\n        <ion-option *ngFor="let currencyItem of currencies">{{currencyItem.currency}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item\n\n      id="no-lines"\n\n      *ngIf="!baseSingleton.transactionDetails.showCommentInput && !baseSingleton.transactionDetails.comment">\n\n      <div *ngIf="!baseSingleton.transactionDetails.showCommentInput" class="add-comment-link">\n\n        <a href="#"(click)="baseSingleton.transactionDetails.showCommentInput = true">Add a comment</a>\n\n      </div>\n\n    </ion-item>\n\n    <ion-item\n\n      class="comment-item"\n\n      *ngIf="baseSingleton.transactionDetails.showCommentInput || baseSingleton.transactionDetails.comment">\n\n      <div class="icon-container" item-start>\n\n        <img src="assets/icon/comment-gray.svg"/>\n\n      </div>\n\n      <ion-input type="text" [(ngModel)]="comment" placeholder="Comment"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer class="clear-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            class="orange footer-button"\n\n            full\n\n            [disabled]="!amount"\n\n            (click)="confirm()"\n\n          >Confirm</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\amount\amount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_transactions__["a" /* TransactionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AmountPage);
    return AmountPage;
}());

//# sourceMappingURL=amount.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_base__ = __webpack_require__(29);
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
 * Generated class for the TransactionSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionSuccessPage = (function () {
    function TransactionSuccessPage(navCtrl, baseSingleton, navParams) {
        this.navCtrl = navCtrl;
        this.baseSingleton = baseSingleton;
        this.navParams = navParams;
        this.source = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */].SOURCE_TRANSACTION;
        this.HomePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.source = this.baseSingleton.actionSource;
    }
    TransactionSuccessPage.prototype.ionViewDidLoad = function () {
    };
    TransactionSuccessPage.prototype.great = function () {
        this.navCtrl.popToRoot();
    };
    TransactionSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transaction-success',template:/*ion-inline-start:"D:\repos\plingpay-app\src\pages\transaction-success\transaction-success.html"*/'<!--\n\n  Generated template for the TransactionSuccessPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content>\n\n <div class="success-image">\n\n   <img src="assets/imgs/transaction_success.svg"/>\n\n </div>\n\n  <h3>{{baseSingleton.transactionDetails.phoneNumber}} <span class="h-light">will get {{source === HomePage.SOURCE_REQUEST?\' your request of \':\'\'}}</span>\n\n    {{baseSingleton.transactionDetails.amount}} {{baseSingleton.transactionDetails.currency}}</h3>\n\n  <p>Your {{source}} was successful</p>\n\n</ion-content>\n\n\n\n<ion-footer class="grey-toolbar">\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button\n\n            ion-button\n\n            (click)="great()"\n\n            class="orange footer-button"\n\n            full\n\n          >Great</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\repos\plingpay-app\src\pages\transaction-success\transaction-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_base__["a" /* BaseSingleton */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TransactionSuccessPage);
    return TransactionSuccessPage;
}());

//# sourceMappingURL=transaction-success.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentRequestsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseProvider__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PaymentRequestsProvider = (function (_super) {
    __extends(PaymentRequestsProvider, _super);
    function PaymentRequestsProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentRequestsProvider.prototype.paymentRequests = function (source) {
        if (source === void 0) { source = ''; }
        return this.makeRawRequest('get', 'payment_requests', {}, source);
    };
    PaymentRequestsProvider.prototype.sendPaymentRequest = function (data) {
        if (!data.comment)
            delete data.comment;
        return this.makeRawRequest('post', 'payment_requests', data);
    };
    PaymentRequestsProvider.prototype.savePaymentRequestAsTemplate = function (id) {
        return this.makeRawRequest('post', 'payment_requests/' + id + '/' + 'save_as_template');
    };
    PaymentRequestsProvider.prototype.approvePaymentRequest = function (id) {
        return this.makeRawRequest('post', 'payment_requests/' + id + '/' + 'create_transaction');
    };
    PaymentRequestsProvider.prototype.checkIfPaymentRequestTemplate = function (phone_number) {
        return this.makeRawRequest('post', 'payment_requests/check_template', phone_number, 'hideError');
    };
    PaymentRequestsProvider.prototype.editPaymentRequest = function (id, data) {
        return this.makeRawRequest('patch', 'payment_requests/' + id, data);
    };
    PaymentRequestsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PaymentRequestsProvider);
    return PaymentRequestsProvider;
}(__WEBPACK_IMPORTED_MODULE_1__baseProvider__["a" /* BaseProvider */]));

//# sourceMappingURL=paymentRequests.js.map

/***/ })

},[532]);
//# sourceMappingURL=main.js.map