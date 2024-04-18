export interface Estado {
    id: number;
    region: string;
    abreviatura: string;
}

export class Estados {
    static estados: Estado[] = [
        { id: 1,  region: "Aguascalientes",       abreviatura: "AGS" },
        { id: 2,  region: "Baja California",      abreviatura: "BC" },
        { id: 3,  region: "Baja California Sur",  abreviatura: "BCS" },
        { id: 4,  region: "Campeche",             abreviatura: "CAMP" },
        { id: 5,  region: "Chiapas",              abreviatura: "CHIS" },
        { id: 6,  region: "Chihuahua",            abreviatura: "CHIH" },
        { id: 7,  region: "Coahuila",             abreviatura: "COAH" },
        { id: 8,  region: "Colima",               abreviatura: "COL" },
        { id: 9,  region: "Ciudad de México",     abreviatura: "CDMX" },
        { id: 10, region: "Durango",              abreviatura: "DGO" },
        { id: 11, region: "Guanajuato",           abreviatura: "GTO" },
        { id: 12, region: "Guerrero",             abreviatura: "GRO" },
        { id: 13, region: "Hidalgo",              abreviatura: "HGO" },
        { id: 14, region: "Jalisco",              abreviatura: "JAL" },
        { id: 15, region: "México",               abreviatura: "MEX" },
        { id: 16, region: "Michoacán",            abreviatura: "MICH" },
        { id: 17, region: "Morelos",              abreviatura: "MOR" },
        { id: 18, region: "Nayarit",              abreviatura: "NAY" },
        { id: 19, region: "Nuevo León",           abreviatura: "NL" },
        { id: 20, region: "Oaxaca",               abreviatura: "OAX" },
        { id: 21, region: "Puebla",               abreviatura: "PUE" },
        { id: 22, region: "Querétaro",            abreviatura: "QRO" },
        { id: 23, region: "Quintana Roo",         abreviatura: "QROO" },
        { id: 24, region: "San Luis Potosí",      abreviatura: "SLP" },
        { id: 25, region: "Sinaloa",              abreviatura: "SIN" },
        { id: 26, region: "Sonora",               abreviatura: "SON" },
        { id: 27, region: "Tabasco",              abreviatura: "TAB" },
        { id: 28, region: "Tamaulipas",           abreviatura: "TAMPS" },
        { id: 29, region: "Tlaxcala",             abreviatura: "TLAX" },
        { id: 30, region: "Veracruz",             abreviatura: "VER" },
        { id: 31, region: "Yucatán",              abreviatura: "YUC" },
        { id: 32, region: "Zacatecas",            abreviatura: "ZAC" }
    ];
}
