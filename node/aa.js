const express=require('express');
const mysql=require('mysql');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({}))
const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'ke',
	port:3306
})


app.post('/get',(req,res)=>{
	pool.getConnection((err,con)=>{
		if(err) throw err;
		res.setHeader('Access-Control-Allow-Origin','*');

		con.query(`SELECT * FROM timetable WHERE week='${req.body.week}' `,(err,rows)=>{
			if(rows.length==0){
				res.send({name:''})
			}else{
				res.send(rows)
			}
			
		})
	});
})
app.post('/set',(req,res)=>{
	pool.getConnection((err,con)=>{
		res.setHeader('Access-Control-Allow-Origin','*');
		if(err) throw err;
		con.query(`SELECT * FROM timetable WHERE week='${req.body.value2}' AND sort='${req.body.list2}'`,(err,rows)=>{
			if(rows.length!=0){
				var aa=rows[0].id;
				con.query(`update timetable SET name='${req.body.name2}' WHERE id='${aa}'`,(err,e)=>{
					// console.log(e)
					if(err) throw err;
					res.send(e)
					// res.release()
				})
			}else{
				con.query(`INSERT INTO timetable (name,week,sort) VALUES ('${req.body.name2}','${req.body.value2}','${req.body.list2}')`,(err,rows)=>{
					res.send(rows)
					// res.release()
				})
			}
			
		})
	});
});
app.post('/add',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	// console.log(req.body.name)
	pool.getConnection((err,con)=>{
		if(err) throw err;

		con.query(`INSERT INTO timetable (name,week,sort) VALUES ('${req.body.name}','${req.body.value}','${req.body.list}')`,(err,rows)=>{
			res.send(rows)
			// res.release()
		})
	});
})

app.listen('8000',function(){
	console.log('success')
})