define([
  "jquery",
  "backbone",
  'text!templates/mascota/new.html',
  "collections/tiposMascota"
  ], function($, Backbone, newMascotaTemplate, TiposMascotaList){

    var NewMascotaView = Backbone.View.extend({
      events : {

      },
      initialize: function () {
        this.template = _.template(newMascotaTemplate);
        this.tiposMascotaList = new TiposMascotaList();

        this.listenTo(this.tiposMascotaList, 'reset', this.render);
      },
      render: function(){
        this.$el.html(this.template({
          tiposMascota: this.tiposMascotaList.toJSON()
        }));

        this.delegateEvents();

        this.tiposMascotaList.fetch({reset: true});

        return this;
      }
    });

    return NewMascotaView;
  });