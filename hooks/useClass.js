import React, { useState } from 'react'

export const useClass = (refForm) => {
    
    const [ Classes , setClasses] = useState( { nameClass: 'none', formAnim: '' } )

    const handleGoToForm = () => {
        setClasses( { ...Classes, formAnim: "form__box-moved" } );
        setTimeout(() => {
            refForm.current.scrollIntoView({
                behavior: "smooth",
              });
        }, 500);
    }

    return [ Classes, setClasses, handleGoToForm ];

}
