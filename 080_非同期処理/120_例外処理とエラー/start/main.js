// try {
//   console.log('start');
//   // throw new Error('error message');
//   console.log('end');
// } catch(e) {
//   console.error(e)
// } finally {
//   console.log('bye');
// }

async function fetchUsers() {
  const response = await fetch('users.json');
  if(response) {
    const json = await response.json();
    if(!json.length) {
      throw new Error('no data found'); //自分で例外処理を作る
    }
    return json;
  }
  const json = await response.json();
  return json;
}

class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoDataError' // name設定しないとそのままエラーが出る。
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for(const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  } catch(e) {
    if(e instanceof NoDataError) {
      console.log(e);
    } else {
      console.log('Oops, something went wrong');
    }
    console.error(e); //こちらは本当の処理に依存している。
  } finally {
    console.log('bye');
  }
  console.log('end');
}
init();
