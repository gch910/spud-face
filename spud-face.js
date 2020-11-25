window.addEventListener("DOMContentLoaded", (event) => {

  // ** Phase 1B: Update license with event delegation and event.target **
  //form and driver's license
  const driversForm = document.getElementById('drivers-license-form');
  const licenseClass = document.querySelectorAll(`.license__info`);
  const driversClass = document.querySelectorAll('.form__input')
  const submitButton = document.querySelector(`.form__submit`);

  //Go over Event Target
  driversForm.addEventListener('input', event => {
    licenseClass.forEach(field => {

      if (field.id.includes(event.target.id)) {
        field.innerHTML = event.target.value;
        console.log(event.target)

      }
    })
  })

  //Why is true required?
//   driversClass.forEach(input => {
//   input.addEventListener('focus', event => {
//    event.target.style.backgroundColor = "lightgreen";
//   })

//   input.addEventListener('blur', event => {
//     event.target.style.backgroundColor = 'unset';
//   })
// })

driversForm.addEventListener('focusin', event => {
   event.target.style.backgroundColor = "lightgreen";
  })

  driversForm.addEventListener('focusout', event => {
    event.target.style.backgroundColor = 'unset';
  })




  // ** Phase 2: Add focus and blur events to form inputs **


  // ** Phase 3: Check that license numbers match **


  // ** Phase 4: Update submit button click count **


});
