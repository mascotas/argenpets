define([
  "jquery",
  "underscore",
  "backbone",
  "views/menu",
  'text!templates/home.html',
  "google"
  ], function($, _, Backbone, MenuView, homeTemplate, google){

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

        var mapCanvas = $("#map_canvas").get(0);
        //google.addMapToCanvas( mapCanvas );

        //$('#menu-container').html(this.menuView.render().el);
      }
    });

    return AppView;
  });