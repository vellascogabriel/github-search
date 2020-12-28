#  Pesquisa de Perfis do GitHub

### Projeto de busca de perfis de usuários do GitHub desenvolvido utilizando ReactJS

#### Nesse projeto, acessamos a API do GitHub com o objetivo de realizar buscas de perfis de usuários e, realizando também, filtragens nos resultados das buscas.


### Iniciando os testes
-------
#### Para iniciar os testes com o projeto, abra o terminal no diretório do projeto e digite a seguinte linha de comando

```
npm install
```

#### Caso você tenha o yarn instalado como gerenciador de pacotes, execute o comando

```
yarn install
```

### Executando o projeto
------------
#### Após a instalação das dependências do projeto, iremos executar o projeto com a seguinte linha de comando

```
npm start
```

#### Caso você utilize o yarn como gerenciador de pacotes, execute a seguinte linha de comando
```
yarn start
```

#### Aguarde a construção do projeto e espere o Navegador abrir com a seguinte tela
![](./principal.png)


#### Nessa tela podemos observar a barra de pesquisas onde colocamos o perfil que iremos pesquisar e, logo abaixo, nossos filtros para refinarmos os resultados da busca.


#### Para comerçarmos o teste de busca podemos começar pesquisando o meu próprio perfil no GitHub (vellascogabriel), entretanto, para obtermos um conjunto de resultados na pesquisa, podemos começar escrevendo somente "vellas", teremos como resultado alguns perfis que possui "vellas" em seu nome.

#### Como resultado, para que a aplicação não exceda o limite de requisições da API do GitHub sem estar autenticado, o projeto retorna no máximo 8 perfis na pesquisa, quantidade suficiente para obtermos o meu perfil nessa pesquisa.

![](./perfil_encontrado.png)

####  A partir daí, podemos aplicar os filtros para refinarmos os resultados da pesquisa, escolhendo o location do usuário com a lista de Estado do Brasil, selecionando somente os perfis do resultado que possuem bio, e escolhendo a ordem em que os resultados aparecerão, podendo começar do perfil mais novo para o mais antigo ou vice-versa.

#### Eu fiz o deploy desse projeto no vercel, podendo ser acessado pelo seguinte link: https://github-search-project.vercel.app/

#### Espero que gostem do projeto! Muito obrigado! =D


