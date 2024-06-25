const express = require('express');
const http = require('http');
var mysql = require('mysql2');
var url = require("url");
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
const users = require('./data').userDB;
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});



app.post('/user', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.t1 === data.email);
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.t2, 10);

            let newUser = {
                id: Date.now(),
                username: req.body.t1,
                email: req.body.t2,
                password: hashPassword,
            };
            users.push(newUser);
            console.log('User Order', users);
            //Data bse code start
            var b1 = req.body.t1;
            var b2 = req.body.t2;
            var b3 = req.body.t3;
            var b4 = req.body.t4;
            var b5 = req.body.t5;
            var b6 = req.body.t6;
            var b7 = req.body.t7;
            var b8 = req.body.t8;
            var b9 = req.body.t9;
            var b10 = req.body.t10;
            var b11 = req.body.t11;
            var b12 = req.body.t12;
            var b13 = req.body.t13;
            var b14 = req.body.t14;


            var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "stu" });
            con.connect(function (err) {
                if (err) throw err;
                console.log("connected");
                con.query("insert into order1 values('" + b1 + "','" + b2 + "','" + b3 + "','" + b4 + "','" + b5 + "','" + b6 + "','" + b7 + "','" + b8 + "','" + b9 + "','" + b10 + "','" + b11 + "','" + b12 + "','" + b13 + "','" + b14 + "')", function (err, result) {
                    if (err) throw err;
                    console.log("Database created");

                });
            });
            //data base code end
            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});




app.post('/register', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.email === data.email);
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.password, 10);

            let newUser = {
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                password: hashPassword,
            };
            users.push(newUser);
            console.log('User list', users);
            //Data bse code start
            var nam = req.body.username;
            var ema = req.body.email;
            var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "stu" });
            con.connect(function (err) {
                if (err) throw err;
                console.log("connected");
                con.query("insert into stu values('" + nam + "','" + ema + "')", function (err, result) {
                    if (err) throw err;
                    console.log("Database created");

                });
            });
            //data base code end
            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});



app.post('/checklogin', async (req, res) => {
    try {
        var a1 = req.body.t1;
        var a2 = req.body.t2;
        var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "computer" });
        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query("select *from computer where salesPacage='" + a1 + "' and MOdelNumber='" + a2 + "'", function (err, result) {
                if (err) throw err;
                if (result.length > 0) {
                    res.writeHead(301, { Location: "http://localhost:3000/afterlogin.html" });
                    res.end();
                    //res.send("<div align ='center'><h2>Welcome......</h2><h2>"+result[0].salesPacage+"</h2></div><br><br><div align='center'></div><br><br><div align='center'>Register another user</a></div>");
                }
                else {
                    //res.send("<div align ='center'><h2>Invalid Userid And Password</h2><h2></h2></div><br><br><div align='center'>login</a></div><br><br><div align='center'>Register another user</a></div>");
                }
                console.log("Sucessfull");

            });
        });
        //data base code end
    } catch
    {
        res.send("Internal server error");
    }
});

//data base code end






app.post('/addnewitem', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.t1 === data.email);
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.t4, 10);

            let newUser = {
                id: Date.now(),
                username: req.body.t1,
                email: req.body.t2,
                password: hashPassword,
            };
            users.push(newUser);
            console.log('dish list');
            //Data bse code start
            var a1 = req.body.t1;
            var a2 = req.body.t2;
            var a3 = req.body.t3;
            var a4 = req.body.t4;
            var a5 = req.body.t5;
            var a6 = req.body.t6;
            var a7 = req.body.t7;
            var a8 = req.body.t8;
            var a9 = req.body.t9;
            var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "stu" });
            con.connect(function (err) {
                if (err) throw err;
                console.log("connected");
                con.query("insert into item values('" + a1 + "','" + a2 + "','" + a3 + "','" + a4 + "','" + a5 + "','" + a6 + "','" + a7 + "','" + a8 + "','" + a9 + "')", function (err, result) {
                    if (err) throw err;
                    console.log("dish add ");

                });
            });
            //data base code end
            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});


app.post('/deleteitem', async (req, res) => {
    try {
        var a1 = req.body.t1;
        var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "mydemo1" });
        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query("delete from restrunt where ItemCode='" + a1 + "'", function (err, result) {
                res.writeHead(301, { Location: "http://localhost:3000/afterlogin.html" });
                res.end();
                console.log("Sucessfull");
            });
        });
        //data base code end
    } catch
    {
        res.send("Internal server error");
    }
});

//data base code end















app.post('/companydetails', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.t1 === data.email);
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.t4, 10);

            let newUser = {
                id: Date.now(),
                username: req.body.t1,
                email: req.body.t2,
                password: hashPassword,
            };n 
            users.push(newUser);
            console.log('dish list');
            //Data bse code start
            var a1 = req.body.t1;
            var a2 = req.body.t2;
            var a3 = req.body.t3;
            var a4 = req.body.t4;
            var a5 = req.body.t5;
            var a6 = req.body.t6;
            var a7 = req.body.t7;
            var a8 = req.body.t8;
            var a9 = req.body.t9;
            var a10 = req.body.t10;
            var a11 = req.body.t11;
            var a12 = req.body.t12;
            var a13 = req.body.t13;
            var a14 = req.body.t14;
            var a15 = req.body.t15;
            var a16 = req.body.t16;
            var a17 = req.body.t17;
            var a18 = req.body.t18;
            var a19 = req.body.t19;
            var a20 = req.body.t20;
            var a21 = req.body.t21;
            var a22 = req.body.t22;
            var a23 = req.body.t23;

            var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "computer" });
            con.connect(function (err) {
                if (err) throw err;
                console.log("connected");
                con.query("insert into vender values('" + a1 + "','" + a2 + "','" + a3 + "','" + a4 + "','" + a5 + "','" + a6 + "','" + a7 + "','" + a8 + "','" + a9 + "','" + a10 + "','" + a11 + "','" + a12 + "','" + a13 + "','" + a14 + "','" + a15 + "','" + a16 + "','" + a17 + "','" + a18 + "','" + a19 + "','" + a20 + "','" + a21 + "','" + a22 + "','" + a23 + "')", function (err, result) {
                    if (err) throw err;
                    console.log("Compuer");

                });
            });
            //data base code end
            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});


// show data codes  of VenderProfile



app.post('/showdata', async (req, res) => {
    try {
        var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "computer" });
        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query("select *from computer", function (err, result) {
                if (err) throw err;
                res.send("<div align ='center'><h2>Registration successful<br></h2><h2>" + result[0].salesPacage + "</h2></h2><h2>" + result[0].MOdelNumber + "</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
                console.log("Sucessfull");

            });
        });
        //data base code end
    } catch
    {
        res.send("Internal server error");
    }
});

//data base code end



app.post('/fetch', async (req, res) => {
    try {
        var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "computer" });
        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query("select *from computer", function (err, result) {
                if (err) throw err;
                res.send("<div align ='center'><h2>Successful<br></h2><table><tr><td><label>Sales Package</label></td><td>" + result[0].MOdelNumber + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr><tr><td><label>Model Number</label></td><td>" + result[0].salesPacage + "</td></tr></table></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
                console.log("Sucessfull");

            });
        });
        //data base code end
    } catch
    {
        res.send("Internal server error");
    }
});

//data base code end


app.post('/productupdate', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.t1 === data.email);
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.t4, 10);

            let newUser = {
                id: Date.now(),
                username: req.body.t1,
                email: req.body.t2,
                password: hashPassword,
            };
            users.push(newUser);
            console.log('dish list');
            //Data bse code start
            var a1 = req.body.t1;
            var a2 = req.body.t2;
            var a3 = req.body.t3;
            var a4 = req.body.t4;
            var a5 = req.body.t5;
            var a6 = req.body.t6;
            var a7 = req.body.t7;
            var a8 = req.body.t8;
            var a9 = req.body.t9;
            var a10 = req.body.t10;
            var a11 = req.body.t11;
            var a12 = req.body.t12;
            var a13 = req.body.t13;
            var a14 = req.body.t14;
            var a15 = req.body.t15;
            var a16 = req.body.t16;
            var a17 = req.body.t17;
            var a18 = req.body.t18;
            var a19 = req.body.t19;
            var a20 = req.body.t20;
            var a21 = req.body.t21;
            var a22 = req.body.t22;
            var a23 = req.body.t23;
            var a24 = req.body.t24;
            var a25 = req.body.t25;
            var a26 = req.body.t26;
            var a27 = req.body.t27;
            var a28 = req.body.t28;
            var a29 = req.body.t29;
            var a30 = req.body.t30;
            var a31 = req.body.t31;
            var a32 = req.body.t32;
            var a33 = req.body.t33;
            var a34 = req.body.t34;
            var a35 = req.body.t35;
            var a36 = req.body.t36;
            var a37 = req.body.t37;
            var a38 = req.body.t38;
            var a39 = req.body.t39;

            var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "computer" });
            con.connect(function (err) {
                if (err) throw err;
                console.log("connected");
                con.query("update computer set salesPacage='" + a1 + "',MOdelNumber='" + a2 + "',PartPacage ='" + a3 + "',Seried ='" + a4 + "',Color ='" + a5 + "',Type ='" + a6 + "', SuitableFor ='" + a7 + "',BatteryCell ='" + a8 + "',Msoffice ='" + a9 + "',ProcessorAndMemoryFeatures ='" + a10 + "',Dedicategraphicmemory ='" + a11 + "',DedicatememoryCapacity ='" + a12 + "',processorBrand ='" + a13 + "',processorName ='" + a14 + "',ProcessorGen ='" + a15 + "',Ssd ='" + a16 + "', SsdType ='" + a17 + "',Ram ='" + a18 + "',RamType ='" + a19 + "',ProcesserVariant ='" + a20 + "',ClockSpeed ='" + a21 + "',MemorySlots ='" + a22 + "',Expandablememory ='" + a23 + "',graphicProcesser ='" + a24 + "',OsArchitecture ='" + a25 + "',OperatingSystem ='" + a26 + "',SupportedOperatingSystem ='" + a27 + "',SystemArchitech ='" + a28 + "',TouchScreen ='" + a29 + "',ScreenSize ='" + a30 + "',ScreenResolution ='" + a31 + "',ScreenType ='" + a32 + "',RefreshRate ='" + a33 + "',WireLessLAN ='" + a34 + "',Bluetooth ='" + a35 + "',Dimensitons ='" + a36 + "',Weight ='" + a37 + "',ProductPrice ='" + a38 + "' where ProductCode='" + a39 + "'", function (err, result) {
                    if (err) throw err;
                    console.log("Computer");
                });
            });
            //data base code end
            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});



app.post('/login', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.email === data.email);
        if (foundUser) {

            let submittedPass = req.body.password;
            let storedPass = foundUser.password;

            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
            if (passwordMatch) {
                let usrname = foundUser.username;
                res.send("<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>");
            } else {
                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
            }
        }
        else {

            let fakePass = $2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga;
            await bcrypt.compare(req.body.password, fakePass);

            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
        }
    } catch {
        res.send("Internal server error");
    }
});





app.post('/addfooditem', async (req, res) => {
    try {
        var a1 = req.body.t1;
        var a2 = req.body.t2;
        var a3 = req.body.t3;
        var a4 = req.body.t4;
        var a5 = req.body.t5;
        var a6 = req.body.t6;
        var a7 = req.body.t7;
        var a8 = req.body.t8;
        var a9 = req.body.t9;

        var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "mydemo1" });
        con.connect(function (err) {
            if (err) throw err;
            console.log("connected");
            con.query("insert into insertitem values('" + a1 + "','" + a2 + "','" + a3 + "','" + a4 + "','" + a5 + "','" + a6 + "','" + a7 + "','" + a8 + "','" + a9 + "')", function (err, result) {
                if (err) throw err;
                console.log("sucessfull");

            });
        });
        //data base code end
        res.send("<div align ='center'><h2>Sucessfull Add</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
    } catch {
        res.send("Internal server error");
    }
});


// addfood item code data codes 

// ComputerWeb codes here

app.post('/addspecs', async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.t1 === data.email);
        if (!foundUser) {

            let hashPassword = await bcrypt.hash(req.body.t4, 10);

            let newUser = {
                id: Date.now(),
                username: req.body.t1,
                email: req.body.t2,
                password: hashPassword,
            };
            users.push(newUser);
            console.log('dish list');
            //Data bse code start
            var a1 = req.body.t1;
            var a2 = req.body.t2;
            var a3 = req.body.t3;
            var a4 = req.body.t4;
            var a5 = req.body.t5;
            var a6 = req.body.t6;
            var a7 = req.body.t7;
            var a8 = req.body.t8;
            var a9 = req.body.t9;
            var a10 = req.body.t10;
            var a11 = req.body.t11;
            var a12 = req.body.t12;
            var a13 = req.body.t13;
            var a14 = req.body.t14;
            var a15 = req.body.t15;
            var a16 = req.body.t16;
            var a17 = req.body.t17;
            var a18 = req.body.t18;
            var a19 = req.body.t19;
            var a20 = req.body.t20;
            var a21 = req.body.t21;
            var a22 = req.body.t22;
            var a23 = req.body.t23;
            var a24 = req.body.t24;
            var a25 = req.body.t25;
            var a26 = req.body.t26;
            var a27 = req.body.t27;
            var a28 = req.body.t28;
            var a29 = req.body.t29;
            var a30 = req.body.t30;
            var a31 = req.body.t31;
            var a32 = req.body.t32;
            var a33 = req.body.t33;
            var a34 = req.body.t34;
            var a35 = req.body.t35;
            var a36 = req.body.t36;
            var a37 = req.body.t37;
            var a38 = req.body.t38;
            var a39 = req.body.t39;

            var con = mysql.createConnection({ host: "localhost", user: "root", password: "root", database: "codemo" });
            con.connect(function (err) {
                if (err) throw err;
                console.log("connected");
                con.query("insert into demo values('" + a1 + "','" + a2 + "','" + a3 + "','" + a4 + "','" + a5 + "','" + a6 + "','" + a7 + "','" + a8 + "','" + a9 + "','" + a10 + "','" + a11 + "','" + a12 + "','" + a13 + "','" + a14 + "','" + a15 + "','" + a16 + "','" + a17 + "','" + a18 + "','" + a19 + "','" + a20 + "','" + a21 + "','" + a22 + "','" + a23 + "','" + a24 + "','" + a25 + "','" + a26 + "','" + a27 + "','" + a28 + "','" + a29 + "','" + a30 + "','" + a31 + "','" + a32 + "','" + a33 + "','" + a34 + "','" + a35 + "','" + a36 + "','" + a37 + "','" + a38 + "','" + a39 + "')", function (err, result) {
                    if (err) throw err;
                    console.log("Compuer");

                });
            });
            //data base code end
            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
        } else {
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
        }
    } catch {
        res.send("Internal server error");
    }
});














server.listen(3000, function () {
    console.log("server is listening on port: 3000");
});