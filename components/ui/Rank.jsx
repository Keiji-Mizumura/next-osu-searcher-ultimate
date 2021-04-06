const styles = {
    height: '25px',
}

const Rank = ({rank}) => {
    switch(rank){
        case 'S':
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-S.3b4498a9.svg' alt='S'/>
            break;
        case 'SS':
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-SS.a21de890.svg' alt='SS'/>
            break;
        case 'SH':
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-S-Silver.811ae28c.svg' alt='SH'/>
            break;
        case 'SSH':
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-SS-Silver.6681366c.svg' alt='SSH'/>
            break;  
        case 'A':
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-A.d785e824.svg' alt='A'/>
            break;
        case 'B':
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-B.e19fc91b.svg' alt='B'/>
            break;
        case 'C':
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-C.6bb75adc.svg' alt='C'/>
            break;
        default: 
            return <img style={styles} src='https://osu.ppy.sh/assets/images/GradeSmall-S.3b4498a9.svg' alt='S'/>
    }
}

export default Rank