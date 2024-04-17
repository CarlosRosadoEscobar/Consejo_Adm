interface cargo {
    id: number;
    cargo: string;
    area: string;
}

const cargos: cargo[] = [
    { id:1, cargo:"gerente TI", area:"Ti"},
    { id:2, cargo:"Analista Programador", area:"Ti" },
    { id:3, cargo:"Desarrollador web", area:"Ti" },
    { id:4, cargo:"Gerente Comercial", area:"Comercial"},
    { id:5, cargo:"Analista Comercial", area:"Comercial"},
    { id:6, cargo:"Gerente Operativo", area:"Operativo"},
    { id:7, cargo:"colaborador", area:"Operativo" },
    { id:8, cargo:"Gerente reclutamiento", area:"Reclutamiento"},
    { id:9, cargo:"Colaborador reclutameinto", area:"Reclutamiento" }
];


// Objeto para almacenar los cargos agrupados por área
export const cargosPorArea = cargos.reduce<{ [key: string]: cargo[] }>((acc, cargo) => {
    if (!acc[cargo.area]) {
        acc[cargo.area] = [];
    }
    acc[cargo.area].push(cargo);
    return acc;
}, {});
