class MdlTextfield {
  constructor($timeout) {
    const ATTRS = [
      'name', 'type', 'pattern', 
      'autocomplete', 'autofocus', 'required', 'disabled', 
      'minlength', 'maxlength', 'min', 'max'
    ];

    return {
      restrict: 'E',
      replace: true,
      scope: {
        labelText:    '=?label',
        errorText:    '=?error',
        ngModel:         '=',
        ngModelOptions:  '=?'
      },

      template: [
        '<div class="mdl-textfield mdl-js-textfield">',
          '<input class="mdl-textfield__input" type="text" ng-model="ngModel" ng-model-options="ngModelOptions" />',
          '<label class="mdl-textfield__label">{{labelText}}</label>',
          '<span class="mdl-textfield__error" ng-if="errorText">{{errorText}}</span>',
        '</div>'
      ].join(''),

      compile: function (tElement, tAttrs, transclude) {
        return {
          pre: (scope, element, attrs) => {
            element.removeAttr('ng-model');
            element.removeAttr('ng-model-options');

            let $input = element.find('.mdl-textfield__input'),
                $label = element.find('.mdl-textfield__label');

            if (attrs.id) {
              $input.attr('id', attrs.id);
              $label.attr('for', attrs.id);
              element.removeAttr('id');
            }
            
            angular.forEach(ATTRS, (attr) => {
              if (attrs[attr] !== undefined) {
                $input.attr(attr, attrs[attr]);
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
    return new MdlTextfield($timeout);
  }
}

MdlTextfield.factory.$inject = ['$timeout'];

export default MdlTextfield;