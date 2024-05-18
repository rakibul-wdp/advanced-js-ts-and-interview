const user = {
  name: "abul",
  contact: {
    phone: "+8801580",
    email: "abul@gmailcom",
  },
  pet: {
    name: "voldemo",
    info: {
      color: "black",
      weight: "0.3 kg",
    },
  },
  familyMembers: [
    { name: "x", age: 55 },
    { name: "y", age: 35 },
  ],
};

const email = user.contact.email;
console.log(email);

const petColor = user.pet.info.color;
console.log(petColor);

const memberOfFamily = user.familyMembers[1].name;
console.log(memberOfFamily);
