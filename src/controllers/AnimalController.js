import database from '../database/index.js'
import Animal from '../models/AnimalModel.js'

class AnimalController{

    constructor(){
        database.sync()
    }
    
    async addAnimal(req, res){
        const { nome_animal, especie_aninal,idade,descricao_pet,porte,raca,sexo,local_animal,peso } = req.body

        await Animal.create({
            nome_animal: nome_animal,
            especie_aninal: especie_aninal,
            idade:idade,
            descricao_pet:descricao_pet,
            porte:porte,
            raca:raca,
            sexo:sexo,
            local_animal:local_animal,
            peso:peso

        })

        return res.json({
            mensagem: 'Animal Criado Com sucesso',
            data:{
                nome_animal,
                especie_aninal,
                idade,
                descricao_pet,
                porte,
                raca,
                sexo,
                local_animal,
                peso

            }
        })
    }



  
    async getAnimal(req, res){
        const animal = await Animal.findAll()

        return res.json(animal)

    }

    async getProduto(req, res){
        const {id} = req.params
        const produto = await Produto.findByPk(id)
        return res.json(produto)

    }

    async updateAnimal(req, res){
        const {id , preco } = req.body

       const prodUp = await Produto.update({
            nome_animal: nome_animal
        },{
            where:{
                id: id
            }
        })
        const animal = await Animal.findByPk(id)
        return res.json(Animal)

    }

    async deleProduto(req, res){
        const {id} = req.params

        await Produto.destroy({
            where: {
              id: id
            }
          });
          return res.json({
            mensagem: "Esse Produto foi deletado com sucesso."
          })

    }
}


export default new AnimalController()