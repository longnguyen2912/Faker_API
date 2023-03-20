const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();


function createUser() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber()
    };
}


function createCompany() {
    return {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
}


app.get("/api/users/new", (req, res) => {
    const user = createUser();
    res.json(user);
});


app.get("/api/companies/new", (req, res) => {
    const company = createCompany();
    res.json(company);
});


app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});


const port = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



