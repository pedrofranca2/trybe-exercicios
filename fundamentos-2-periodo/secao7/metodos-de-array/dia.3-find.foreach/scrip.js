
// const songs = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ];
  
// //   const findSong = songs.find((song) => {
// //     return song.id === '31031685'; 
// //   })

// //   console.log(findSong);


//   const contacts = [
//     { name: 'João', phone: '123456789' },
//     { name: 'Maria', phone: '987654321' },
//     { name: 'Pedro', phone: '456123789' },
//     { name: 'Ana', phone: '789456123' },
//     { name: 'Carlos', phone: '321654987' },
//     { name: 'Mariana', phone: '654123987' },
//     { name: 'Lucas', phone: '987321654' },
//     { name: 'Laura', phone: '123789456' },
//     { name: 'Tiago', phone: '789123456' },
//     { name: 'Beatriz', phone: '456789123' }
//   ];
  
//   const searchContact = (contacts, name) => {
//     const findContacts = contacts.find((contact) => contact.name === name);

//             if(findContacts) {
//                 return {...findContacts}
//             }
//             return "Contato não encontrado"
//     }


//   console.log(searchContact(contacts, 'Pedro'));


const cartoons = [
    { title: 'Tom & Jerry', ageRating: 'Livre' },
    { title: 'Scooby-Doo', ageRating: 'Livre' },
    { title: 'Looney Tunes', ageRating: 'Livre' },
    { title: 'The Simpsons', ageRating: 12 },
    { title: 'Avatar: The Last Airbender', ageRating: 'Livre' },
    { title: 'Pokémon', ageRating: 'Livre' },
    { title: 'Dragon Ball Z', ageRating: 12 },
    { title: 'Adventure Time', ageRating: 'Livre' },
    { title: 'Gravity Falls', ageRating: 'Livre' },
    { title: 'Teen Titans Go!', ageRating: 'Livre' }
  ];

  const addGender = () => { 
    cartoons.forEach((cartoon) => {
        cartoon.gender = 'Animação'
    })
    return cartoons;
  }
  console.log(addGender());