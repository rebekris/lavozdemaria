webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/mihttp-27/lavozdemaria/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Eventos &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="chatbubbles" onclick="window.open(\'https://tawk.to/chat/5acd28c14b401e45400e84a1/default/?$_tawk_popout=true\', \'_system\', \'location=yes\');"> </ion-icon>\n      </ion-title>\n       <link href="events.scss">\n      <link href="apps.scss">\n      \n        \n      \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    \n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content> </ion-refresher-content>\n    </ion-refresher>\n    \n    <h5 align="center"> Próximos eventos de Radio La Voz de María</h5>\n    \n    \n   <ion-list>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="i../../assets/imgs/tornasol.jpg">\n    </ion-thumbnail>\n    <h2>My Neighbor Totoro</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button clear item-end>Ver</button>\n      \n  </ion-item>\n       <ion-item>\n    <ion-thumbnail item-start>\n      <img src="i../../assets/imgs/tornasol.jpg">\n    </ion-thumbnail>\n    <h2>Raiders of the Lost</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button clear item-end>Ver</button>\n  </ion-item>\n       \n       <ion-item>\n    <ion-thumbnail item-start>\n      <img src="i../../assets/imgs/tornasol.jpg">\n    </ion-thumbnail>\n    <h2>My Neighbor Totoro</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button clear item-end>Ver</button>\n  </ion-item>\n       \n</ion-list>\n    \n    \n    <footer>\n    <div class="container-vermas">\n     <a class="vermas" href=""> Ver más </a>\n        <div class="icon-vermas">\n      <ion-icon name="ios-arrow-down"></ion-icon>\n             </div> \n    </div>\n    </footer>\n    \n    \n\n</ion-content>\n'/*ion-inline-end:"/home/mihttp-27/lavozdemaria/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/home/mihttp-27/lavozdemaria/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Noticia &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="chatbubbles" onclick="window.open(\'https://tawk.to/chat/5acd28c14b401e45400e84a1/default/?$_tawk_popout=true\', \'_system\', \'location=yes\');"> </ion-icon>\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="i../../assets/imgs/home.png">\n    \n    <h5 align="center"> My Neighbor Totoro</h5>\n    \n    <div class="text-container">\n    <p>    \n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa. \n    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa. \n    </p>    \n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"/home/mihttp-27/lavozdemaria/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/events/events.module": [
		284,
		2
	],
	"../pages/news/news.module": [
		285,
		1
	],
	"../pages/test/test.module": [
		286,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mihttp-27/lavozdemaria/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Noticias" tabIcon="ios-paper-outline"></ion-tab>\n<ion-tab [root]="tab2Root" tabTitle="Eventos" tabIcon="ios-calendar-outline"></ion-tab> \n  <ion-tab [root]="tab3Root" tabTitle="Donaciones" tabIcon="ios-heart-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contáctanos" tabIcon="ios-navigate-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/mihttp-27/lavozdemaria/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/mihttp-27/lavozdemaria/src/pages/about/about.html"*/'/DONACIONES/\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Donaciones &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="chatbubbles" onclick="window.open(\'https://tawk.to/chat/5acd28c14b401e45400e84a1/default/?$_tawk_popout=true\', \'_system\', \'location=yes\');"> </ion-icon>\n    </ion-title>\n     \n      \n      \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n     <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content> </ion-refresher-content>\n    </ion-refresher>\n    \n    \n    \n    \n    <div class="text-container">\n    <p>    \n    En Radio la Voz de María trabajamos para que el mensaje de nuestro Señor Jesucristo llegue a cada rincón del país.\n        Para poder lograrlo necesitamos de tu ayuda, crezcamos junto y cumplamos con la misión que nuestr Señor Jesucristo nos dejó:  </p>\n         <div class="text-black">\n        <i><q>Ir y hacer discipulos a todas las naciones</q></i>  <br>\n                <b>  Mateo 28:19  <br> </b>   <br> \n                <b>  ¡Ayúdanos con tu Donación!  </b> \n          </div>\n     </div>\n    \n    \n    <footer>\n    <div class="container-vermas">\n     <a class="vermas" href="">Donaciones </a>\n        <div class="icon-vermas">\n      <ion-icon name="ios-arrow-down"></ion-icon>\n             </div> \n    </div>\n    </footer>\n    \n</ion-content>\n'/*ion-inline-end:"/home/mihttp-27/lavozdemaria/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/mihttp-27/lavozdemaria/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contacto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="chatbubbles" onclick="window.open(\'https://tawk.to/chat/5acd28c14b401e45400e84a1/default/?$_tawk_popout=true\', \'_system\', \'location=yes\');"> </ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>   \n  <ion-list>\n      <ion-item>\n        <div class="uno">\n            <h2 ion-title> Dirección </h2>\n            <p ion-text> Cdla. Bolivariana Mz. A Villa 9. <br> <br> Calle Andrés Bello y Av. del Libertador </p>\n        </div>\n        <div class="dos">\n            <h2 ion-title> Teléfono </h2>\n            <p ion-text> +593(04)2598860 - 2598870 </p>\n        </div>\n        <div class="tres">\n            <h2 ion-title> Horario de atención </h2>\n            <p ion-text> 09h00 a 18h00 </p>\n        </div>\n        <div class="cuatro">\n            <h2 ion-title> E-mail </h2>\n            <p ion-text> administracion@lavozdemaria.ec </p> \n        </div>\n      </ion-item>\n  </ion-list>\n\n  <ion-list>\n      <div class="imagen">\n          <img class="map" src="i../../assets/imgs/new.png" >\n      </div>\n      <h3 ion-title> Contáctanos </h3>\n      <p ion-text class="formulario"> Por favor llene todos los campos requeridos (*). </p>\n        <form>\n            <ion-item>\n                <ion-icon class="tamanio" name="person" item-start></ion-icon>\n                <ion-label stacked>Nombres*</ion-label>\n                <ion-input type="text" placeholder="Nombres"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon class="tamanio" name="call" item-start></ion-icon>\n                <ion-label stacked>Teléfono*</ion-label>\n                <ion-input type="text" placeholder="Teléfono"></ion-input>\n            </ion-item>\n            <ion-item>\n            <ion-icon class="tamanio" name="mail" item-start></ion-icon>\n                <ion-label stacked>E-mail*</ion-label>\n                <ion-input type="email" placeholder="Email"></ion-input>\n          </ion-item>\n            <ion-item>\n            <ion-icon class="tamanio" name="text" item-start></ion-icon>\n                <ion-label stacked>Mensaje*</ion-label>\n                <ion-input type="text" placeholder="Mensaje"></ion-input>\n          </ion-item>\n          <br> <br>\n          <div class="boton">\n              <a> &nbsp;&nbsp;&nbsp; Enviar &nbsp;&nbsp;&nbsp;</a>\n          </div>\n      </form>\n      \n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/mihttp-27/lavozdemaria/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_news__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prueba_prueba__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, provider) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.news = []; /*Llamar a arreglo de cualquier tipo*/
    }
    HomePage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.showNewsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_news__["a" /* NewsPage */]);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.provider.getArticles().subscribe(function (result) {
            _this.news = result.articles;
            console.log("Texto: " + _this.news + "...");
        }, function (error) {
            console.log("Texto: " + error);
        }, function () {
            console.log("WELL DONE!");
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mihttp-27/lavozdemaria/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Radio La Voz de María &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="chatbubbles" onclick="window.open(\'https://tawk.to/chat/5acd28c14b401e45400e84a1/default/?$_tawk_popout=true\', \'_system\', \'location=yes\');"> </ion-icon> </ion-title>\n       <link href="home.scss">\n        <link href="home.ts">\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <img src="i../../assets/imgs/home.png">\n \n    <div class="radio">\n        <div class="logo">  \n        <table cellpadding="2" cellspacing="0" border="0" align="center" style="padding-left:1em;"><tr><td align="center"><audio id="audio_2" controls preload="none" style="width:16em;padding:0;"><source src="http://72.52.144.7:8011/stream/2/;?type=http&amp;nocache=5" type=\'audio/mpeg\'></audio></td></tr></table><script type="text/javascript">\n\n    function $(id){return document.getElementById(id);}\n    var registerOnWindowLoad=function(callback){\n\n    if(window.addEventListener){\n        window.addEventListener(\'load\',callback,false);\n\n    }else{\n\n    window.attachEvent(\'onload\',callback);\n\n    }\n\n    };\n\n    registerOnWindowLoad(function(){\n\n    if(navigator.userAgent.match(/msie|trident/i)){\n\n    $(\'hdrbox\').style.display = \'block\';\n\n    }\n\n    });\n\n    </script><script type="text/javascript">\n\n    var registerOnWindowLoad=function(callback){\n\n    if(window.addEventListener){\n\n    window.addEventListener(\'load\',callback,false);\n\n    }else{\n\n    window.attachEvent(\'onload\',callback);\n\n    }\n\n    };\n\n    registerOnWindowLoad(function(){\n\n    var audio=document.getElementsByTagName("audio");\n\n    if(audio.length){\n\n    var canPlay = !!audio[0].canPlayType && audio[0].canPlayType(\'audio/mpeg; codecs="mp3"\') != "";\n\n    if(!canPlay){\n\n    for(var i=audio.length-1;i>=0;i--){\n\n    var parent = audio[i].parentNode;\n\n    parent.removeChild(audio[i]);\n\n    var parent2 = parent.parentNode;\n\n    parent2.removeChild(parent);\n\n    }\n\n    }\n\n    }\n\n    });\n\n    </script>\n    </div> \n</div>\n    \n     <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n     <h4 align="center"> Últimas noticias</h4>\n    \n    \n   <ion-list>\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="i../../assets/imgs/tornasol.jpg">\n    </ion-thumbnail>\n    <h2>My Neighbor Totoro</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button (click)="showNewsPage()" clear item-end>Ver</button>\n      \n  </ion-item>\n       <ion-item>\n    <ion-thumbnail item-start>\n      <img src="i../../assets/imgs/tornasol.jpg">\n    </ion-thumbnail>\n    <h2>Raiders of the Lost</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button (click)="showNewsPage()"clear item-end>Ver</button>\n  </ion-item>\n       \n       <ion-item>\n    <ion-thumbnail item-start>\n      <img src="i../../assets/imgs/tornasol.jpg">\n    </ion-thumbnail>\n    <h2>My Neighbor Totoro</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button (click)="showNewsPage()" clear item-end>Ver</button>\n  </ion-item>\n       \n       <ion-item>\n    <ion-thumbnail item-start>\n      <img src="i../../assets/imgs/tornasol.jpg">\n    </ion-thumbnail>\n    <h2>My Neighbor Totoro</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button (click)="showNewsPage()" clear item-end>Ver</button>\n  </ion-item>\n        \n</ion-list>\n    \n    <footer>\n    <div class="container-vermas">\n     <a class="vermas" href=""> Ver más </a>\n        <div class="icon-vermas">\n      <ion-icon name="ios-arrow-down"></ion-icon>\n             </div> \n    </div>\n    </footer>\n</ion-content>\n'/*ion-inline-end:"/home/mihttp-27/lavozdemaria/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_prueba_prueba__["a" /* PruebaProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PruebaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PruebaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PruebaProvider = /** @class */ (function () {
    function PruebaProvider(http) {
        this.http = http;
        this.url_base = "http://mihttp.net/demo/lavozdemaria";
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        console.log('Hello PruebaProvider Provider');
        this.headers.append('x-api-key', '5BN6APZSY5X7L8XEH9S4');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        //'Access-Control-Allow-Origin': '*'
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    PruebaProvider.prototype.get = function (module) {
        var res = this.http.get(module).map(function (res) { return res.json(); });
        return res;
    };
    PruebaProvider.prototype.getArticles = function () {
        var url = "https://mihttp.net/demo/lavozdemaria/end/get/content/tagarticles?tagid=2";
        var res = this.http.get(url).map(function (res) { return res.json(); });
        console.log("actually url: " + url);
        console.log(res);
        return res;
    };
    PruebaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], PruebaProvider);
    return PruebaProvider;
}());

//# sourceMappingURL=prueba.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_events_events__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_news_news__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_remote_service_remote_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_prueba_prueba__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_news_news__["a" /* NewsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_prueba_prueba__["a" /* PruebaProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mihttp-27/lavozdemaria/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n\n'/*ion-inline-end:"/home/mihttp-27/lavozdemaria/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServiceProvider = /** @class */ (function () {
    function RemoteServiceProvider(http) {
        this.http = http;
        console.log('Hello RemoteServiceProvider Provider');
    }
    RemoteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());

//# sourceMappingURL=remote-service.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map