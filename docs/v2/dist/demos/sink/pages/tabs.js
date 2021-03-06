System.register("pages/tabs", ["ionic/ionic", "../sink-page"], function (_export) {
    "use strict";

    var IonicApp, IonicView, NavController, SinkPage, __decorate, __metadata, FeaturedTabPage, TopTabPage, SearchTabPage, UpdatesTabPage, TabsPage;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_ionicIonic) {
            IonicApp = _ionicIonic.IonicApp;
            IonicView = _ionicIonic.IonicView;
            NavController = _ionicIonic.NavController;
        }, function (_sinkPage) {
            SinkPage = _sinkPage.SinkPage;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            FeaturedTabPage = function FeaturedTabPage(nav) {
                _classCallCheck(this, FeaturedTabPage);

                this.nav = nav;
            };

            FeaturedTabPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Featured</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], FeaturedTabPage);

            TopTabPage = function TopTabPage(nav) {
                _classCallCheck(this, TopTabPage);

                this.nav = nav;
            };

            TopTabPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Top</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], TopTabPage);

            SearchTabPage = function SearchTabPage(nav) {
                _classCallCheck(this, SearchTabPage);

                this.nav = nav;
            };

            SearchTabPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Search</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], SearchTabPage);

            UpdatesTabPage = function UpdatesTabPage(nav) {
                _classCallCheck(this, UpdatesTabPage);

                this.nav = nav;
            };

            UpdatesTabPage = __decorate([IonicView({
                template: '' + '<ion-navbar *navbar>' + '<ion-title>Updates</ion-title>' + '</ion-navbar>' + '<ion-content padding>' + '</ion-content>'
            }), __metadata('design:paramtypes', [typeof NavController !== 'undefined' && NavController || Object])], UpdatesTabPage);

            TabsPage = (function (_SinkPage) {
                _inherits(TabsPage, _SinkPage);

                function TabsPage(app) {
                    _classCallCheck(this, TabsPage);

                    _get(Object.getPrototypeOf(TabsPage.prototype), "constructor", this).call(this, app);
                    this.featuredTab = FeaturedTabPage;
                    this.topTab = TopTabPage;
                    this.searchTab = SearchTabPage;
                    this.updatesTab = UpdatesTabPage;
                }

                return TabsPage;
            })(SinkPage);

            _export("TabsPage", TabsPage);

            _export("TabsPage", TabsPage = __decorate([IonicView({
                template: "\n    <ion-navbar *navbar><ion-nav-items primary><button icon (click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Tabs</ion-title></ion-navbar>\n\n    <ion-tabs id=\"tabs\">\n      <ion-tab tab-title=\"Featured\" tab-icon=\"star\" [root]=\"featuredTab\"></ion-tab>\n      <ion-tab tab-title=\"Top Charts\" tab-icon=\"stats\" [root]=\"topTab\"></ion-tab>\n      <ion-tab tab-title=\"Search\" tab-icon=\"search\" [root]=\"searchTab\"></ion-tab>\n      <ion-tab tab-title=\"Updates\" tab-icon=\"cloud-download\" [root]=\"updatesTab\"></ion-tab>\n    </ion-tabs>\n  "
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], TabsPage));
        }
    };
});