define([
  "jquery",
  "backbone",
  'text!templates/mascota/new.html',
  "models/mascota",
  "collections/tiposMascota",
  "alertify",
  "bootstrap-select",
  "lib/jquery.iframe-transport",
  "lib/jquery.fileupload",
  "lib/backbone.defered-view-loader",
  "lib/backbone.upload-manager"
  
  ], function($, Backbone, newMascotaTemplate, MascotaModel, TiposMascotaList, alertify){

    var NewMascotaView = Backbone.View.extend({
      events : {
        'click #cancelar' : 'cancelar',
        'submit #new-mascota-form' : 'crear'
      },
      initialize: function () {
        this.template = _.template(newMascotaTemplate);
        this.tiposMascotaList = new TiposMascotaList();

        this.listenTo(this.tiposMascotaList, 'reset', this.render);

        this.tiposMascotaList.fetch({
          reset: true,
          success: function(tiposMascota){

          }
        });
      },
      render: function(){
        this.$el.html(this.template({
          tiposMascota: this.tiposMascotaList.toJSON()
        }));

        $('select').selectpicker();

        /*
        Backbone.TemplateManager.baseUrl = '{name}';
        
        var uploadManager = new Backbone.UploadManager({
            uploadUrl: '/upload',
            templates: {
                main: 'js/templates/plugins/upload-manager.main',
                file: 'js/templates/plugins/upload-manager.file'
            }
        });

        uploadManager.renderTo(this.$('div#manager-area'));
        */

        this.delegateEvents();

        return this;
      },
      cancelar: function(){
        this.trigger("cancelar", {actionCommand: "save"});
        this.remove();

        return false;
      },
      crear: function(event){
        if(event){ event.preventDefault(); }

        var mascota = new MascotaModel();
        mascota.set({
          "nombre" : this.$('form input[name="nombre"]').val(),
          "tipo"   : this.$('form select[name="tipo"]').val()
        })

        if(mascota.isValid()){
          mascota.save(mascota.toJSON(), {
            success: function(mascota){
              console.log(mascota);
            }
          });  
        }else{
          alertify.error(mascota.validationError);
        }
        

      }

    });

return NewMascotaView;
});