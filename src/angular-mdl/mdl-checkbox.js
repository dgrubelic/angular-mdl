class MdlCheckbox {
  constructor($timeout) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        labelText:    '=?label',
        ngModel:      '='
      },

      template: [
        '<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">',
          '<input class="mdl-checkbox__input" type="checkbox" ng-model="ngModel" ng-checked="ngModel" />',
          '<span class="mdl-checkbox__label">{{labelText}}</span>',
        '</label>'
      ].join(''),

      compile: function (tElement, tAttrs, transclude) {
        return {
          pre: (scope, element, attrs) => {
            element.removeAttr('ng-model');

            if (attrs.id) {
              element.find('.mdl-checkbox__input').attr('id', attrs.id);
              element.attr('for', attrs.id);
              element.removeAttr('id');
            }

            angular.forEach(['name'], (attr) => {
              if (attrs[attr] !== undefined) {
                element.find('.mdl-checkbox__input').attr(attr, attrs[attr]);
                element.removeAttr(attr);
              }
            });
          },

          post: (scope, element, attrs) => {}
        }
      }
    }
  }

  static factory($timeout) {
    'ngInject';
    return new MdlCheckbox($timeout);
  }
}

MdlCheckbox.factory.$inject = ['$timeout'];

export default MdlCheckbox;