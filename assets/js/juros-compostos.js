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

// calculadora

// Acessando os elementos do DOM
const inputDinheiro = document.getElementById('dinheiro');
const inputFee = document.getElementById('fee');
const inputTime = document.getElementById('time');
const resultSpan = document.getElementById('total');
const calculateButton = document.getElementById('calculate');

// Event listener para formatar o capital enquanto o usuário digita
inputDinheiro.addEventListener('input', function() {
  const unformattedValue = this.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  const formattedValue = formatarCapital(unformattedValue);
  this.value = formattedValue;
});

// Função para formatar o capital
function formatarCapital(valor) {
  const length = valor.length;
  let formattedValue = '';
  for (let i = 0; i < length; i++) {
    formattedValue += valor[i];
    if ((length - i - 1) % 3 === 0 && i !== length - 1) {
      formattedValue += '.';
    }
  }
  return formattedValue;
}

// Função para formatar um valor como moeda
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para calcular os juros compostos
function calcularJurosCompostos() {
  // Obtendo os valores dos campos de entrada
  const unformattedCapital = inputDinheiro.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  const capital = parseFloat(unformattedCapital);
  const taxaJuros = parseFloat(inputFee.value) / 100;
  const tempoRendimento = parseInt(inputTime.value);

  // Calculando o resultado
  const montante = capital * Math.pow(1 + taxaJuros, tempoRendimento);
  const resultadoFormatado = formatarMoeda(montante);

  // Exibindo o resultado na página
  resultSpan.textContent = resultadoFormatado;
}

// Adicionando o evento de clique ao botão de calcular
calculateButton.addEventListener('click', calcularJurosCompostos);