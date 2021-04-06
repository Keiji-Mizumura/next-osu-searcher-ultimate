const Mods = (value = 60) => {

    const modArray = []
    
    const mods = [
        0,
        1,
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
        512, // Only set along with DoubleTime. i.e: NC only gives 576
        1024,
        2048,
        4096,
        8192,    // Autopilot
        16384, // Only set along with SuddenDeath. i.e: PF only gives 16416  
        32768,
        65536,
        131072,
        262144,
        524288,
        1048576,
        2097152,
        4194304,
        8388608,
        16777216,
        33554432,
        67108864,
        134217728,
        268435456,
        536870912,
        1073741824
    ]

    const numToWord = {
        "1" : "NoFail",
        "2" : "Easy",
        "4" : "TouchDevice",
        "8" : "Hidden",
        "16" : "HardRock",
        "32" : "SuddenDeath",
        "64" : "DoubleTime",
        "128" : "Relax",
        "256" : "Halftime",
        "512" : "Nightcore",
        "1024" : "Flashlight"
    }

    for(let i = mods.length; i >= 0; i--){
        if(value >= mods[i]){
            if(value >= 576 && value <= 600){
                value = value - 576
            }
            else{
                value = value - mods[i]
            }
            if(mods[i] !== 0)
                modArray.push(mods[i])
        }
    }

    return modArray.map(item => numToWord["" + item]).reverse()
}

export default Mods