/*
This function returns the technology used on the project according to the
backend
 */
export function getStack(listOfTechs = []) {
    /*
    1 React
    2 Js
    3 HTML
    4 CSS
    5 Python
    :)
     */
    let techs = listOfTechs.map((item) => {
        switch (item) {
            case 1:
                return 'react'
            
            case 2:
                return 'javascript'

            case 3:
                return 'html5'
            
            case 4:
                return 'css3'

            case 5:
                return 'python'

            case 6:
                return 'nodejs'

            case 7:
                return 'mongodb'

            case 8:
                return 'django'
        
            default:
                break;
        }
    })
    return techs
}