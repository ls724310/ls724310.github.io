const handleSubmit = event => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => console.log("Form successfully submitted"))
      .catch(error => alert(error));

    justWannaSayThankYou();
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);

  const emailInput = document.getElementById('email');
  const emailPlaceholder = document.getElementById('email-placeholder');
  
  function ficus() {
    emailInput.focus();
  }

  function scrunch() {
    emailPlaceholder.classList.add('scrunchie');
  }

  function descrunch() {
    if (!emailInput.value) {
        emailPlaceholder.classList.remove('scrunchie');
    } else {}
  }

  window.addEventListener('load', function() {
    if (emailInput.value) {
        emailPlaceholder.classList.add('scrunchie');
    } else {}
  });

  function justWannaSayThankYou() {
    var signUp = document.getElementById('sign-up');
    var signUpH2One = signUp.getElementsByTagName('h2')[0];
    var signUpPOne = signUp.getElementsByTagName('p')[0];
    var signUpH2Two = signUp.getElementsByTagName('h2')[1];
    var signUpPTwo = signUp.getElementsByTagName('p')[1];
    var signUpForm = signUp.getElementsByTagName('form')[0];

    signUpH2One.classList.add('hide');
    signUpH2Two.classList.remove('hide');
    signUpPOne.classList.add('hide');
    signUpPTwo.classList.remove('hide');
    signUpForm.classList.add('hide');
  }
