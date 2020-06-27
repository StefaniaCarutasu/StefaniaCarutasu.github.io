var formidable = require("formidable");
var crypto = require("crypto");
var session = require("express-session");
var fs= require('fs');

var express = require('express');/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var path = require('path');
var app = express(); //aici avem serverul

// pentru folosirea ejs-ului 
app.set('view engine', 'ejs');

console.log(__dirname);//calea catre radacina proiectului
app.use(express.static(path.join(__dirname, "resurse")))
//din acest moment toate caile catre fisierele statice le scriem relativ la folderul resurse

app.use(session({
	secret: "cheie_sesiune",
	resave: true,
	saveUninitialized: false
}))
//din acest moment in toate requesturile o sa am si proprietatea session (req.session) care e acelasi obiect pentru toate requesturile

// ------------ tratare cereri post -------
app.post('/inreg', function(req, res) {
  var formular= new formidable.IncomingForm()
	formular.parse(req, function(err, fields, files){
		//files provine din inputurile de tip file <input type="file"....
		//fields sunt toate celelalte

		//in fields proprietatile sunt valorile atributelor name din inputurile din formular
		// <input type="text" name="username" 
		fisierUseri=fs.readFileSync("resurse/JSON/useri.json");
		var parolaCriptata;
		//al doilea argument e parola(cheia) de criptare
		var algoritmCriptare=crypto.createCipher('aes-128-cbc',"parola_criptare");
		parolaCriptata=algoritmCriptare.update(fields.parola, "utf-8", "hex");
		parolaCriptata+=algoritmCriptare.final("hex");
		obUseri= JSON.parse(fisierUseri);
		var userNou= {
		id: obUseri.lastId,
		username: fields.username,
        nume: fields.nume,
		prenume: fields.prenume,
		email: fields.email,
		parola: parolaCriptata,
		oras: fields.oras,
        dataInreg: new Date(),
        rol: "user"
			}
		obUseri.useri.push(userNou);
    obUseri.lastId++;
		var jsonNou=JSON.stringify(obUseri);
		fs.writeFileSync("resurse/JSON/useri.json",jsonNou );
		res.redirect("/index")
	})
})

//in primul parametru din app.post avem valoarea din action-ul formularului
app.post('/login',function(req,res) {
  var dateForm=new formidable.IncomingForm()
	dateForm.parse(req, function(err, fields, files){
		//<input type="file" name="fis1" /> ----> files.fis1
		//fields e pentru restul de inputuri <input name="ceva" ---> fields.ceva
		var textJson=fs.readFileSync("resurse/JSON/useri.json","utf8"); //cale relativa la fisierul index.js
		var obJson=JSON.parse(textJson);
		var parolaCriptata;
		var algoritmCriptare=crypto.createCipher("aes-128-cbc", "parola_criptare")
		parolaCriptata=algoritmCriptare.update(fields.parola, "utf-8","hex");
		parolaCriptata+=algoritmCriptare.final("hex");
		console.log(parolaCriptata);
		var user= obJson.useri.find(function(elem){
			return (elem.username == fields.username &&  elem.parola==parolaCriptata);
		});
		console.log(user);
		
		if(user){
			req.session.utilizator=user;
			res.render("html/rezervari2", {username: user.username})
		}
		else res.redirect("/produse2");
    
	})
	
})



// ------------ tratare cereri get -------

app.get("/logout", function(req, res) {
	req.session.destroy();
	res.redirect("/index")
});

// cand se face o cerere get catre pagina de index 
app.get('/', function(req, res) {
	/*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
		var numeUtiliz= req.session? (req.session.utilizator? req.session.utilizator.username : null) : null;
    res.render('html/index', {username: numeUtiliz });
});
/*
app.get('/pagina', function(req, res) {
	//afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) 
    res.render('html/pagina');
});

*/

app.get('/ceva', function(req, res) {
	/*afiseaza(render) pagina folosind ejs (deoarece este setat ca view engine) */
    console.log("a intrat pe request")
		res.setHeader("Content-Type", "text/html");
		res.write("<html><body><p>Salut!!!!</p>");
		//if(cond)
		res.write("</body></html>");
		res.end();
});
// * - orice 
app.get("/*", function(req,res){
	console.log(req.url);

	var numeUtiliz= req.session? (req.session.utilizator? req.session.utilizator.username : null) : null;


	res.render('html'+req.url, {username: numeUtiliz}, function(err,textRandare){
		//textRandare este rezultatul compilarii templateului ejs
		if(err){
			if(err.message.includes("Failed to lookup view"))
				return res.status(404).render("html/404",  {username: numeUtiliz});
			else
				throw err;
		}
		res.send(textRandare);

	});
})

//Intotdeauna verificam la final! daca nu gaseset resursa si transmitem codul 404
/*
app.use(function(req, res){
	res.status(404).render('html/404');
})*/


app.listen(8080);
console.log('Aplicatia se va deschide pe portul 8080.');



