const studentRegister = (name, age) => {
   try {
    if (age >= '18') {
        return `${name}, seja bem-vindo(a) à AuTrybe!`; 
    }
    if (age < '18') {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    } 

    if (!age || !name) {
        throw new Error('Todas as informações são necessárias');
    }
    
    } catch (error) {
        return error.message;
    }
  }

  console.log(studentRegister(,))