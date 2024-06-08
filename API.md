# Documentação da API

## Cadastro de Usuário

Este endpoint é utilizado para cadastrar um novo usuário.

- **URL**
  ```
  POST https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/cadastro
  ```

- **Parâmetros da Requisição**
  - `nome` (string): Nome do usuário.
  - `email` (string): Email do usuário.
  - `cpf` (string): CPF do usuário.
  - `rg` (string): RG do usuário.
  - `ddd` (string): DDD do telefone do usuário.
  - `telefone` (string): Número de telefone do usuário.
  - `usuario` (string): Nome de usuário.
  - `senha` (string): Senha do usuário.
  - `dtNascimento` (string): Data de nascimento do usuário.

- **Exemplo de Requisição**
  ```javascript
  axios.post('https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/cadastro', {
    nome: "Nome do Usuário",
    email: "usuario@example.com",
    cpf: "123.456.789-00",
    rg: "123456789",
    ddd: "12",
    telefone: "123456789",
    usuario: "nomeusuario",
    senha: "senhadousuario",
    dtNascimento: "01/01/1990"
  });
  ```

- **Retorno**
  - Status: 201 Created
  - Corpo da Resposta: Vazio (ou mensagem de sucesso)

---

## Login de Usuário

Este endpoint é utilizado para autenticar o usuário.

- **URL**
  ```
  POST https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/login
  ```

- **Parâmetros da Requisição**
  - `usuario` (string): Nome de usuário.
  - `senha` (string): Senha do usuário.

- **Exemplo de Requisição**
  ```javascript
  axios.post('https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/login', {
    usuario: "nomeusuario",
    senha: "senhadousuario"
  });
  ```

- **Retorno**
  - Status: 200 OK
  - Corpo da Resposta: Vazio (ou mensagem de sucesso)

---

## Envio de Denúncia

Este endpoint é utilizado para enviar uma denúncia de localização.

- **URL**
  ```
  POST https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias
  ```

- **Parâmetros da Requisição**
  - `latitude` (number): Latitude da localização denunciada.
  - `longitude` (number): Longitude da localização denunciada.
  - `descricao` (string): Descrição da denúncia.

- **Exemplo de Requisição**
  ```javascript
  axios.post('https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias', {
    latitude: -18.769,
    longitude: -42.599,
    descricao: "Descrição da denúncia"
  });
  ```

- **Retorno**
  - Status: 200 OK
  - Corpo da Resposta: Vazio (ou mensagem de sucesso)

## API da Tela de Perfil

### 1. Obtenção de Denúncias

- **Descrição:** Realiza requisições HTTP para obter as denúncias do usuário.
- **Função:** `fetchDenuncias`
- **Endpoint:** `GET https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias`
- **Ação:** As denúncias obtidas são armazenadas no estado `denuncias`.

### 2. Obtenção de Dados do Usuário

- **Descrição:** Realiza requisições HTTP para obter os dados do usuário.
- **Função:** `fetchUserData`
- **Endpoint:** `GET https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/usuario`
- **Ação:** Os dados do usuário são armazenados no estado `user` e o nome do usuário é atualizado em `userName`.

### 3. Edição de Denúncias

- **Descrição:** Permite editar e excluir denúncias.
- **Funções:** 
  - `handleEditDenuncia`: Ativa o modo de edição para uma denúncia específica.
  - `handleUpdateDenuncia`: Atualiza a descrição da denúncia.
  - `handleDeleteDenuncia`: Deleta uma denúncia.
- **Endpoints:** 
  - Atualização: `PUT https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias/{id}`
  - Exclusão: `DELETE https://5c089b79-e20e-4a70-b7ef-e5aef70a01b1-00-3olts4zw3pnvr.janeway.replit.dev/denuncias/{id}`

### 4. Edição do Cadastro do Usuário

- **Descrição:** Permite editar os dados do usuário.
- **Função:** `handleUpdateUser`
- **Endpoint:** `PUT https://32d84d8e-3f03-4d8e-994b-0d8e7180ce6c-00-351tymd2tp65g.riker.replit.dev/usuarios/{id}`
- **Ação:** Atualiza os dados do usuário.

### 5. Efeitos Colaterais

- **Descrição:** Realiza operações adicionais ao montar o componente.
- **Função:** `useEffect`
- **Ação:** Chama as funções `fetchDenuncias` e `fetchUserData` quando o componente é montado.
