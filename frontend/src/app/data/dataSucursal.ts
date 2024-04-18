interface sucursal {
    id: number;
    ubicacion: string;
    codigo: string;
}

const sucursales: sucursal[] = [
    { id: 1, ubicacion: "Sierra Mojada", codigo:"Sierra" },
    { id: 2, ubicacion: "Colonia del valle", codigo:"DelValle" },
];

console.log(sucursales[0]);
console.log(sucursales[0].ubicacion); 
console.log(sucursales[0].codigo);
