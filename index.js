import chalk from "chalk"
import { format } from "date-fns";
console.log("Somos (alumnos) y este es el trabajo de Node.js para PDI (La mejor materia)")

console.log(chalk.green("Hola, soy Medina Hugo"))
console.log(chalk.green("Hola, soy Muñoz Nicolas"))
console.log(chalk.green("Hola, soy Ore Dylan"))
console.log(chalk.green("Hola, soy Vasquez Felipe"))

console.log(chalk.blue("Fecha actual: " + format(new Date(), "dd/MM/yyyy")))

let fecha = new Date("2025-06-13");
let fechaActual = new Date();

if (fechaActual > fecha){
    console.log(chalk.red(format(fecha, "dd/MM/yyyy")))
}else{
    console.log(chalk.yellow(format(fecha, "dd/MM/yyyy")))
}