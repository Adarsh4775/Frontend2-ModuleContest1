const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession === "developer");
    console.log("Developers:", developers);
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = prompt("Enter age:");
    const profession = prompt("Enter profession:");
    
    const newData = { name, age: parseInt(age), profession };
    data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filteredData = data.filter(person => person.profession !== "admin");
    console.log("Removed Admins:", filteredData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "bob", age: 30, profession: "designer" },
      { name: "alice", age: 25, profession: "developer" },
    ];
  
    const result = data.concat(dummyArray);
    console.log("Concatenated Array:", result);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / data.length;
    console.log("Average Age:", average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
    console.log("Is there anyone above 25?", isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map(person => person.profession))];
    console.log("Unique Professions:", professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedData = data.slice().sort((a, b) => a.age - b.age);
    console.log("Sorted Data:", sortedData);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatedData = data.map(person => {
      if (person.name === "john") {
        return { ...person, profession: "manager" };
      }
      return person;
    });
    console.log("Updated Data:", updatedData);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
      count[person.profession] = (count[person.profession] || 0) + 1;
      return count;
    }, {});
    console.log("Profession Count:", professionCount);
  }
  