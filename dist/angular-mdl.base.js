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