(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./angular-mdl.base/mdl-component":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./angular-mdl.base":1,"./angular-mdl/mdl-checkbox":4,"./angular-mdl/mdl-textfield":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGdydWJlbGljL1dvcmtzcGFjZS9VWFBhc3Npb24vVVhQYXNzaW9uL2FuZ3VsYXItbWRsL3NyYy9hbmd1bGFyLW1kbC5iYXNlLmpzIiwiL1VzZXJzL2RncnViZWxpYy9Xb3Jrc3BhY2UvVVhQYXNzaW9uL1VYUGFzc2lvbi9hbmd1bGFyLW1kbC9zcmMvYW5ndWxhci1tZGwuYmFzZS9tZGwtY29tcG9uZW50LmpzIiwiL1VzZXJzL2RncnViZWxpYy9Xb3Jrc3BhY2UvVVhQYXNzaW9uL1VYUGFzc2lvbi9hbmd1bGFyLW1kbC9zcmMvYW5ndWxhci1tZGwuanMiLCIvVXNlcnMvZGdydWJlbGljL1dvcmtzcGFjZS9VWFBhc3Npb24vVVhQYXNzaW9uL2FuZ3VsYXItbWRsL3NyYy9hbmd1bGFyLW1kbC9tZGwtY2hlY2tib3guanMiLCIvVXNlcnMvZGdydWJlbGljL1dvcmtzcGFjZS9VWFBhc3Npb24vVVhQYXNzaW9uL2FuZ3VsYXItbWRsL3NyYy9hbmd1bGFyLW1kbC9tZGwtdGV4dGZpZWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OzBDQ1F5QixrQ0FBa0M7Ozs7Ozs7O0FBTTNELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRTFELFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUksd0NBQWEsT0FBTyxDQUFDLENBQUM7QUFDL0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUssd0NBQWEsT0FBTyxDQUFDLENBQUM7QUFDL0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQVEsd0NBQWEsT0FBTyxDQUFDLENBQUM7QUFDL0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQU8sd0NBQWEsT0FBTyxDQUFDLENBQUM7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TyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUMxQjthQUNGLENBQUMsQ0FBQztXQUNKOztBQUVELGNBQUksRUFBRSxjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFLLEVBQUU7U0FDcEMsQ0FBQTtPQUNGO0tBQ0YsQ0FBQTtHQUNGOztlQXJERyxZQUFZOztXQXVERixpQkFBQyxRQUFRLEVBQUU7QUFDdkIsYUFBTyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNuQzs7O1NBekRHLFlBQVk7OztBQTREbEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7cUJBRTdCLFlBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcblxuXCJhbmd1bGFyLW1kbC5iYXNlXCIgbW9kdWxlIGNhbiBiZSB1c2VkIHNlcGFyYXRlbHkgZnJvbSBhbmd1bGFyLW1kbCBtb2R1bGUgaWYgeW91XG5vbmx5IHJlcXVpcmUgdG8gZW5hYmxlIHlvdXIgY3VzdG9tIHdyaXR0ZW4gTURMIGNvbXBvbmVudHMgdG8gd29yayBpbiBBbmd1bGFyLmpzXG5hcHBsaWNhdGlvbnMgd2l0aCBkeW5hbWljIERPTSBnZW5lcmF0aW9uLlxuXG4qL1xuXG5pbXBvcnQgTWRsQ29tcG9uZW50IGZyb20gJy4vYW5ndWxhci1tZGwuYmFzZS9tZGwtY29tcG9uZW50JztcblxuLyoqXG4gKiBCYXNlIEFuZ3VsYXIuanMgTWF0ZXJpYWwgZGVzaWduIGxpdGUgbW9kdWxlIGZvciBjdXN0b20gd3JpdHRlbiBjb21wb25lbnRzLlxuICogQHR5cGUge09iamVjdHxBbmd1bGFyLm1vZHVsZX1cbiAqL1xuY29uc3QgYmFzZU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFyLW1kbC5iYXNlJywgW10pO1xuXG5iYXNlTW9kdWxlLmRpcmVjdGl2ZSgnbWRsSnNUZXh0ZmllbGQnLCAgIE1kbENvbXBvbmVudC5mYWN0b3J5KTtcbmJhc2VNb2R1bGUuZGlyZWN0aXZlKCdtZGxKc0NoZWNrYm94JywgICAgTWRsQ29tcG9uZW50LmZhY3RvcnkpO1xuYmFzZU1vZHVsZS5kaXJlY3RpdmUoJ21kbEpzUmFkaW8nLCAgICAgICBNZGxDb21wb25lbnQuZmFjdG9yeSk7XG5iYXNlTW9kdWxlLmRpcmVjdGl2ZSgnbWRsSnNCdXR0b24nLCAgICAgIE1kbENvbXBvbmVudC5mYWN0b3J5KTtcbmJhc2VNb2R1bGUuZGlyZWN0aXZlKCdtZGxKc1Byb2dyZXNzJywgICAgTWRsQ29tcG9uZW50LmZhY3RvcnkpO1xuYmFzZU1vZHVsZS5kaXJlY3RpdmUoJ21kbEpzVGFibGUnLCAgICAgICBNZGxDb21wb25lbnQuZmFjdG9yeSk7XG5iYXNlTW9kdWxlLmRpcmVjdGl2ZSgnbWRsSnNTd2l0Y2gnLCAgICAgIE1kbENvbXBvbmVudC5mYWN0b3J5KTtcbmJhc2VNb2R1bGUuZGlyZWN0aXZlKCdtZGxKc01lbnUnLCAgICAgICAgTWRsQ29tcG9uZW50LmZhY3RvcnkpO1xuYmFzZU1vZHVsZS5kaXJlY3RpdmUoJ21kbEpzU2xpZGVyJywgICAgICBNZGxDb21wb25lbnQuZmFjdG9yeSk7XG5iYXNlTW9kdWxlLmRpcmVjdGl2ZSgnbWRsSnNMYXlvdXQnLCAgICAgIE1kbENvbXBvbmVudC5mYWN0b3J5KTsiLCJjbGFzcyBNZGxDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0MnLFxuICAgICAgY29tcGlsZTogZnVuY3Rpb24gKHRFbGVtZW50LCB0QXR0cnMsIHRyYW5zY2x1ZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcmU6ICgpID0+IHt9LFxuICAgICAgICAgIHBvc3Q6IChzY29wZSwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KGVsZW1lbnRbMF0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQub24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLmRvd25ncmFkZUVsZW1lbnRzKGVsZW1lbnRbMF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeSgkdGltZW91dCkge1xuICAgIHJldHVybiBuZXcgTWRsQ29tcG9uZW50KCR0aW1lb3V0KTtcbiAgfVxufVxuXG5NZGxDb21wb25lbnQuZmFjdG9yeS4kaW5qZWN0ID0gWyckdGltZW91dCddO1xuXG5leHBvcnQgZGVmYXVsdCBNZGxDb21wb25lbnQ7IiwiaW1wb3J0IG1kbEJhc2UgZnJvbSAnLi9hbmd1bGFyLW1kbC5iYXNlJztcblxuLy8gQ3VzdG9tIEFuZ3VsYXIuanMgTWF0ZXJpYWwgZGVzaWduIGxpdGUgZGlyZWN0aXZlcyBmb3IgbWFya3VwIGdlbmVyYXRpb24uXG5pbXBvcnQgTWRsVGV4dGZpZWxkIGZyb20gJy4vYW5ndWxhci1tZGwvbWRsLXRleHRmaWVsZCc7XG5pbXBvcnQgTWRsQ2hlY2tib3ggZnJvbSAnLi9hbmd1bGFyLW1kbC9tZGwtY2hlY2tib3gnO1xuXG5jb25zdCBtZGxNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhci1tZGwnLCBbJ2FuZ3VsYXItbWRsLmJhc2UnXSk7XG5cbi8vIFJlZ2lzdGVyIGN1c3RvbSBhbmd1bGFyLW1kbCBkaXJlY3RpdmVzXG5tZGxNb2R1bGUuZGlyZWN0aXZlKCdtZGxUZXh0ZmllbGQnLCBNZGxUZXh0ZmllbGQuZmFjdG9yeSk7XG5tZGxNb2R1bGUuZGlyZWN0aXZlKCdtZGxDaGVja2JveCcsIE1kbENoZWNrYm94LmZhY3RvcnkpOyIsImNsYXNzIE1kbENoZWNrYm94IHtcbiAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY29wZToge1xuICAgICAgICBsYWJlbFRleHQ6ICAgICc9P2xhYmVsJyxcbiAgICAgICAgbmdNb2RlbDogICAgICAnPSdcbiAgICAgIH0sXG5cbiAgICAgIHRlbXBsYXRlOiBbXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJtZGwtY2hlY2tib3ggbWRsLWpzLWNoZWNrYm94IG1kbC1qcy1yaXBwbGUtZWZmZWN0XCI+JyxcbiAgICAgICAgICAnPGlucHV0IGNsYXNzPVwibWRsLWNoZWNrYm94X19pbnB1dFwiIHR5cGU9XCJjaGVja2JveFwiIG5nLW1vZGVsPVwibmdNb2RlbFwiIG5nLWNoZWNrZWQ9XCJuZ01vZGVsXCIgLz4nLFxuICAgICAgICAgICc8c3BhbiBjbGFzcz1cIm1kbC1jaGVja2JveF9fbGFiZWxcIj57e2xhYmVsVGV4dH19PC9zcGFuPicsXG4gICAgICAgICc8L2xhYmVsPidcbiAgICAgIF0uam9pbignJyksXG5cbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uICh0RWxlbWVudCwgdEF0dHJzLCB0cmFuc2NsdWRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ25nLW1vZGVsJyk7XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5pZCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5tZGwtY2hlY2tib3hfX2lucHV0JykuYXR0cignaWQnLCBhdHRycy5pZCk7XG4gICAgICAgICAgICAgIGVsZW1lbnQuYXR0cignZm9yJywgYXR0cnMuaWQpO1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChbJ25hbWUnXSwgKGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGF0dHJzW2F0dHJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZpbmQoJy5tZGwtY2hlY2tib3hfX2lucHV0JykuYXR0cihhdHRyLCBhdHRyc1thdHRyXSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyKGF0dHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgcG9zdDogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KCR0aW1lb3V0KSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICByZXR1cm4gbmV3IE1kbENoZWNrYm94KCR0aW1lb3V0KTtcbiAgfVxufVxuXG5NZGxDaGVja2JveC5mYWN0b3J5LiRpbmplY3QgPSBbJyR0aW1lb3V0J107XG5cbmV4cG9ydCBkZWZhdWx0IE1kbENoZWNrYm94OyIsImNsYXNzIE1kbFRleHRmaWVsZCB7XG4gIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XG4gICAgY29uc3QgQVRUUlMgPSBbXG4gICAgICAnbmFtZScsICd0eXBlJywgJ3BhdHRlcm4nLCBcbiAgICAgICdhdXRvY29tcGxldGUnLCAnYXV0b2ZvY3VzJywgJ3JlcXVpcmVkJywgJ2Rpc2FibGVkJywgXG4gICAgICAnbWlubGVuZ3RoJywgJ21heGxlbmd0aCcsICdtaW4nLCAnbWF4J1xuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY29wZToge1xuICAgICAgICBsYWJlbFRleHQ6ICAgICc9P2xhYmVsJyxcbiAgICAgICAgZXJyb3JUZXh0OiAgICAnPT9lcnJvcicsXG4gICAgICAgIG5nTW9kZWw6ICAgICAgICAgJz0nLFxuICAgICAgICBuZ01vZGVsT3B0aW9uczogICc9PydcbiAgICAgIH0sXG5cbiAgICAgIHRlbXBsYXRlOiBbXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkXCI+JyxcbiAgICAgICAgICAnPGlucHV0IGNsYXNzPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nLW1vZGVsPVwibmdNb2RlbFwiIG5nLW1vZGVsLW9wdGlvbnM9XCJuZ01vZGVsT3B0aW9uc1wiIC8+JyxcbiAgICAgICAgICAnPGxhYmVsIGNsYXNzPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIj57e2xhYmVsVGV4dH19PC9sYWJlbD4nLFxuICAgICAgICAgICc8c3BhbiBjbGFzcz1cIm1kbC10ZXh0ZmllbGRfX2Vycm9yXCIgbmctaWY9XCJlcnJvclRleHRcIj57e2Vycm9yVGV4dH19PC9zcGFuPicsXG4gICAgICAgICc8L2Rpdj4nXG4gICAgICBdLmpvaW4oJycpLFxuXG4gICAgICBjb21waWxlOiBmdW5jdGlvbiAodEVsZW1lbnQsIHRBdHRycywgdHJhbnNjbHVkZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZTogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyKCduZy1tb2RlbCcpO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyKCduZy1tb2RlbC1vcHRpb25zJyk7XG5cbiAgICAgICAgICAgIGxldCAkaW5wdXQgPSBlbGVtZW50LmZpbmQoJy5tZGwtdGV4dGZpZWxkX19pbnB1dCcpLFxuICAgICAgICAgICAgICAgICRsYWJlbCA9IGVsZW1lbnQuZmluZCgnLm1kbC10ZXh0ZmllbGRfX2xhYmVsJyk7XG5cbiAgICAgICAgICAgIGlmIChhdHRycy5pZCkge1xuICAgICAgICAgICAgICAkaW5wdXQuYXR0cignaWQnLCBhdHRycy5pZCk7XG4gICAgICAgICAgICAgICRsYWJlbC5hdHRyKCdmb3InLCBhdHRycy5pZCk7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cignaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKEFUVFJTLCAoYXR0cikgPT4ge1xuICAgICAgICAgICAgICBpZiAoYXR0cnNbYXR0cl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRpbnB1dC5hdHRyKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoYXR0cik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBwb3N0OiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoJHRpbWVvdXQpIHtcbiAgICByZXR1cm4gbmV3IE1kbFRleHRmaWVsZCgkdGltZW91dCk7XG4gIH1cbn1cblxuTWRsVGV4dGZpZWxkLmZhY3RvcnkuJGluamVjdCA9IFsnJHRpbWVvdXQnXTtcblxuZXhwb3J0IGRlZmF1bHQgTWRsVGV4dGZpZWxkOyJdfQ==
