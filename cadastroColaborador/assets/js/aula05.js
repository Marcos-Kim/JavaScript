let formFuncionario = document.getElementById('form-funcionario');
let relatorio = document.getElementById('relatorio');

formFuncionario.addEventListener('subimit', (event) => {
    event.preventDefault();

    //variaveis para o uso de calculos:
    let inss = 0;
    let irpf = 0;
    let vt = 0;
    let liquido = 0;

    //Variaveis das DIVS HTML:
    let nomeFuncionario = document.getElementById('nome-func');
    let cargoFuncionario = document.getElementById('cargo-func');
    let dpFuncionario = document.getElementById('dp-func');
    let salarioFuncionario = document.getElementById('salario-base');
    let proventoFuncionario = document.getElementById('provento-salario');
    let liquidoFuncionario = document.getElementById('salario-liquido');
    let inssFunc = document.getElementById('desc-inss');
    let irpffunc = document.getElementById('desc-irpf');
    let vtFunc = document.getElementById('desc-vt');

if(formFuncionario.salarioFuncionario.value <= 1412)
    inss = formFuncionario.salarioFuncionario.value * 0.75; 

else if (formFuncionario.salarioFuncionario.value >= 1412 && formFuncionario.salarioFuncionario.value <= 2824)
inss = formFuncionario.salarioFuncionario.value * 0.09

else if (formFuncionario.salarioFuncionario.value > 2980 && formFuncionario.salarioFuncionario.value <=3200)
inss = formFuncionario.salarioFuncionario.value * 0.12

else if (formFuncionario.salarioFuncionario.value > 3640 && formFuncionario.salarioFuncionario.value < 7080)
inss = formFuncionario.salarioFuncionario.value * 0.14


///////////////////////////////////

if(formFuncionario.salarioFuncionario.value > 1900 && formFuncionario.salarioFuncionario.value <= 2826)
irpf = (formFuncionario.salarioFuncionario.value - inss) * 0.075 

else if (formFuncionario.salarioFuncionario.value >= 2826 && formFuncionario.salarioFuncionario.value <= 3751)
irpf = (formFuncionario.salarioFuncionario.value * inss)* 0.15;

else if (formFuncionario.salarioFuncionario.value > 3751 && formFuncionario.salarioFuncionario.value <= 4664)
irpf = (formFuncionario.salarioFuncionario.value * inss)* 0.225;

else if (formFuncionario.salarioFuncionario.value > 4664)
irpf = (formFuncionario.salarioFuncionario.value * inss)* 0.275;
})
