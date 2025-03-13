const button = document.querySelector("button");

let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
  { name: "Diullyevely", number: "(41) 95235-3850" },
  { name: "Idalvan", number: "(41) 99522-5325" },
  { name: "Eudália", number: "(96) 92553-3190" },
];
function search() {
  for (let i = 0; i < contacts.length; i++) {
    if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
      p.innerHTML = `Contato Encontrado Name:${contacts[i].name} Tel: ${contacts[i].number};`
break
    }
    else{
        p.innerHTML = " Contato não encontrado, tente novamente"
    }
  }
}

button.addEventListener("click", search);
