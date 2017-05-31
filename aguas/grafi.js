$(document).ready(function() {
  //$("p").hide();
  var ctx = document.getElementById('myChart').getContext('2d');
  ctx.canvas.width = 500;
  ctx.canvas.height = 200;

  var fechas = [];
  var indices = [];
  var nombres = [];


  var arrayOfObjects = [{
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa27"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 1",
    "nombre": "MONTERAN",
    "lat": "9,92505600",
    "long": "-84,00426300",
    "fecha": "10\/12\/2015 00:00",
    "color": "Anaranjado",
    "I-Hol": 11,
    "% O2": "28,7",
    "DBO": 4,
    "NH4": "0,41",
    "pts PSO": 5,
    "pts DBO": 2,
    "pts NH4": 1,
    "I_Hol2": 8,
    "col2": "AMARILLO",
    "CF": 50000,
    "DQO": 45,
    "EC": 17000,
    "PO4": "0,27",
    "GYA": "5",
    "pH": "6,88",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,1",
    "T": "26,3",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa28"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 2",
    "nombre": "Q-Pio",
    "lat": "9,91627200",
    "long": "-84,01637300",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "54,7",
    "DBO": 2,
    "NH4": "0,1",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 30000,
    "DQO": 40,
    "EC": 24000,
    "PO4": "0,55",
    "GYA": "10,8",
    "pH": "7,03",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,04",
    "T": "26,7",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa29"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 3",
    "nombre": "Parq Pinares",
    "lat": "9,91556700",
    "long": "-84,02009500",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "55,5",
    "DBO": 2,
    "NH4": "0,13",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 13000,
    "DQO": 43,
    "EC": 13000,
    "PO4": "0,25",
    "GYA": "5",
    "pH": "7",
    "SD": "ND",
    "Ssed": "0,05",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,05",
    "T": "26,5",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa2a"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 4",
    "nombre": "Tacaco",
    "lat": "9,91719200",
    "long": "-84,02202200",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "56,4",
    "DBO": 3,
    "NH4": "0,05",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 50000,
    "DQO": 44,
    "EC": 24000,
    "PO4": "0,36",
    "GYA": "5",
    "pH": "6,68",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,1",
    "T": "26,1",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa2b"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 5",
    "nombre": "Hortifruti",
    "lat": "9,91589900",
    "long": "-84,02772700",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "50,1",
    "DBO": 2,
    "NH4": "0,07",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 24000,
    "DQO": 38,
    "EC": 8000,
    "PO4": "0,23",
    "GYA": "5",
    "pH": "7",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,1",
    "T": "26",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa2c"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 6",
    "nombre": "Montesacro",
    "lat": "9,92142200",
    "long": "-84,03678100",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "51,4",
    "DBO": 3,
    "NH4": "0,2",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 160000,
    "DQO": 14,
    "EC": 90000,
    "PO4": "0,28",
    "GYA": "6,5",
    "pH": "7,23",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,1",
    "T": "26,6",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa2d"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 7",
    "nombre": "Mallorca",
    "lat": "9,91733600",
    "long": "-84,03414900",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "48,8",
    "DBO": 3,
    "NH4": "0,17",
    "pts PSO": 4,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 6,
    "col2": "VERDE",
    "CF": 22000,
    "DQO": 41,
    "EC": 14000,
    "PO4": "0,34",
    "GYA": "5",
    "pH": "6,6",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,07",
    "T": "26,5",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa2e"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 8",
    "nombre": "Lito Monge",
    "lat": "9,91588000",
    "long": "-84,03990700",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "55,7",
    "DBO": 2,
    "NH4": "0,03",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 160000,
    "DQO": 40,
    "EC": 160000,
    "PO4": "0,31",
    "GYA": "2,5",
    "pH": "7,05",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,05",
    "T": "26,7",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa2f"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 9",
    "nombre": "Cascada Azul",
    "lat": "9,91381900",
    "long": "-84,05255300",
    "fecha": "10\/12\/2015 00:00",
    "color": "Anaranjado",
    "I-Hol": 11,
    "% O2": "16,2",
    "DBO": 13,
    "NH4": "0,81",
    "pts PSO": 5,
    "pts DBO": 4,
    "pts NH4": 2,
    "I_Hol2": 11,
    "col2": "ROJO",
    "CF": 160000,
    "DQO": 61,
    "EC": 160000,
    "PO4": "1,42",
    "GYA": "3,8",
    "pH": "6,51",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 8,
    "ST": "ND",
    "SAAM": "0,69",
    "T": "26,3",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa30"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 10",
    "nombre": "Ranchito",
    "lat": "9,91386700",
    "long": "-84,05662000",
    "fecha": "10\/12\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "58,6",
    "DBO": 2,
    "NH4": "0,14",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 160000,
    "DQO": 40,
    "EC": 160000,
    "PO4": "0,52",
    "GYA": "5",
    "pH": "7,23",
    "SD": "ND",
    "Ssed": "0,5",
    "SST": 15,
    "ST": "ND",
    "SAAM": "0,1",
    "T": "26,6",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa45"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 1",
    "nombre": "MONTERAN",
    "lat": "9,92505600",
    "long": "-84,00426300",
    "fecha": "1\/05\/2015 00:00",
    "color": "Rojo",
    "I-Hol": 14,
    "% O2": "16,1",
    "DBO": 47,
    "NH4": "5,2",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 5,
    "I_Hol2": 15,
    "col2": "ROJO",
    "CF": 2100,
    "DQO": 84,
    "EC": 1200,
    "PO4": "ND",
    "GYA": "11",
    "pH": "6,67",
    "SD": "207",
    "Ssed": "1,8",
    "SST": 63,
    "ST": "270",
    "SAAM": "2",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa46"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 2",
    "nombre": "Q-Pio",
    "lat": "9,91627200",
    "long": "-84,01637300",
    "fecha": "1\/05\/2015 00:00",
    "color": "Amarillo",
    "I-Hol": 8,
    "% O2": "21,3",
    "DBO": 4,
    "NH4": "0,07",
    "pts PSO": 5,
    "pts DBO": 2,
    "pts NH4": 1,
    "I_Hol2": 8,
    "col2": "AMARILLO",
    "CF": 1,
    "DQO": 10,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,8",
    "SD": "176",
    "Ssed": "0,2",
    "SST": 60,
    "ST": "236",
    "SAAM": "0,19",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa47"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 3",
    "nombre": "Parq Pinares",
    "lat": "9,91556700",
    "long": "-84,02009500",
    "fecha": "1\/05\/2015 00:00",
    "color": "Anaranjado",
    "I-Hol": 11,
    "% O2": "12,5",
    "DBO": 12,
    "NH4": "0,54",
    "pts PSO": 5,
    "pts DBO": 4,
    "pts NH4": 2,
    "I_Hol2": 11,
    "col2": "ROJO",
    "CF": 1,
    "DQO": 21,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,75",
    "SD": "168",
    "Ssed": "0,2",
    "SST": 64,
    "ST": "232",
    "SAAM": "0,28",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa48"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 4",
    "nombre": "Tacaco",
    "lat": "9,91719200",
    "long": "-84,02202200",
    "fecha": "1\/05\/2015 00:00",
    "color": "Amarillo",
    "I-Hol": 8,
    "% O2": "28,9",
    "DBO": 6,
    "NH4": "0,13",
    "pts PSO": 5,
    "pts DBO": 2,
    "pts NH4": 1,
    "I_Hol2": 8,
    "col2": "AMARILLO",
    "CF": 1,
    "DQO": 30,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,77",
    "SD": "206",
    "Ssed": "0,2",
    "SST": 22,
    "ST": "228",
    "SAAM": "0,22",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa49"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 5",
    "nombre": "Hortifruti",
    "lat": "9,91589900",
    "long": "-84,02772700",
    "fecha": "1\/05\/2015 00:00",
    "color": "Anaranjado",
    "I-Hol": 11,
    "% O2": "14,3",
    "DBO": 18,
    "NH4": "0,85",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 2,
    "I_Hol2": 12,
    "col2": "ROJO",
    "CF": 20,
    "DQO": 35,
    "EC": 1,
    "PO4": "ND",
    "GYA": "3",
    "pH": "6,67",
    "SD": "188",
    "Ssed": "0,4",
    "SST": 32,
    "ST": "220",
    "SAAM": "0,38",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa4a"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 6",
    "nombre": "Montesacro",
    "lat": "9,92142200",
    "long": "-84,03678100",
    "fecha": "1\/05\/2015 00:00",
    "color": "Amarillo",
    "I-Hol": 9,
    "% O2": "15,2",
    "DBO": 7,
    "NH4": "0,15",
    "pts PSO": 5,
    "pts DBO": 3,
    "pts NH4": 1,
    "I_Hol2": 9,
    "col2": "AMARILLO",
    "CF": 1,
    "DQO": 36,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,81",
    "SD": "136",
    "Ssed": "0,2",
    "SST": 20,
    "ST": "156",
    "SAAM": "0,23",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa4b"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 7",
    "nombre": "Mallorca",
    "lat": "9,91733600",
    "long": "-84,03414900",
    "fecha": "1\/05\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "11,3",
    "DBO": 18,
    "NH4": "0,64",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 2,
    "I_Hol2": 12,
    "col2": "ROJO",
    "CF": 40,
    "DQO": 33,
    "EC": 1,
    "PO4": "ND",
    "GYA": "4",
    "pH": "6,97",
    "SD": "144",
    "Ssed": "0,2",
    "SST": 48,
    "ST": "192",
    "SAAM": "0,24",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa4c"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 8",
    "nombre": "Lito Monge",
    "lat": "9,91588000",
    "long": "-84,03990700",
    "fecha": "1\/05\/2015 00:00",
    "color": "Anaranjado",
    "I-Hol": 12,
    "% O2": "16,9",
    "DBO": 13,
    "NH4": "1,8",
    "pts PSO": 5,
    "pts DBO": 4,
    "pts NH4": 3,
    "I_Hol2": 12,
    "col2": "ROJO",
    "CF": 410,
    "DQO": 20,
    "EC": 370,
    "PO4": "ND",
    "GYA": "4",
    "pH": "7,42",
    "SD": "192",
    "Ssed": "0,2",
    "SST": 32,
    "ST": "224",
    "SAAM": "0,95",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa4d"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 9",
    "nombre": "Cascada Azul",
    "lat": "9,91381900",
    "long": "-84,05255300",
    "fecha": "1\/05\/2015 00:00",
    "color": "Rojo",
    "I-Hol": 15,
    "% O2": "11,4",
    "DBO": 21,
    "NH4": "9,8",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 5,
    "I_Hol2": 15,
    "col2": "ROJO",
    "CF": 1000,
    "DQO": 55,
    "EC": 980,
    "PO4": "ND",
    "GYA": "4",
    "pH": "7,02",
    "SD": "204",
    "Ssed": "0,2",
    "SST": 28,
    "ST": "232",
    "SAAM": "1,8",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa4e"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 10",
    "nombre": "Ranchito",
    "lat": "9,91386700",
    "long": "-84,05662000",
    "fecha": "1\/05\/2015 00:00",
    "color": "Amarillo",
    "I-Hol": 9,
    "% O2": "15,9",
    "DBO": 8,
    "NH4": "0,27",
    "pts PSO": 5,
    "pts DBO": 3,
    "pts NH4": 1,
    "I_Hol2": 9,
    "col2": "AMARILLO",
    "CF": 3,
    "DQO": 17,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,93",
    "SD": "148",
    "Ssed": "0,3",
    "SST": 44,
    "ST": "192",
    "SAAM": "0,29",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa4f"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 1",
    "nombre": "MONTERAN",
    "lat": "9,92505600",
    "long": "-84,00426300",
    "fecha": "1\/03\/2015 00:00",
    "color": "Rojo",
    "I-Hol": 15,
    "% O2": "20,3",
    "DBO": 44,
    "NH4": "6,2",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 5,
    "I_Hol2": 15,
    "col2": "ROJO",
    "CF": 2400,
    "DQO": 105,
    "EC": 210,
    "PO4": "ND",
    "GYA": "9",
    "pH": "7,17",
    "SD": "268",
    "Ssed": "1,8",
    "SST": 36,
    "ST": "304",
    "SAAM": "1,7",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa50"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 2",
    "nombre": "Q-Pio",
    "lat": "9,91627200",
    "long": "-84,01637300",
    "fecha": "1\/03\/2015 00:00",
    "color": "Verde",
    "I-Hol": 6,
    "% O2": "32",
    "DBO": 3,
    "NH4": "0,18",
    "pts PSO": 4,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 6,
    "col2": "VERDE",
    "CF": 1600,
    "DQO": 13,
    "EC": 320,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,16",
    "SD": "212",
    "Ssed": "0,2",
    "SST": 12,
    "ST": "224",
    "SAAM": "0,08",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa51"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 3",
    "nombre": "Parq Pinares",
    "lat": "9,91556700",
    "long": "-84,02009500",
    "fecha": "1\/03\/2015 00:00",
    "color": "Amarillo",
    "I-Hol": 7,
    "% O2": "41,6",
    "DBO": 4,
    "NH4": "0,05",
    "pts PSO": 4,
    "pts DBO": 2,
    "pts NH4": 1,
    "I_Hol2": 7,
    "col2": "AMARILLO",
    "CF": 1,
    "DQO": 36,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,99",
    "SD": "176",
    "Ssed": "0,2",
    "SST": 16,
    "ST": "192",
    "SAAM": "0,05",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa52"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 4",
    "nombre": "Tacaco",
    "lat": "9,91719200",
    "long": "-84,02202200",
    "fecha": "1\/03\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "54",
    "DBO": 3,
    "NH4": "0,05",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 1,
    "DQO": 13,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,95",
    "SD": "176",
    "Ssed": "0,2",
    "SST": 6,
    "ST": "176",
    "SAAM": "0,05",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa53"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 5",
    "nombre": "Hortifruti",
    "lat": "9,91589900",
    "long": "-84,02772700",
    "fecha": "1\/03\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "52,5",
    "DBO": 3,
    "NH4": "0,03",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 85,
    "DQO": 5,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,94",
    "SD": "196",
    "Ssed": "0,2",
    "SST": 16,
    "ST": "212",
    "SAAM": "0,05",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa54"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 6",
    "nombre": "Montesacro",
    "lat": "9,92142200",
    "long": "-84,03678100",
    "fecha": "1\/03\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "55,9",
    "DBO": 3,
    "NH4": "0,26",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 62,
    "DQO": 13,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,94",
    "SD": "184",
    "Ssed": "0,2",
    "SST": 6,
    "ST": "184",
    "SAAM": "0,79",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa55"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 7",
    "nombre": "Mallorca",
    "lat": "9,91733600",
    "long": "-84,03414900",
    "fecha": "1\/03\/2015 00:00",
    "color": "Verde",
    "I-Hol": 6,
    "% O2": "52,3",
    "DBO": 4,
    "NH4": "0,03",
    "pts PSO": 3,
    "pts DBO": 2,
    "pts NH4": 1,
    "I_Hol2": 6,
    "col2": "VERDE",
    "CF": 86,
    "DQO": 24,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "6,92",
    "SD": "186",
    "Ssed": "0,2",
    "SST": 14,
    "ST": "200",
    "SAAM": "0,03",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa56"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 8",
    "nombre": "Lito Monge",
    "lat": "9,91588000",
    "long": "-84,03990700",
    "fecha": "1\/03\/2015 00:00",
    "color": "Anaranjado",
    "I-Hol": 10,
    "% O2": "26,1",
    "DBO": 11,
    "NH4": "1,1",
    "pts PSO": 5,
    "pts DBO": 4,
    "pts NH4": 3,
    "I_Hol2": 12,
    "col2": "ROJO",
    "CF": 310,
    "DQO": 46,
    "EC": 1,
    "PO4": "ND",
    "GYA": "3",
    "pH": "7",
    "SD": "162",
    "Ssed": "0,2",
    "SST": 26,
    "ST": "188",
    "SAAM": "0,51",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa57"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 9",
    "nombre": "Cascada Azul",
    "lat": "9,91381900",
    "long": "-84,05255300",
    "fecha": "1\/03\/2015 00:00",
    "color": "Rojo",
    "I-Hol": 15,
    "% O2": "11",
    "DBO": 23,
    "NH4": "7,5",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 5,
    "I_Hol2": 15,
    "col2": "ROJO",
    "CF": 2400,
    "DQO": 66,
    "EC": 200,
    "PO4": "ND",
    "GYA": "11",
    "pH": "6,94",
    "SD": "204",
    "Ssed": "0,2",
    "SST": 30,
    "ST": "236",
    "SAAM": "3,4",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa58"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 10",
    "nombre": "Ranchito",
    "lat": "9,91386700",
    "long": "-84,05662000",
    "fecha": "1\/03\/2015 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "54,9",
    "DBO": 3,
    "NH4": "0,3",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 94,
    "DQO": 13,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,22",
    "SD": "172",
    "Ssed": "0,2",
    "SST": 16,
    "ST": "188",
    "SAAM": "0,11",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa59"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 1",
    "nombre": "MONTERAN",
    "lat": "9,92505600",
    "long": "-84,00426300",
    "fecha": "1\/12\/2014 00:00",
    "color": "Anaranjado",
    "I-Hol": 11,
    "% O2": "21",
    "DBO": 18,
    "NH4": "0,1",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 1,
    "I_Hol2": 11,
    "col2": "ROJO",
    "CF": 1,
    "DQO": 40,
    "EC": 1,
    "PO4": "ND",
    "GYA": "3",
    "pH": "7,4",
    "SD": "178",
    "Ssed": "0,2",
    "SST": 66,
    "ST": "244",
    "SAAM": "0,62",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa5a"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 2",
    "nombre": "Q-Pio",
    "lat": "9,91627200",
    "long": "-84,01637300",
    "fecha": "1\/12\/2014 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "59",
    "DBO": 3,
    "NH4": "0,1",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 1,
    "DQO": 14,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,33",
    "SD": "196",
    "Ssed": "0,2",
    "SST": 12,
    "ST": "208",
    "SAAM": "0,1",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa5b"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 3",
    "nombre": "Parq Pinares",
    "lat": "9,91556700",
    "long": "-84,02009500",
    "fecha": "1\/12\/2014 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "67",
    "DBO": 3,
    "NH4": "0,1",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 1,
    "DQO": 21,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,39",
    "SD": "168",
    "Ssed": "0,2",
    "SST": 18,
    "ST": "186",
    "SAAM": "0,05",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa5c"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 4",
    "nombre": "Tacaco",
    "lat": "9,91719200",
    "long": "-84,02202200",
    "fecha": "1\/12\/2014 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "58,9",
    "DBO": 3,
    "NH4": "0,1",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 1,
    "DQO": 14,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,18",
    "SD": "196",
    "Ssed": "0,2",
    "SST": 6,
    "ST": "196",
    "SAAM": "0,09",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa5d"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 5",
    "nombre": "Hortifruti",
    "lat": "9,91589900",
    "long": "-84,02772700",
    "fecha": "1\/12\/2014 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "54,7",
    "DBO": 3,
    "NH4": "0,1",
    "pts PSO": 3,
    "pts DBO": 1,
    "pts NH4": 1,
    "I_Hol2": 5,
    "col2": "VERDE",
    "CF": 1,
    "DQO": 5,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,37",
    "SD": "180",
    "Ssed": "0,2",
    "SST": 12,
    "ST": "192",
    "SAAM": "0,05",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa5e"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 6",
    "nombre": "Montesacro",
    "lat": "9,92142200",
    "long": "-84,03678100",
    "fecha": "1\/12\/2014 00:00",
    "color": "Verde",
    "I-Hol": 5,
    "% O2": "62,1",
    "DBO": 4,
    "NH4": "0,1",
    "pts PSO": 3,
    "pts DBO": 2,
    "pts NH4": 1,
    "I_Hol2": 6,
    "col2": "VERDE",
    "CF": 1,
    "DQO": 14,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,34",
    "SD": "188",
    "Ssed": "0,2",
    "SST": 32,
    "ST": "220",
    "SAAM": "0,27",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa5f"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 7",
    "nombre": "Mallorca",
    "lat": "9,91733600",
    "long": "-84,03414900",
    "fecha": "1\/12\/2014 00:00",
    "color": "Amarillo",
    "I-Hol": 8,
    "% O2": "13,8",
    "DBO": 17,
    "NH4": "1,4",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 3,
    "I_Hol2": 13,
    "col2": "ROJO",
    "CF": 1,
    "DQO": 30,
    "EC": 1,
    "PO4": "ND",
    "GYA": "3",
    "pH": "7,19",
    "SD": "266",
    "Ssed": "0,5",
    "SST": 26,
    "ST": "292",
    "SAAM": "0,12",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa60"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 8",
    "nombre": "Lito Monge",
    "lat": "9,91588000",
    "long": "-84,03990700",
    "fecha": "1\/12\/2014 00:00",
    "color": "Anaranjado",
    "I-Hol": 11,
    "% O2": "10,4",
    "DBO": 39,
    "NH4": "0,3",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 1,
    "I_Hol2": 11,
    "col2": "ROJO",
    "CF": 1,
    "DQO": 200,
    "EC": 1,
    "PO4": "ND",
    "GYA": "13",
    "pH": "7,52",
    "SD": "176",
    "Ssed": "1",
    "SST": 64,
    "ST": "240",
    "SAAM": "0,12",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa61"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 9",
    "nombre": "Cascada Azul",
    "lat": "9,91381900",
    "long": "-84,05255300",
    "fecha": "1\/12\/2014 00:00",
    "color": "Anaranjado",
    "I-Hol": 11,
    "% O2": "10,9",
    "DBO": 29,
    "NH4": "0,1",
    "pts PSO": 5,
    "pts DBO": 5,
    "pts NH4": 1,
    "I_Hol2": 11,
    "col2": "ROJO",
    "CF": 1,
    "DQO": 52,
    "EC": 1,
    "PO4": "ND",
    "GYA": "3",
    "pH": "7,42",
    "SD": "220",
    "Ssed": "0,3",
    "SST": 20,
    "ST": "240",
    "SAAM": "1,7",
    "T": "ND",
    "Aforo": "ND"
  }, {
    "_id": {
      "$oid": "591f6597bc9ff4aa216aaa62"
    },
    "institucion": "Curridabat-Municipalidad",
    "email_colector": "josem.retana@curridabat.go.cr ",
    "kit": "otro",
    "estacion": "Estaci\u00f3n 10",
    "nombre": "Ranchito",
    "lat": "9,91386700",
    "long": "-84,05662000",
    "fecha": "1\/12\/2014 00:00",
    "color": "Verde",
    "I-Hol": 6,
    "% O2": "58,9",
    "DBO": 4,
    "NH4": "0,1",
    "pts PSO": 3,
    "pts DBO": 2,
    "pts NH4": 1,
    "I_Hol2": 6,
    "col2": "VERDE",
    "CF": 1,
    "DQO": 12,
    "EC": 1,
    "PO4": "ND",
    "GYA": "2",
    "pH": "7,45",
    "SD": "170",
    "Ssed": "0,2",
    "SST": 14,
    "ST": "184",
    "SAAM": "0,4",
    "T": "ND",
    "Aforo": "ND"
  }];

  function obtenerI_Hol(nombre) {
    var aux = [];
    for (var i = 0; i < arrayOfObjects.length; i++) {
      var object = arrayOfObjects[i];
      if (object.nombre == nombre) {
        aux.push(object["I-Hol"]);
      }
    }
    indices.push(aux);
  }

  //guardar en nombres todos los no repetidos y las fechas
  for (var i = 0; i < arrayOfObjects.length; i++) {
    var object = arrayOfObjects[i];
    if (!nombres.includes(object.nombre)) {
      nombres.push(object.nombre);
    }
    if (!fechas.includes(object.fecha)) {
      fechas.push(object.fecha);
    }
  }
  for (var i = 0; i < nombres.length; i++) {
    obtenerI_Hol(nombres[i]);
  }


  var data = {
    labels: fechas,
    datasets: [{
        label: nombres[0],
        // fillColor: "rgba(220,220,220,0.2)",
        // strokeColor: "rgba(220,220,220,1)",
        // pointColor: "rgba(220,220,220,1)",
        // pointStrokeColor: "#fff",
        // pointHighlightFill: "#fff",
        // pointHighlightStroke: "rgba(220,220,220,1)",
        backgroundColor: "rgba(255, 0, 0, 0.4)",
        data: indices[0]
      },
      {
        label: nombres[1],
        // fillColor: "rgba(151,187,205,0.2)",
        // strokeColor: "rgba(151,187,205,1)",
        // pointColor: "rgba(151,187,205,1)",
        // pointStrokeColor: "#fff",
        // pointHighlightFill: "#fff",
        // pointHighlightStroke: "rgba(151,187,205,1)",
        backgroundColor: "rgba(237, 180, 183,0.4)",
        data: indices[1]
      },
      {
        label: nombres[2],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(0, 255, 0, 0.4)",
        data: indices[2]
      },
      {
        label: nombres[3],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(0,0,255,0.4)",
        data: indices[3]
      },
      {
        label: nombres[4],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(154, 153, 194,0.4)",
        data: indices[4]
      },
      {
        label: nombres[5],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(188, 0, 190,0.4)",
        data: indices[5]
      },
      {
        label: nombres[6],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(1, 188, 190,0.4)",
        data: indices[6]
      },
      {
        label: nombres[7],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(219, 216, 0,0.4)",
        data: indices[7]
      },
      {
        label: nombres[8],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(254, 132, 10,0.4)",
        data: indices[8]
      },
      {
        label: nombres[9],
        // fillColor: "rgba(255,153,0,0.4)",
        // strokeColor: "rgba(255,153,0,0.4)",
        // pointColor: "rgba(255,153,0,0.4)",
        // pointStrokeColor: "#103",
        // pointHighlightFill: "#a12",
        // pointHighlightStroke: "rgba(255,153,0,0.4)",
        backgroundColor: "rgba(153,255,51,0.4)",
        data: indices[9]
      }
    ]
  };

  //alert(data.length);
  debugger;
  var myChart = new Chart(ctx, {
    type: 'line',
    data: data
  });


});
