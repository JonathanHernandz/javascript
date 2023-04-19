

//El codigo se puede optimizar, solo que tuve problemas al querer ingresar con  minFem[0].tipoNomina 
//y tuve que recurrir a las condicionales
const minMasc = [
    {A:100, B:1000, C: 400, D:400},
    {A:400, B:600, C: 200, D:300},
    {A:900, B:1000, C: 200, D:500},
    {A:100, B:1000, C: 1000, D:900},
    {A:600, B:1000, C: 600, D:1000}
    ];

    const minFem = [
        {A:800, B:800, C: 200, D:500},
        {A:800, B:700, C: 900, D:1000},
        {A:800, B:100, C: 700, D:600},
        {A:600, B:600, C: 800, D:400},
        {A:200, B:700, C: 100, D:700}
        ];
    
    const maxMasc = [
        {A:4900, B:4700, C: 5000, D:4400},
        {A:4700, B:4400, C: 4700, D:4700},
        {A:4600, B:5000, C: 5000, D:4300},
        {A:4600, B:4400, C: 4200, D:4900},
        {A:4500, B:4900, C: 4600, D:4300}
    ]

    const maxFem = [
        {A:4000, B:4700, C: 4600, D:5000},
        {A:4200, B:4200, C: 4900, D:4900},
        {A:4100, B:4500, C: 4600, D:4700},
        {A:4200, B:4300, C: 4700, D:5000},
        {A:4500, B:4400, C: 4000, D:4300}
    ]
let montoMinimo, montoMaximo, lineaOp;
let genero = 'f', tipoNomina='A';




function calculoMotor(tipoNomina,fechaPrimerEmpleo, genero){


    const fecha = new Date(fechaPrimerEmpleo.split('/').reverse().join('-'));
    // obtener la fecha actual
    const fechaActual = new Date();
    // calcular la diferencia en meses
    const meses = (fechaActual.getFullYear() - fecha.getFullYear()) * 12 + (fechaActual.getMonth() - fecha.getMonth());
    console.log(meses);

    

    //minFem
    if(tipoNomina === 'f'){
        if(meses<=24){
            if(tipoNomina === 'A'){
                montoMinimo = minFem[0].A
            }
            if(tipoNomina === 'B'){
                montoMinimo = minFem[0].B
            }
            if(tipoNomina === 'C'){
                montoMinimo = minFem[0].C
            }
            if(tipoNomina === 'D'){
                montoMinimo = minFem[0].D
            }
        }
        if(meses === 25 ){
            if(tipoNomina === 'A'){
                montoMinimo = minFem[1].A
            }
            if(tipoNomina === 'B'){
                montoMinimo = minFem[1].B
            }
            if(tipoNomina === 'C'){
                montoMinimo = minFem[1].C
            }
            if(tipoNomina === 'D'){
                montoMinimo = minFem[1].D
            }
        }
        if(meses === 27 ){
            if(tipoNomina === 'A'){
                montoMinimo = minFem[1].A
            }
            if(tipoNomina === 'B'){
                montoMinimo = minFem[1].B
            }
            if(tipoNomina === 'C'){
                montoMinimo = minFem[1].C
            }
            if(tipoNomina === 'D'){
                montoMinimo = minFem[1].D
            }
        }
        if(meses >= 28 ){
            if(tipoNomina === 'A'){
                montoMinimo = minFem[2].A
            }
            if(tipoNomina === 'B'){
                montoMinimo = minFem[2].B
            }
            if(tipoNomina === 'C'){
                montoMinimo = minFem[2].C
            }
            if(tipoNomina === 'D'){
                montoMinimo = minFem[2].D
            }
        }
    }

    //montoMaximoFem
    if(tipoNomina === 'f'){
        if(meses<=24){
            if(tipoNomina === 'A'){
                montoMaximo = maxFem[0].A
            }
            if(tipoNomina === 'B'){
                montoMaximo = maxFem[0].B
            }
            if(tipoNomina === 'C'){
                montoMaximo = maxFem[0].C
            }
            if(tipoNomina === 'D'){
                montoMaximo = maxFem[0].D
            }
        }
        if(meses === 25 ){
            if(tipoNomina === 'A'){
                montoMaximo = maxFem[1].A
            }
            if(tipoNomina === 'B'){
                montoMaximo = maxFem[1].B
            }
            if(tipoNomina === 'C'){
                montoMaximo = maxFem[1].C
            }
            if(tipoNomina === 'D'){
                montoMaximo = maxFem[1].D
            }
        }
        if(meses === 26 ){
            if(tipoNomina === 'A'){
                montoMaximo = maxFem[1].A
            }
            if(tipoNomina === 'B'){
                montoMaximo = maxFem[1].B
            }
            if(tipoNomina === 'C'){
                montoMaximo = maxFem[1].C
            }
            if(tipoNomina === 'D'){
                montoMaximo = maxFem[1].D
            }
        }
        if(meses === 27 ){
            if(tipoNomina === 'A'){
                montoMaximo = maxFem[2].A
            }
            if(tipoNomina === 'B'){
                montoMaximo = maxFem[2].B
            }
            if(tipoNomina === 'C'){
                montoMaximo = maxFem[2].C
            }
            if(tipoNomina === 'D'){
                montoMaximo = maxFem[2].D
            }
        }
        if(meses >= 28 ){
            if(tipoNomina === 'A'){
                montoMaximo = maxFem[3].A
            }
            if(tipoNomina === 'B'){
                montoMaximo = maxFem[3].B
            }
            if(tipoNomina === 'C'){
                montoMaximo = maxFem[3].C
            }
            if(tipoNomina === 'D'){
                montoMaximo = maxFem[3].D
            }
        }
    }
}
    
calculoMotor('A','01/01/2023', genero);
