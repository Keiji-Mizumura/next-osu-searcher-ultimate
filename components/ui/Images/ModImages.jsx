const ModImages = (mods) => {
    switch(mods){
        case "NoFail":
            return <img src="https://osu.ppy.sh/assets/images/mod_no-fail.ca1a6374.png" alt="NoFail" />
        break;
        case "Easy":
            return <img src="https://osu.ppy.sh/assets/images/mod_easy.076c7e8c.png" alt="Easy" />
        break;
        case "TouchDevice":
            return <img src="https://osu.ppy.sh/assets/images/mod_touchdevice.e5fa4271.png" alt="TouchDevice" />
        break;
        case "Hidden":
            return <img src="https://osu.ppy.sh/assets/images/mod_hidden.cfc32448.png" alt="Hidden" />
        break;
        case "HardRock":
            return <img src="https://osu.ppy.sh/assets/images/mod_hard-rock.52c35a3a.png" alt="HardRock" />
        break;
        case "SuddenDeath":
            return <img src="https://osu.ppy.sh/assets/images/mod_sudden-death.d0df65c7.png" alt="SuddenDeath" />
        break;
        case "DoubleTime":
            return <img src="https://osu.ppy.sh/assets/images/mod_double-time.348a64d3.png" alt="DoubleTime" />
        break;
        case "Relax":
            return <img src="" alt="Relax" />
        break;
        case "Halftime":
            return <img src="https://osu.ppy.sh/assets/images/mod_half.3e707fd4.png" alt="Halftime" />
        break;
        case "Nightcore":
            return <img src="https://osu.ppy.sh/assets/images/mod_nightcore.240c22f2.png" alt="Nightcore" />
        break;
        case "Flashlight":
            return <img src="https://osu.ppy.sh/assets/images/mod_flashlight.be8ff220.png" alt="Flashlight" />
        break;
        default :
            return <></>
            break;
    }
}

export default ModImages