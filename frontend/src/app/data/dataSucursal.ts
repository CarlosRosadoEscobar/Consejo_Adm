interface sucursal {
    id: number;
    ubicacion: string;
    codigo: string;
}

const sucursales: sucursal[] = [
    { id: 1, ubicacion: "cierra mojada", codigo:"cierra" },
    { id: 2, ubicacion: "Colonia del valle", codigo:"delvalle" },
];

console.log(sucursales[0]);
console.log(sucursales[0].ubicacion); 
console.log(sucursales[0].codigo);
