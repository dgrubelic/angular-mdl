class MdlComponent {
  constructor($timeout) {
    return {
      restrict: 'C',
      compile: function (tElement, tAttrs, transclude) {
        return {
          pre: () => {},
          post: (scope, element) => {
            $timeout(() => {
              componentHandler.upgradeElement(element[0]);
            });

            element.on('$destroy', function () {
              componentHandler.downgradeElements(element[0]);
            })
          }
        }
      }
    }
  }

  static factory($timeout) {
    return new MdlComponent($timeout);
  }
}

MdlComponent.factory.$inject = ['$timeout'];

export default MdlComponent;