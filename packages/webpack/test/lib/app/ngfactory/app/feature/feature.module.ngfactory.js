/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../feature/feature.module';
import * as import2 from '@angular/router/src/router_module';
import * as import4 from '@angular/router/src/router_config_loader';
import * as import5 from '@angular/core/src/i18n/tokens';
import * as import7 from '@angular/core/src/linker/view';
import * as import8 from '@angular/core/src/linker/element';
import * as import10 from '@angular/core/src/linker/view_type';
import * as import11 from '@angular/core/src/change_detection/change_detection';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
var FeatureModuleInjector = (function (_super) {
    __extends(FeatureModuleInjector, _super);
    function FeatureModuleInjector(parent) {
        _super.call(this, parent, [FeatureComponentNgFactory], []);
    }
    Object.defineProperty(FeatureModuleInjector.prototype, "_ROUTES_2", {
        get: function () {
            if ((this.__ROUTES_2 == null)) {
                (this.__ROUTES_2 = [[{
                            path: '',
                            component: import1.FeatureComponent
                        }
                    ]]);
            }
            return this.__ROUTES_2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureModuleInjector.prototype, "_LOCALE_ID_3", {
        get: function () {
            if ((this.__LOCALE_ID_3 == null)) {
                (this.__LOCALE_ID_3 = null);
            }
            return this.__LOCALE_ID_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeatureModuleInjector.prototype, "_TRANSLATIONS_FORMAT_4", {
        get: function () {
            if ((this.__TRANSLATIONS_FORMAT_4 == null)) {
                (this.__TRANSLATIONS_FORMAT_4 = null);
            }
            return this.__TRANSLATIONS_FORMAT_4;
        },
        enumerable: true,
        configurable: true
    });
    FeatureModuleInjector.prototype.createInternal = function () {
        this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD, null));
        this._FeatureModule_1 = new import1.FeatureModule();
        return this._FeatureModule_1;
    };
    FeatureModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.RouterModule)) {
            return this._RouterModule_0;
        }
        if ((token === import1.FeatureModule)) {
            return this._FeatureModule_1;
        }
        if ((token === import4.ROUTES)) {
            return this._ROUTES_2;
        }
        if ((token === import5.LOCALE_ID)) {
            return this._LOCALE_ID_3;
        }
        if ((token === import5.TRANSLATIONS_FORMAT)) {
            return this._TRANSLATIONS_FORMAT_4;
        }
        return notFoundResult;
    };
    FeatureModuleInjector.prototype.destroyInternal = function () {
    };
    return FeatureModuleInjector;
}(import0.NgModuleInjector));
export var FeatureModuleNgFactory = new import0.NgModuleFactory(FeatureModuleInjector, import1.FeatureModule);
var renderType_FeatureComponent_Host = null;
var _View_FeatureComponent_Host0 = (function (_super) {
    __extends(_View_FeatureComponent_Host0, _super);
    function _View_FeatureComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_FeatureComponent_Host0, renderType_FeatureComponent_Host, import10.ViewType.HOST, viewUtils, parentInjector, declarationEl, import11.ChangeDetectorStatus.CheckAlways);
    }
    _View_FeatureComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('feature-component', rootSelector, null);
        this._appEl_0 = new import8.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_FeatureComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._FeatureComponent_0_4 = new import1.FeatureComponent();
        this._appEl_0.initComponent(this._FeatureComponent_0_4, [], compView_0);
        compView_0.create(this._FeatureComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_FeatureComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import1.FeatureComponent) && (0 === requestNodeIndex))) {
            return this._FeatureComponent_0_4;
        }
        return notFoundResult;
    };
    return _View_FeatureComponent_Host0;
}(import7.AppView));
function viewFactory_FeatureComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_FeatureComponent_Host === null)) {
        (renderType_FeatureComponent_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_FeatureComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var FeatureComponentNgFactory = new import13.ComponentFactory('feature-component', viewFactory_FeatureComponent_Host0, import1.FeatureComponent);
var styles_FeatureComponent = [];
var renderType_FeatureComponent = null;
var _View_FeatureComponent0 = (function (_super) {
    __extends(_View_FeatureComponent0, _super);
    function _View_FeatureComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_FeatureComponent0, renderType_FeatureComponent, import10.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import11.ChangeDetectorStatus.CheckAlways);
    }
    _View_FeatureComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, 'foo.html', null);
        this.init([], [this._text_0], [], []);
        return null;
    };
    return _View_FeatureComponent0;
}(import7.AppView));
export function viewFactory_FeatureComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_FeatureComponent === null)) {
        (renderType_FeatureComponent = viewUtils.createRenderComponentType('/Users/robwormald/Dev/angular/angular-cli/packages/webpack/test/app/feature/feature.module.ts class FeatureComponent - inline template', 0, import12.ViewEncapsulation.None, styles_FeatureComponent, {}));
    }
    return new _View_FeatureComponent0(viewUtils, parentInjector, declarationEl);
}