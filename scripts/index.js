
document.querySelector('#form-plazo').addEventListener('submit', (e) => handleSubmit(e));
const app = document.querySelector('#result-content');
document.querySelector('#hidden').style.display = 'none';

const inputName = document.getElementById('inputName');
const capital = document.getElementById('capital');
const reinvertir = document.getElementById('reinvertir');
const cantidadDias = document.getElementById('dias');

const ctx = document.getElementById('myChart').getContext('2d');
document.getElementById('myChart').style.display = 'none';
const configChart = {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [{
    type: 'bar',
    label: 'Capital Inicial',
    data: [0, 0, 0, 0],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
  }, {
    type: 'line',
    label: 'Capital Final',
    data: [0, 0, 0, 0],
    fill: false,
    borderColor: 'rgb(54, 162, 235)'
  }]
};
const myChart = new Chart(ctx, {
  type: 'scatter',
  data: configChart,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const handleSubmit = (e) => {
    e.preventDefault();
    try{
        let resultado = useInputFilter(inputName.value);
        if (resultado === 'Error') throw 'Error 400 - Input Name and LastName syntax error';
        if (typeof capital.value  !== "number" && !(capital.value >= 1000)) throw 'Error 400 - Input capital value out of range';
        if (typeof cantidadDias.value !== "number" && !(cantidadDias.value >= 30)) throw 'Error 400 - Input days value out of range';
        document.querySelector('#hidden').style.display = 'none';
        if (reinvertir.checked){
            let interes = NaN;
            let montoFinal = NaN;
            let arrayMontoFinal = [];
            let arrayInicial = [parseInt(capital.value)];
            let counter = 0;
            if (!(cantidadDias.value > 60)) interes = 40;
            else if (!(cantidadDias.value > 120)) interes = 45;
            else if (!(cantidadDias.value > 360))interes = 50;
            else interes = 55;

            for (let i = 0; i < 4; i++){
                montoFinal = (arrayInicial[counter] * (((cantidadDias.value / 4)/360) * (interes/100))) + arrayInicial[counter];
                arrayMontoFinal.push(montoFinal);
                arrayInicial.push(montoFinal);
                counter += 1;
            }
            app.innerHTML = `
              <h4>Sr/a ${resultado[0]} ${resultado[1]}</h4>
              <label><strong>Capital invertido:</strong> $${capital.value}</label>
              <label><strong>Cantidad de dias:</strong> ${cantidadDias.value}</label>
              <label><strong>interes:</strong> ${interes}</label>
                  <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Periodo</th>
                          <th scope="col">Monto Inicial</th>
                          <th scope="col">Monto Final</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>${arrayInicial[0].toFixed(2)}</td>
                          <td>${arrayMontoFinal[0].toFixed(2)}</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>${arrayInicial[1].toFixed(2)}</td>
                          <td>${arrayMontoFinal[1].toFixed(2)}</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>${arrayInicial[2].toFixed(2)}</td>
                          <td>${arrayMontoFinal[2].toFixed(2)}</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>${arrayInicial[3].toFixed(2)}</td>
                          <td>${arrayMontoFinal[3].toFixed(2)}</td>
                        </tr>
                      </tbody>
                  </table>
              `
            myChart.data.datasets[0].data = arrayInicial;
            myChart.data.datasets[1].data = arrayMontoFinal;
            myChart.update('active');
            document.getElementById('myChart').style.display = 'block';
            
        }else{
            let interes = NaN;
            let montoFinal = NaN;
            if (!(cantidadDias.value > 60)) interes = 40;
            else if (!(cantidadDias.value > 120)) interes = 45;
            else if (!(cantidadDias.value > 360))interes = 50;
            else interes = 55;
            
            montoFinal = (parseInt(capital.value) * ((cantidadDias.value/360) * (interes/100))) + parseInt(capital.value);
            document.getElementById('myChart').style.display = 'none';

            app.innerHTML = `
            <h4>Sr/a ${resultado[0]} ${resultado[1]}</h4>
            <label><strong>Capital invertido:</strong> $${capital.value}</label>
            <label><strong>Cantidad de dias:</strong> ${cantidadDias.value}</label>
            <label><strong>interes:</strong> ${interes}</label>
            <label><strong>Monto final a recibir:</strong>  <span class="badge bg-light text-dark">$${montoFinal.toFixed(2)}</span></label>
            `        
        }
    }catch(error){
        document.querySelector('#hidden').innerHTML = error;
        document.querySelector('#hidden').style.display = 'block';
    }
}