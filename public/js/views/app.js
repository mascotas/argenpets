define([
  "jquery",
  "underscore",
  "backbone",
  "views/menu",
  'text!templates/home.html'
  
  ], function($, _, Backbone, MenuView, homeTemplate){

    var AppView = Backbone.View.extend({
      el : $("#app"),

      events : {
      },
      initialize: function () {
        this.template = _.template(homeTemplate);

        //this.menuView = new MenuView();

        this.render();
      },
      render: function(){
        this.$el.html(this.template());

        

        //$('#menu-container').html(this.menuView.render().el);
      }
    });

    return AppView;
  });