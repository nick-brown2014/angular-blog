// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require_tree .

// var myBlog = angular.module("myBlog", []);

// myBlog.controller("mainController", function($scope) {
//   $scope.name = "Nick";
// });

$(document).ready(function() {

  $("#about-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: ($("#about").offset().top - 50)
    }, 1000);
  });

  $("#projects-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: ($("#projects").offset().top - 49)
    }, 1000);
  });

  $("#stories-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: ($("#stories").offset().top - 70)
    }, 1000);
  });

  $("#contact-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: ($("#contact").offset().top - 50)
    }, 1000);
  });

  $("#top-scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: ($(".container").offset().top - 50)
    }, 1000);
  });

});
