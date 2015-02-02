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
//= require underscore
//= require backbone
//= require_tree .
//

$(function() {
  // Views
  var CarList = Backbone.View.extend({
    el: '#cars',
    render: function() {
      var cars = new Cars();
      var that = this;
      cars.fetch({
        success: function() {
          that.$el.html('This is some stuff');
        }
      });
    }
  });

  var Cars = Backbone.Collection.extend({
    url: '/cars'
  });

  // Routes
  var Router = Backbone.Router.extend({
    routes: {
      '': 'home'
    }
  });

  var carList = new CarList();
  var router = new Router();

  router.on('route:home', function() {
    carList.render();
  });

  Backbone.history.start();
});
