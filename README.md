# CADASTRO DE CARRO

**RF**
  Deve ser possível cadastrar um novo carro.
  Deve ser possível listar todas as categorias.

**RN**
  Nẫo deve ser possível cadastrar um carro com a placa já existente no banco de dados.
  Não deve ser possível alterar a placa de um carro já cadastrado.
  O carro deve ser cadastrado por padrão com disponibilidade igual a true.
  O usuário responsável pelo cadastro de um carro deve ser um admnistrador.

# LISTAGEM DE CARROS

**RF**
  Deve ser possível listar todos os carros disponíveis.
  Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
  Deve ser possível listar todos os carros disponíveis pelo nome da marca.
  Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
  O usuário não precisa estar logado no sistema para listar os carros disponíveis.

# CADASTRO DE ESPECIFICAÇÃO NO CARRO

**RF**
  Deve ser possível cadastrar uma especificação para um carro.
  Deve ser possível listar todas as especificações.
  Deve ser possível listar todos os carros.

**RN**
  Não deve ser possível cadastrar uma especificação para um carro não existente.
  Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
  O usuário responsável pelo cadastro de uma especificação deve ser um admnistrador.

# CADASTRO DE IMAGENS DO CARRO

**RF**
  Deve ser possível cadastrar a imagem do carro.
  Deve ser possível listar todos os carros.

**RNF**
  Utilizar o multer para upload de arquivos.

**RN**
  O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
  O usuário responsável pelo cadastro de uma imagem deve ser um admnistrador.

# ALUGUEL DE CARRO

**RF**
  Deve ser possível cadastrar um aluguel.


**RN**
  O Aluguel deve ter duração miníma de 24 horas.
  Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo usuário.
  Não deve ser possível cadastrar um aluguel caso já exista um aberto para o mesmo carro.


