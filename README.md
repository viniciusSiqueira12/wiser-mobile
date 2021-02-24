## Wiser Mobile
Considerações iniciais: O aplicativo não foi 100% finalizado pela falta de tempo, porém, acho válido a tentativa. Desde já, meu agradecimento!

## Como Iniciar?

instale com o comando yarn install ou npm install.
Após a instalação utilize o comando yarn ios para iniciar a aplicação.

Caso ocorra algum erro inesperado. vá até a pasta ios e rode o comando pod install.

se não tiver o cocoapods em sua máquina, deverá fazer a instalação. Exemplo na imagem a seguir:

![](https://j.gifs.com/gZroj3.gif)



## Em seguida:
Você pode realizar o login com o email: vinicius@hotmail.com e senha: teste123.


## Explicando um pouco sobre a aplicação criada

A estrutura criada é focada em reutilização para melhor escalabilidade e manutenibilidade.
Para este desafio criei uma api, que utiliza a autenticação Bearer que é a mais comum, retornando um
Json Web Token, onde armazeno no Async Storage e faço com que passe esse token nas minhas requisições 
a api.

## Formulário
Para criação de formulário foi utilizado a biblioteca unform.
Documentação utilizada: https://unform.dev/


## Exemplo
 

![](https://j.gifs.com/YW2Lwn.gif)
