
# Desafio: Consulta Produtos

Esse projeto foi desenvolvido em TS.  Configurei dois bandos de dados, um em mysql que pode ser utilizado no docker e um segundo DB  em sqlite. Dependendo de qual usar, precisa alterar no data-source.ts.  Duvidas é so perguntar

## Status do Projeto;

Projeto finalizado

## Funcionalidades e Demonstração da Aplicação;

### Dependencias de Desenvolvimentos
    - yarn add -D typescript nodemon ts-node @types/express @types/node

### Dependencias de Produção 
    - yarn add express sqlite3 typeorm dotenv reflect-metadata

### Migrates 
    - yarn migration:generate
    - yarn migration:run


### api para cadastro de produtos e grupos:

    - endpoint consulta produtos ('/products')
    - endpoint consulta detalhe produto ('/product/:id')
    - endpoint editar produto ('/product/:id')
    - endpoint deletar produto ('/product/:id')
    - endpoint cadastro produto ('/product')

</br>

    - endpoint consulta grupos ('/groups')
    - endpoint consulta detalhe grupo ('/group/:id')
    - endpoint cadastro grupo ('/group')

</br>



### Tipos

    type Grupo = {
        id_grupo: int;
        descricao: string;
    };

    type Produto = {
        id_produto: int;
        nome: string;
        descricao: string;
        codigo_controle: string;
        id_grupo: int;
        vr_unitario: float;
        imagem: string;
        status_produto: int;
    };


