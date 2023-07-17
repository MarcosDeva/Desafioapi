
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Grupo } from "./Grupo";


@Entity('produtos')
export class Produto {
    @PrimaryGeneratedColumn()
    id_produto: number

    @Column({ type: 'text' })
    nome: string

    @Column({ type: 'text' })
    descricao: string

    @Column({ type: 'text' })
    codigo_controle: string

    @Column({ type: 'float'})
    vr_unitario: number

    @Column({ type: 'text' })
    imagem: string

    @Column({ type: 'text'})
    status_produto: string

    @ManyToOne(type => Grupo, produtos => Produto )
    grupo: Grupo


}