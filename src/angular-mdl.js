import mdlBase from './angular-mdl.base';

// Custom Angular.js Material design lite directives for markup generation.
import MdlTextfield from './angular-mdl/mdl-textfield';
import MdlCheckbox from './angular-mdl/mdl-checkbox';

const mdlModule = angular.module('angular-mdl', ['angular-mdl.base']);

// Register custom angular-mdl directives
mdlModule.directive('mdlTextfield', MdlTextfield.factory);
mdlModule.directive('mdlCheckbox', MdlCheckbox.factory);