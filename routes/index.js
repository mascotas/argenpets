module.exports = function(app){

	Registro = function(req, res) {
		if(typeof req.session["id"] != "undefined")
			res.redirect('/');
		else
			res.render('register');
	};

	Registrar = function(req, res) {
		var Usuario = app.get('models').usuario;

		if(req.body.password != req.body.repassword)
			res.render('register', {'error' : 'Passwords no coinciden'});

		req.body.rol_id = 1; //TODO: quitar hardcodeo
		delete req.body.repassword

		Usuario.create(req.body).success(function(usuario){
			usuario.nickname = 'u' + usuario.dataValues.id;

			usuario.save().success(function(){

				req.session = { 
					id : usuario.dataValues.id,
					user: usuario.nickname
				};

				res.redirect('/');
			});
			
		}).error(function(err){
			if(err.code == "ER_DUP_ENTRY")
				err.code = "Ya existe un usuario registrado con ese mail";
			res.render('register', {'error' : err.code});
		});
	};

	Login = function(req, res){
		if(typeof req.session["id"] != "undefined")
			res.redirect('/');
		else
			res.render('login');
	}

	Logear = function(req, res){
		var Usuario = app.get('models').usuario;
		var Crypto = require('crypto');

		Usuario.find({
			where: ["email = ? AND password = ?", req.body.email, req.body.password],
		}).success(function(usuario) {
			if(usuario){
				req.session = { 
					id : usuario.dataValues.id,
					user: usuario.dataValues.nickname
				};
				
				res.redirect('/');
			}else{
				res.render('login', {'error' : 'Usuario o password incorrectos'});
			}
		})
	}

	Logout = function(req, res){
		delete req.session.id;
		delete req.session.user;
		res.redirect('/');
	}

	controller = function(app){
		app.get('/logout', this.Logout);
		app.get('/register', this.Registro);
		app.post('/register', this.Registrar);
		app.get('/login', this.Login );
		app.post('/login', this.Logear)
	};

	controller(app);
}

