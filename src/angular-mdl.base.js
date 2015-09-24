/*

"angular-mdl.base" module can be used separately from angular-mdl module if you
only require to enable your custom written MDL components to work in Angular.js
applications with dynamic DOM generation.

*/

import MdlComponent from './angular-mdl.base/mdl-component';

/**
 * Base Angular.js Material design lite module for custom written components.
 * @type {Object|Angular.module}
 */
const baseModule = angular.module('angular-mdl.base', []);

baseModule.directive('mdlJsTextfield',   MdlComponent.factory);
baseModule.directive('mdlJsCheckbox',    MdlComponent.factory);
baseModule.directive('mdlJsRadio',       MdlComponent.factory);
baseModule.directive('mdlJsButton',      MdlComponent.factory);
baseModule.directive('mdlJsProgress',    MdlComponent.factory);
baseModule.directive('mdlJsTable',       MdlComponent.factory);
baseModule.directive('mdlJsSwitch',      MdlComponent.factory);
baseModule.directive('mdlJsMenu',        MdlComponent.factory);
baseModule.directive('mdlJsSlider',      MdlComponent.factory);
baseModule.directive('mdlJsLayout',      MdlComponent.factory);