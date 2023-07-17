import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./Produto";

@Entity('grupos')
export class Grupo {

    @PrimaryGeneratedColumn()
    id_grupo: number

    @Column({ type: 'text' })
    descricao: string

    @OneToMany(type => Produto, grupo => Grupo)
    produto: Produto[]
}