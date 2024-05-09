/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== SHOW DROPDOWN MENU ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 
 // 1. Select each dropdown item
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
 
     // 2. Select each button click
     dropdownButton.addEventListener('click', () =>{
         // 7. Select the current show-dropdown class
         const showDropdown = document.querySelector('.show-dropdown')
         
         // 5. Call the toggleItem function
         toggleItem(item)
 
         // 8. Remove the show-dropdown class from other items
         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 
 // 3. Create a function to display the dropdown
 const toggleItem = (item) =>{
     // 3.1. Select each dropdown content
     const dropdownContainer = item.querySelector('.dropdown__container')
 
     // 6. If the same item contains the show-dropdown class, remove
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         // 4. Add the maximum height to the dropdown content and add the show-dropdown class
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 /*=============== DELETE DROPDOWN STYLES ===============*/
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 // Function to remove dropdown styles in mobile mode when browser resizes
 const removeStyle = () =>{
     // Validate if the media query reaches 1118px
     if(mediaQuery.matches){
         // Remove the dropdown container height style
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
 
         // Remove the show-dropdown class from dropdown item
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)

//  calculadora 

document.getElementById("areaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularAreas();
  });

  function calcularAreas() {
    var quadradoLado = parseFloat(document.getElementById("quadradoLado").value);
    var retanguloBase = parseFloat(document.getElementById("retanguloBase").value);
    var retanguloAltura = parseFloat(document.getElementById("retanguloAltura").value);
    var trapezioBaseMaior = parseFloat(document.getElementById("trapezioBaseMaior").value);
    var trapezioBaseMenor = parseFloat(document.getElementById("trapezioBaseMenor").value);
    var trapezioAltura = parseFloat(document.getElementById("trapezioAltura").value);
    var losangoDiagonalMaior = parseFloat(document.getElementById("losangoDiagonalMaior").value);
    var losangoDiagonalMenor = parseFloat(document.getElementById("losangoDiagonalMenor").value);
    var trianguloBase = parseFloat(document.getElementById("trianguloBase").value);
    var trianguloAltura = parseFloat(document.getElementById("trianguloAltura").value);

    var areaQuadrado = Math.pow(quadradoLado, 2);
    var areaRetangulo = retanguloBase * retanguloAltura;
    var areaTrapezio = ((trapezioBaseMaior + trapezioBaseMenor) * trapezioAltura) / 2;
    var areaLosango = (losangoDiagonalMaior * losangoDiagonalMenor) / 2;
    var areaTriangulo = (trianguloBase * trianguloAltura) / 2;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Área do Quadrado: " + areaQuadrado + "<br>";
    resultado.innerHTML += "Área do Retângulo: " + areaRetangulo + "<br>";
    resultado.innerHTML += "Área do Trapézio: " + areaTrapezio + "<br>";
    resultado.innerHTML += "Área do Losango: " + areaLosango + "<br>";
    resultado.innerHTML += "Área do Triângulo: " + areaTriangulo;
  }