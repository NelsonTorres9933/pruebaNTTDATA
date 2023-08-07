const request = require("supertest");
const fs = require("fs");
const endpoint = "https://petstore.swagger.io/v2/";
const userInfo = require("../fixtures/userInfoToCreate.json");
const petsNumber = require("./petsNumber");
const petsInfo = require("../fixtures/petsSold.json");

let petsSold = [];

describe("Data processing in APIs", function () {
  it("Create user", async function () {
    request(endpoint)
      .post("user/createWithArray")
      .send(userInfo)
      .set("Accept", "application/json")
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });

  it("Retrieve user info", async function () {
    request(endpoint)
      .get("user/" + userInfo[0].username)
      .expect(200)
      .then((res) => {
        let data = JSON.stringify(res.body);
        fs.writeFile("fixtures/userInfoCreated.json", data, function (err) {
          if (err) throw err;
        });
        console.log(res.body);
      });
  });

  it("Names of pets that have been sold", async function () {
    request(endpoint)
      .get("pet/findByStatus?status=sold")
      .expect(200)
      .then((res) => {
        res.body.forEach((element) => {
          let id = element.id;
          let name = element.name;
          petsSold.push({ id, name });
        });
        let data = JSON.stringify(petsSold);
        fs.writeFile("fixtures/petsSold.json", data, function (err) {
          if (err) throw err;
        });
      });
  });

  it("How many pets have the same name", async function () {
    const pets = new petsNumber();
    let numberOfPets = pets.sameName(petsInfo);
    let data = JSON.stringify(numberOfPets);
    fs.writeFile("fixtures/numberOfPets.json", data, function (err) {
      if (err) throw err;
    });
  });
});
