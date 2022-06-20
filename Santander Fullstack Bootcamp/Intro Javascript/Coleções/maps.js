function getAdmins(map) {
  let admins = [];
  for (const [key, value] of map) {
    if(value = 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Cássio', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));