export interface Cargo {
    id: number;
    cargo: string;
    area: string;
}

export class CargoService {
    private cargos: Cargo[] = [
        { id:1, cargo:"gerente TI", area:"TI"},
        { id:2, cargo:"Analista Programador", area:"TI" },
        { id:3, cargo:"Desarrollador web", area:"TI" },
        { id:4, cargo:"Gerente Comercial", area:"Comercial"},
        { id:5, cargo:"Analista Comercial", area:"Comercial"},
        { id:6, cargo:"Gerente Operativo", area:"Operativo"},
        { id:7, cargo:"colaborador", area:"Operativo" },
        { id:8, cargo:"Gerente reclutamiento", area:"Reclutamiento"},
        { id:9, cargo:"Colaborador reclutamiento", area:"Reclutamiento" }
    ];

    public getCargosPorArea(): { [key: string]: Cargo[] } {
        return this.cargos.reduce<{ [key: string]: Cargo[] }>((acc, cargo) => {
            if (!acc[cargo.area]) {
                acc[cargo.area] = [];
            }
            acc[cargo.area].push(cargo);
            return acc;
        }, {});
    }
}
