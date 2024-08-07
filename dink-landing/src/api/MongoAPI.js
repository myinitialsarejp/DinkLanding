import * as Realm from "realm-web";
import axios from 'axios'

/* function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function GetID(firstName, lastName, email) {
    // Concatenate the inputs
    const combinedString = `${firstName}${lastName}${email}`;
    // Get the hash value
    return Math.abs(hashString(combinedString));
} */

export const GetToken = async () => {
  const app = new Realm.App({ id: "data-akvwqba" });
  async function loginEmailPassword(email, password) {
    // Create an email/password credential
    const credentials = Realm.Credentials.emailPassword(email, password);
    // Authenticate the user
    const user = await app.logIn(credentials);
    // 'App.currentUser' updates to match the logged in user
    console.assert(user.id === app.currentUser.id);
    return user;
  }
  const user = await loginEmailPassword(
    "jp.pelletier1994@gmail.com",
    "mongoPw2024"
  );
  return user.accessToken;
};


export const PostBetaUser = async (firstName, lastName, email) => {
    const token = await GetToken();
    var data = JSON.stringify({
        "collection": "BetaSignups",
        "database": "DinkLanding",
        "dataSource": "profileInfo",
        "document": {
            'firstName': firstName,
            "lastName": lastName,
            "email": email
        }
    });
    var config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-akvwqba/endpoint/data/v1/action/insertOne',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        data: data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        return true;
    })
    .catch(function (error) {
        console.log(error);
        return false;
    });
}



