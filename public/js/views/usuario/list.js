define([
  "jquery",
  "underscore",
  "backbone",
  'text!templates/usuario/list.html',
  'views/usuario/list-options'
  ], function($, _, Backbone, usuarioListTemplate, UsuarioListOptionsView){

    var UsuarioListView = Backbone.View.extend({
      className: "col-xs-6 col-sm-2",
      events : {
        'click .verUsuario' : 'verUsuario'
      },
      initialize: function (model) {
        this.template = _.template(usuarioListTemplate);
        this.model = model;

        this.optionsView = new UsuarioListOptionsView(this.model);
      },
      render: function(){
        this.$el.html(this.template({
          model: this.model.toJSON()
        }));

        this.$('.usuario-list-options-container').html(this.optionsView.render().el);

        this.delegateEvents();

        return this;
      },
      verUsuario: function(){
      }

    });

    return UsuarioListView;
  });