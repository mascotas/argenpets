define([
  "jquery",
  "underscore",
  "backbone",
  'text!templates/usuario/list-options.html'
  ], function($, _, Backbone, usuarioListOptionsTemplate){

    var UsuarioListOptionsView = Backbone.View.extend({
      className: 'text-center',
      events : {
        'click .verUsuario' : 'verUsuario'
      },
      initialize: function (model) {
        this.template = _.template(usuarioListOptionsTemplate);
        this.model = model;
      },
      render: function(){
        this.$el.html(this.template({
          model: this.model.toJSON()
        }));

        this.delegateEvents();

        return this;
      },
      verUsuario: function(){
        console.log(this.model.attributes);
      }

    });

    return UsuarioListOptionsView;
  });