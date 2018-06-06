export const WAVE_FORMS = {
    NSR: "Normal Sinus Rhythm", 
    VTC: "Ventricular Tachycardia",
    VTF: "Ventricular Fibrillation",
    PEA: "PEA/Asystole", 
    CIP: "Compressions In-Progress"
};

export const BLOOD_PRESSURE_LEVELS = 
                ["62/40", "68/42", "76/46" , "88/50", "92/52", "98/54", "102/56",
                 "108/58", "112/60", "120/78", "134/82", "144/88", "164/96",
                 "192/98", "242/112", "284/122"];

export const NSR_VALUES = {
    HEART_RATE: 80,
    O2_SAT: 96,
    BP: BLOOD_PRESSURE_LEVELS.indexOf("120/78"),
    ET_CO2: 40
};