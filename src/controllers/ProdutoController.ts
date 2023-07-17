import { Request, Response } from "express"
import { produtoRepository } from "../repositories/produtoRepository"

export class ProdutoController {

	async update(req: Request, res: Response){

		const { 
			id, 
			nome, 
			descricao, 
			codigo_controle, 
			vr_unitario, 
			imagem, 
			status_produto, 
			grupo 
		} = req.body
	
		try {
			const produto = await produtoRepository.findOneBy({ id_produto: Number(id) })

			if (!produto) {
				return res.status(404).json({ message: 'Produto Não Existe' })
			}

			const produtoUpdate = await produtoRepository.save({
				id_produto:id, nome, descricao, codigo_controle, vr_unitario, imagem, status_produto, grupo
			});
			
			return res.status(201).json({ message: 'Produto alterado' })

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}

	}
	
	async delete(req: Request, res: Response){
		const { id } = req.body
		
		try {
			
			const deleteGrupo = produtoRepository.delete({ id_produto: id })
		
			return res.status(201).json({ message: 'Produto Deletado!' })
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
		
	}

    async create(req: Request, res: Response) {
		const { 
            nome, 
            descricao, 
            codigo_controle, 
            vr_unitario, 
            imagem,
            status_produto,
            grupo
        } = req.body
		
        try {
			const newProduto = produtoRepository.create({ nome, descricao, codigo_controle, vr_unitario, imagem, status_produto, grupo})
			await produtoRepository.save(newProduto)

			return res.status(201).json({ message: 'Produto Registrado!' })
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const newProdutos = await produtoRepository.find()

			return res.json(newProdutos)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async listId(req: Request, res: Response) {
		const { id } = req.body

		try {
			const grupo = await produtoRepository.findOneBy({ id_produto: Number(id) })

			if (!grupo) {
				return res.status(404).json({ message: 'Produto Não Existe' })
			}

			return res.json(grupo)

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}



}