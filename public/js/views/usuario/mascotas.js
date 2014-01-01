define([
  "jquery",
  "underscore",
  "backbone",
  "models/mascota",
  "collections/mascotas",
  "views/mascota/new",
  "views/mascota/list",
  'text!templates/usuario/mascotas.html'
  ], function($, _, Backbone, MascotaModel, MascotasList, NewMascotaView, MascotaListView, usuarioMascotasTemplate){

    var UsuarioMascotasView = Backbone.View.extend({
      className: "row",
      events : {
        'click .crearMascota' : 'crearMascota'
      },
      initialize: function (user) {
        this.template = _.template(usuarioMascotasTemplate);

        this.mascotasList = new MascotasList();
        this.listenTo(this.mascotasList, 'reset', this.render);
        this.listenTo(this.mascotasList, 'add', this.addMascota);

        this.mascotasList.fetch({
          reset: true,
          data: user,
          success: function(mascotas){
          }
        })

      },
      render: function(){
        this.$el.html(this.template({
          mascotas: this.mascotasList.toJSON()
        }));

        var that = this;
        this.$('#mascotas-container').empty();

        this.mascotasList.each(function(mascota){
          that.addMascota(mascota);
        });

        this.delegateEvents();

        return this;
      },
      crearMascota: function(){
        var view = new NewMascotaView();
        view.bind("cancelar", this.render, this);
        view.bind("add", this.addMascotaEvent, this);

        $('#info').html(view.render().el);
      },
      addMascotaEvent: function(data){
        var mascota = new MascotaModel();
        mascota.set(data.attributes);
        this.mascotasList.add(mascota);
      },
      addMascota: function(mascota){
        var view = new MascotaListView(mascota);
        this.$('#mascotas-container').append(view.render().el);
      }

    });

    return UsuarioMascotasView;
  });