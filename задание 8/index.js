let name = [
    { 
        Название: 'Самолёт', Тип: 'Су25'
    },
    { 
        Название: 'Танк', Тип: 'Т34' 
    },
    { 
        Название: 'Вертолёт', Тип: 'Ми24' 
    }
  ];
function filterObjValues(name, key, value) {
    const result = [];
    for (let i = 0; i < name.length; i++) {
      const obj = name[i];
      if (obj[key] === value) result.push(obj);
    }
    return result;
  }
const filter = filterObjValues(name, 'Название', 'Танк');
console.log(filter);