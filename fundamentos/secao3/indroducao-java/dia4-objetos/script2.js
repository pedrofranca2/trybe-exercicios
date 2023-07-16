const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };
  
  // Criação da função
  const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined"){
      object[key] = value;
    }
  };
  
  // Adição das propriedades
  addProperty(customer, 'email', 'roberto.varella@gmail.com');
  addProperty(customer, 'fone', '99999-9999');
  addProperty(customer, 'userGithub', 'rob-var');
  addProperty(customer, 'linkedIn', 'https://linkedin.com/robs-varella-wow');
  
  // Exibe o objeto transformado
  console.log(customer);