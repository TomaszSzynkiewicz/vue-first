const usersList = [
  {
    "name": "John Doe",
    "email": "john@doe.org",
    "luckyNumber": 42
  },
  {
    "name": "Fran Underhood",
    "email": "frank@doe.gov",
    "luckyNumber": 42
  },
  {
    "name": "Robert Smith",
    "email": "smith@acme.com",
    "luckyNumber": 42
  },
  {
    "name": "Zoe Varnes",
    "email": "zoe@gnail.dot",
    "luckyNumber": 42
  },
  {
    "name": "Alex Gomez",
    "email": "gomez@gomez.org",
    "luckyNumber": 42
  },
  {
    "name": "John Doe",
    "email": "john2@doe.org",
    "luckyNumber": 42
  },
  {
    "name": "Fran Underhood",
    "email": "frank2@doe.gov",
    "luckyNumber": 42
  },
  {
    "name": "Robert Smith",
    "email": "smith2@acme.com",
    "luckyNumber": 42
  },
  {
    "name": "Zoe Varnes",
    "email": "zoe2@gnail.dot",
    "luckyNumber": 42
  },
  {
    "name": "Alex Gomez",
    "email": "gomez2@gomez.org",
    "luckyNumber": 42
  }
];

export default {
  getUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(usersList);
      }, 1000);
    });
  },
  signIn(userData) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ token: userData.email });
      }, 1000);
    });
  }
};
