define([
  "jquery",
  "underscore",
  "backbone",
  'text!templates/usuario/usuarios.html',
  'collections/usuarios',
  'views/usuario/list'
  ], function($, _, Backbone, usuariosTemplate, UsuariosList, UsuarioListView){

    var UsuariosView = Backbone.View.extend({
      className: "row",
      events : {
      },
      initialize: function () {
        this.template = _.template(usuariosTemplate);
        this.usuariosList = new UsuariosList();

        this.listenTo(this.usuariosList, 'reset', this.render);

        this.usuariosList.fetch({reset: true});
      },
      render: function(){
        this.$el.html(this.template());
        
        var that = this;
        this.$('#usuarios-container').empty();

        this.usuariosList.each(function(usuario){
            that.addUsuario(usuario);
        });

        this.delegateEvents();

        return this;
      },
      addUsuario: function(usuario){
        var view = new UsuarioListView(usuario);
        this.$('#usuarios-container').append(view.render().el);
      }

    });

    return UsuariosView;
  });