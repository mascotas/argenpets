define([
  "jquery",
  "underscore",
  "backbone",
  "models/mascota",
  'text!templates/mascota/show.html',
  "google"
  ], function($, _, Backbone, MascotaModel, mascotaShowTemplate, google){

    var MascotaListView = Backbone.View.extend({
      className: "row",
      events : {
        'click .verMascota' : 'verMascota'
      },
      initialize: function (mascota) {
        this.template = _.template(mascotaShowTemplate);
        this.model = new MascotaModel();

        this.model.on('change', this.render, this);
        this.model.set({id : parseInt(mascota.id)});

        this.model.fetch({
          data: {id: this.model.id},
          success: function(mascota){
          }
        })
      },
      render: function(){
        this.$el.html(this.template({
          model: this.model.toJSON()
        }));

        var mapCanvas = this.$(".map_canvas").get(0);
        google.addMapToCanvas( mapCanvas );

        this.delegateEvents();

        return this;
      },
      verMascota: function(){
        console.log(this.model);
      }

    });

    return MascotaListView;
  });