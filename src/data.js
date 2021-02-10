//Este Archivo llamado data.js tiene el proposito de manipular la DATA
export function filterGender(characters,genero){
  const genderRole= characters.filter(role => role.gender===genero);
  return genderRole
};

export function filterStatus(characters,status){
  const statusRole = characters.filter(role => role.status===status);
  return statusRole
};
// export function orderAZ(characters){
//   const personajes2= characters.sort((a,b) => {
//     if (a.name < b.name){
// return -1;
//     }
//     if (a.name > b.name){
//       return 1;
//     }
// return 0;
//     });
//     return personajes2
// };

export function orderZA(characters){
  const sortRole= characters.sort((c,d) => {
    if (c.name < d.name){
return 1;
    }
    if (c.name > d.name){
      return -1;
    }
return 0;
    });
    return sortRole
  };

