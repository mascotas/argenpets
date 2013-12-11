define([
  "jquery",
  "underscore",
  "backbone",
  'text!templates/menu.html',
  ], function($, _, Backbone, menuTemplate){

    var MenuView = Backbone.View.extend({
      events : {
        
      },
      initialize: function () {
        this.template = _.template(menuTemplate);
      },
      render: function(){
        this.$el.html(this.template());

        return this;
      }
    });

    return MenuView;
  });