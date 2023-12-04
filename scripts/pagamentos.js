
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const parcelasSelect = document.getElementById("parcelas");
const cnpjInput = document.getElementById("cnpj");

const months = ['01', '02', '03', '04', 
'05', '06', '07', '08', '09', '10',
'11', '12'];


(function populateMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "01";
})();


(function populateYears(){
    let year = new Date().getFullYear() + 50;
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
        yearSelect.value = ( new Date().getFullYear() );
    }
}) ();



(function populateParcelas(){
    for(let i = 0; i < 12; i++){
        const option = document.createElement('option');
        option.textContent = `${months[i]}x` ;
        parcelasSelect.appendChild(option);
    }
    parcelasSelect.value = "01x";
})();

$("#cnpj").keydown(function(){
    try {
        $("#cnpj").unmask();
    } catch (e) {}

    var tamanho = $("#cnpj").val().length;

    if(tamanho < 11){
        $("#cnpj").mask("999.999.999-99");
    } else {
        $("#cnpj").mask("99.999.999/9999-99");
    }

    // ajustando foco
    var elem = this;
    setTimeout(function(){
        // mudo a posição do seletor
        elem.selectionStart = elem.selectionEnd = 10000;
    }, 0);
    // reaplico o valor para mudar o foco
    var currentValue = $(this).val();
    $(this).val('');
    $(this).val(currentValue);
});

$("#celular").mask("(00) 0000-0000");
$("#ncartao").mask("0000 0000 0000 0000");
$("#cvv").mask("000");


