import React, { Dispatch, MouseEventHandler, RefObject, SetStateAction, useState } from 'react'
import { ISetClass } from '../interfaces';

export const useClass = (refForm: RefObject<HTMLFormElement>) => {
    
    const [ Classes , setClasses] = useState<ISetClass>( { nameClass: 'none', formAnim: '' } );

    const handleGoToForm = () => {
        setClasses( { ...Classes, formAnim: "form__box-moved" } );
        setTimeout(() => {
            if (refForm.current == null) return;
            refForm.current.scrollIntoView({
                behavior: "smooth",
              });
        }, 500);
    }

    return [ Classes, setClasses, handleGoToForm ] as const;

}
