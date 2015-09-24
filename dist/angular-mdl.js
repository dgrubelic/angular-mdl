/*

"angular-mdl.base" module can be used separately from angular-mdl module if you
only require to enable your custom written MDL components to work in Angular.js
applications with dynamic DOM generation.

*/

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angularMdlBaseMdlComponent = require('./angular-mdl.base/mdl-component');

var _angularMdlBaseMdlComponent2 = _interopRequireDefault(_angularMdlBaseMdlComponent);

/**
 * Base Angular.js Material design lite module for custom written components.
 * @type {Object|Angular.module}
 */
var baseModule = angular.module('angular-mdl.base', []);

baseModule.directive('mdlJsTextfield', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsCheckbox', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsRadio', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsButton', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsProgress', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsTable', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsSwitch', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsMenu', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsSlider', _angularMdlBaseMdlComponent2['default'].factory);
baseModule.directive('mdlJsLayout', _angularMdlBaseMdlComponent2['default'].factory);
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MdlComponent = (function () {
  function MdlComponent($timeout) {
    _classCallCheck(this, MdlComponent);

    return {
      restrict: 'C',
      compile: function compile(tElement, tAttrs, transclude) {
        return {
          pre: function pre() {},
          post: function post(scope, element) {
            $timeout(function () {
              componentHandler.upgradeElement(element[0]);
            });

            element.on('$destroy', function () {
              componentHandler.downgradeElements(element[0]);
            });
          }
        };
      }
    };
  }

  _createClass(MdlComponent, null, [{
    key: 'factory',
    value: function factory($timeout) {
      return new MdlComponent($timeout);
    }
  }]);

  return MdlComponent;
})();

MdlComponent.factory.$inject = ['$timeout'];

exports['default'] = MdlComponent;
module.exports = exports['default'];
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angularMdlBase = require('./angular-mdl.base');

var _angularMdlBase2 = _interopRequireDefault(_angularMdlBase);

// Custom Angular.js Material design lite directives for markup generation.

var _angularMdlMdlTextfield = require('./angular-mdl/mdl-textfield');

var _angularMdlMdlTextfield2 = _interopRequireDefault(_angularMdlMdlTextfield);

var _angularMdlMdlCheckbox = require('./angular-mdl/mdl-checkbox');

var _angularMdlMdlCheckbox2 = _interopRequireDefault(_angularMdlMdlCheckbox);

var mdlModule = angular.module('angular-mdl', ['angular-mdl.base']);

// Register custom angular-mdl directives
mdlModule.directive('mdlTextfield', _angularMdlMdlTextfield2['default'].factory);
mdlModule.directive('mdlCheckbox', _angularMdlMdlCheckbox2['default'].factory);
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MdlCheckbox = (function () {
  function MdlCheckbox($timeout) {
    _classCallCheck(this, MdlCheckbox);

    return {
      restrict: 'E',
      replace: true,
      scope: {
        labelText: '=?label',
        ngModel: '='
      },

      template: ['<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">', '<input class="mdl-checkbox__input" type="checkbox" ng-model="ngModel" ng-checked="ngModel" />', '<span class="mdl-checkbox__label">{{labelText}}</span>', '</label>'].join(''),

      compile: function compile(tElement, tAttrs, transclude) {
        return {
          pre: function pre(scope, element, attrs) {
            element.removeAttr('ng-model');

            if (attrs.id) {
              element.find('.mdl-checkbox__input').attr('id', attrs.id);
              element.attr('for', attrs.id);
              element.removeAttr('id');
            }

            angular.forEach(['name'], function (attr) {
              if (attrs[attr] !== undefined) {
                element.find('.mdl-checkbox__input').attr(attr, attrs[attr]);
                element.removeAttr(attr);
              }
            });
          },

          post: function post(scope, element, attrs) {}
        };
      }
    };
  }

  _createClass(MdlCheckbox, null, [{
    key: 'factory',
    value: function factory($timeout) {
      'ngInject';
      return new MdlCheckbox($timeout);
    }
  }]);

  return MdlCheckbox;
})();

MdlCheckbox.factory.$inject = ['$timeout'];

exports['default'] = MdlCheckbox;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MdlTextfield = (function () {
  function MdlTextfield($timeout) {
    _classCallCheck(this, MdlTextfield);

    var ATTRS = ['name', 'type', 'pattern', 'autocomplete', 'autofocus', 'required', 'disabled', 'minlength', 'maxlength', 'min', 'max'];

    return {
      restrict: 'E',
      replace: true,
      scope: {
        labelText: '=?label',
        errorText: '=?error',
        ngModel: '=',
        ngModelOptions: '=?'
      },

      template: ['<div class="mdl-textfield mdl-js-textfield">', '<input class="mdl-textfield__input" type="text" ng-model="ngModel" ng-model-options="ngModelOptions" />', '<label class="mdl-textfield__label">{{labelText}}</label>', '<span class="mdl-textfield__error" ng-if="errorText">{{errorText}}</span>', '</div>'].join(''),

      compile: function compile(tElement, tAttrs, transclude) {
        return {
          pre: function pre(scope, element, attrs) {
            element.removeAttr('ng-model');
            element.removeAttr('ng-model-options');

            var $input = element.find('.mdl-textfield__input'),
                $label = element.find('.mdl-textfield__label');

            if (attrs.id) {
              $input.attr('id', attrs.id);
              $label.attr('for', attrs.id);
              element.removeAttr('id');
            }

            angular.forEach(ATTRS, function (attr) {
              if (attrs[attr] !== undefined) {
                $input.attr(attr, attrs[attr]);
                element.removeAttr(attr);
              }
            });
          },

          post: function post(scope, element, attrs) {}
        };
      }
    };
  }

  _createClass(MdlTextfield, null, [{
    key: 'factory',
    value: function factory($timeout) {
      return new MdlTextfield($timeout);
    }
  }]);

  return MdlTextfield;
})();

MdlTextfield.factory.$inject = ['$timeout'];

exports['default'] = MdlTextfield;
module.exports = exports['default'];