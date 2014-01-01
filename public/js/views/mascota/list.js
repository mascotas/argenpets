define([
  "jquery",
  "underscore",
  "backbone",
  'text!templates/mascota/list.html'
  ], function($, _, Backbone, mascotaListTemplate){

    var MascotaListView = Backbone.View.extend({
      className: "row",
      events : {
        'click .verMascota' : 'verMascota'
      },
      initialize: function (model) {
        this.template = _.template(mascotaListTemplate);
        this.model = model;
      },
      render: function(){
        this.$el.html(this.template({
          model: this.model.toJSON()
        }));

        this.delegateEvents();

        return this;
      },
      verMascota: function(){
        console.log(this.model);
      }

    });

    return MascotaListView;
  });