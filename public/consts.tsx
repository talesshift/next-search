export const breakpoints = new Map<string, string>(
    [
        ['s',`@media (max-width: 601px)`],
        ['m',`@media (min-width: 601px)`],
        ['l',`@media (min-width: 993px)`],
        ['xl',`@media (min-width: 1201px)`]
    ]  
)

export const colors = new Map<string, string>(
    [
        ['blue',` #3478B7`],
        ['green',` #1B975B`],
        ['pink',` #EF5DA8`],
        ['purple',` #462F87`],
        ['gold',` #C5A44F`],
        ['red',` #AB3D55`],
        ['black',` #373F41`],
        ['grey',` #c4c4c4`],
        ['white',` #fbfbfb`],
    ]
)

export const container = `
    max-width: 74.1875rem;
    width: 95%;
    margin-left:auto;
    margin-right:auto;
`