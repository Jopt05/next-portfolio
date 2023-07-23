/*
This function returns the kind of software
 */
export function getTopic(integer) {
    // 0 - Game - bxs-game
    // 1 - Code - bx-code-alt
    // 2 - Web - bx-desktop
    // 3 - API - bxs-cloud-download
    switch (integer) {
        case 0:
            return 'bxs-game'
        
        case 1:
            return 'bx-code-alt'

        case 2:
            return 'bx-desktop'
        
        case 3:
            return 'bxs-cloud-download'
    
        default:
            break;
    }
}