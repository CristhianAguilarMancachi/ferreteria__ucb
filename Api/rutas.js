const router = require('express').Router()
const conexion = require('./config/conexion')



//---------- agregamos rutas--------
//get equipos
router.get('/',(req, res)=>{
    let sql ='select * from productos'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

// get un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from productos where id = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
    const{nombre, precio} = req.body

    let sql = `insert into productos(nombre, precio) values('${nombre}','${precio}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'producto agregado'})
        }
    })
})

//agregar pedido
router.post('/pedido',( req, res)=>{
    const{nombre, numero, correo, direccion, producto} = req.body

    let sql = `insert into pedidos(nombre, numero, correo, direccion, producto) values('${nombre}','${numero}','${correo}','${direccion}','${producto}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'pedido agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from productos where id = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'producto eliminado'})
        }
    })
})

//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, precio} = req.body

    let sql = `update productos set 
                nombre ='${nombre}',
                precio ='${precio}'
                where id = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'producto modificado'})
        }
    })

})


//----------------------------------

module.exports = router