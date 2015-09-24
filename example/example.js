(function (global) {
  'use strict';

angular.module('example', ['angular-mdl'])
  .config(function ($logProvider, $compileProvider) {
    $logProvider.debugEnabled(true);
    $compileProvider.debugInfoEnabled(true);
  })
  .controller('IndexController', function () {
    var viewModel = this;

    viewModel.userForm = {
      email:      'user@domain.com',
      password:   'user',
      rememberMe: false
    };

    viewModel.submitForm = function (form, $event) {
      if ($event) $event.preventDefault();

      console.log(form.$valid);
      if (form.$valid) {
        console.log(viewModel.userForm);
      }
    };
  });

  
}(this) /* Auto-invoking function */ );