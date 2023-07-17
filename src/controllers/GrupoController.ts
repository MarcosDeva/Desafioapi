import { Request, Response } from "express"
import { grupoRepository } from "../repositories/grupoRepository"


export class GrupoController {

    async create(req: Request, res: Response) {
		const { descricao } = req.body

		try {
			const newGrupo = grupoRepository.create({ descricao })
			await grupoRepository.save(newGrupo)

			return res.status(201).json({ message: 'Grupo Registrado!' })
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const newGrupos = await grupoRepository.find()

			return res.json(newGrupos)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

	async listId(req: Request, res: Response) {
		const { id } = req.body

		try {
			const grupo = await grupoRepository.findOneBy({ id_grupo: Number(id) })

			if (!grupo) {
				return res.status(404).json({ message: 'Aula não existe' })
			}

			return res.json(grupo)

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
	}

}