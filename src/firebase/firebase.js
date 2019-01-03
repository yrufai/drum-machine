import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAjR1I3yJfYrlKq278-og3kG8ilr5GqLdI",
    authDomain: "my-portfolio-19e06.firebaseapp.com",
    databaseURL: "https://my-portfolio-19e06.firebaseio.com",
    projectId: "my-portfolio-19e06",
    storageBucket: "my-portfolio-19e06.appspot.com",
    messagingSenderId: "468295562324"
};
firebase.initializeApp(config);

/*firebase.database().ref().set({
    name: "El-Rufai Yakubu Ahmed",
    age: 25,
    stressLevel: 5,
    job: {
        title: "software developer",
        company: "Google"
    },
    isSingle: false,
    location:{
        city: "Bawku",
        region: "Upper East",
        country: "Ghana"
    }
}).then(()=>{
    console.log("data is saved")
}).catch((e)=>{
    console.log("something went wrong!", e);
})
*/
//firebase.database().ref("location/region").set("Oti")

let update = firebase.database().ref();
/*update.update({
    stressLevel: 9,
    "job/company":"Amazon",
    "location/city": "Bolgatang"
});
*/

update.on("value",(snapshot)=>{
    console.log(snapshot.val());
})

setTimeout(() => {
    firebase.database().ref("age").set(56);
}, 3500);


firebase.database().ref("expenses").push({
   description: "Rent",
   note: "",
   amount: 5900,
   createAt: 8554886545
});


firebase.database().ref("expenses").push({
    description: "phone bill",
    note: "",
    amount: 59500,
    createAt: 5465986545
 });