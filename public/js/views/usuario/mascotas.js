define([
  "jquery",
  "underscore",
  "backbone",
  "collections/mascotas",
  'text!templates/usuario/mascotas.html',
  ], function($, _, Backbone, MascotasList, usuarioMascotasTemplate){

    var UsuarioMascotasView = Backbone.View.extend({
      className: "container",
      events : {
      },
      initialize: function (user) {
        this.template = _.template(usuarioMascotasTemplate);

        this.mascotas = new MascotasList();
        this.listenTo(this.mascotas, 'reset', this.render);

        this.mascotas.fetch({
          data: user,
          success: function(mascotas){
            console.log(mascotas)
          }
        })

      },
      render: function(){
        this.$el.html(this.template({
          mascotas: this.mascotas.toJSON()
        }));

        this.delegateEvents();

        return this;
      }
    });

    return UsuarioMascotasView;
  });