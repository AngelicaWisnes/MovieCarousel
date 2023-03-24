
export const tShapeAlgorithm = () => {
    // To run the T-shape algorithm, uncomment the following line
    //for (let i = 0; i < 16; i++) printT(i);        
}

const printT = (numberOfT: number) => {
    if (numberOfT < 3 || numberOfT % 2 === 0) return console.log('Number must be odd, and more than 3');
    
    const T = 'T '

    const t_top = T.repeat(numberOfT)
    const t_bottom = '\n' + ' '.repeat(numberOfT - 1) + T 

    console.log(t_top + t_bottom.repeat(numberOfT - 1));
}