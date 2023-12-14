const { Router } = require('express');
const router = Router()
//const io = require('../app');
const productosModel = require('../dao/models/productos.model')
//const ProductManager = require('../dao/manager/productManager');


//const productManager = new ProductManager();

// let listTest = {
//     name: "Diogo",
//     titulo: "T.I",
//     descripton: "Calvo da sul",
//     price: 100,
//     image: "nada",
//     code: "abc123",
//     stock: 50,
//     category: "a",
//     status: true
// }




router.get('/', async (req, res) => {
    let listProd
    try {
        listProd = await productosModel.findOne({});
        console.log(listProd)
        res.setHeader('Content-type', 'application/json')
        return res.status(200).render('home',{
            listProd,
            title:'Home Page'
        })
    } catch (error) {
        res.setHeader('Content-type', 'application/json')
        return res.status(400).json({ message: "Server Error!!" })

    }
})

// router.get('/realtimeproducts', async(req,res)=>{
//     try {
//         let result = await productManager.getProducts();
//         res.setHeader('Content-type', 'application/json')
//         res.status(200).render('realTimeProducts', {result, titulo: 'Home Page'})        
//     } catch (error) {
//         res.setHeader('Content-type', 'application/json')
//         return res.status(400).json({message:"Server Error!!"})

//     }
// })

module.exports = router;