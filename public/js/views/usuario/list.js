define([
  "jquery",
  "underscore",
  "backbone",
  'text!templates/usuario/list.html'
  ], function($, _, Backbone, usuarioListTemplate){

    var UsuarioListView = Backbone.View.extend({
      className: "col-xs-6 col-sm-3",
      events : {
        'click .verUsuario' : 'verUsuario'
      },
      initialize: function (model) {
        this.template = _.template(usuarioListTemplate);
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
        console.log(this.model);
      }

    });

    return UsuarioListView;
  });