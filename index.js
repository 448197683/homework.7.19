const form = document.querySelector("form");
const input = form.querySelector("input");
const button = form.querySelector("button");
console.log(form, input, button);

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    return alert("请输入名字")
  }
  if (input.value.length < 2) {
    return alert("两个字以上")
  }
  form.classList.add("hide");
  const h1 = document.querySelector("h1");
  h1.classList.remove("hide");
  h1.innerText = `Welcome ${input.value} 😊`
  localStorage.setItem("name", input.value)
});