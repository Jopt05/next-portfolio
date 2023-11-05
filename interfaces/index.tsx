export interface ITech {
    id?: string;
    tech_name: string;
}

export interface IWork {
    project_tecnologies: ITech[],
    project_state: boolean;
    _id: string;
    project_name: string;
    project_description: string;
    project_topic: boolean;
    project_url: string;
    _v: number;
}

export interface IProyect {
    project_tecnologies: ITech[];
    project_state: boolean;
    _id?: string;
    project_name: string;
    project_description: string;
    project_topic: boolean;
    project_url: string;
    __v?: number;
}

export interface IService {
    service_state: boolean;
    _id?: string;
    service_name: string;
    service_description: string;
    service_topic: number;
    service_image: string;
    __v?: number;
}

export interface ISetClass {
    nameClass: string;
    formAnim: string;
}

export interface ISchema {
    [key: string]: {
        label: string;
        tipo: string;
        [extrafield: string]: any;
    }
}

export type IWorkingElement = IProyect | IService | ITech | null;

export interface ICreateContext {
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    isCreating: boolean;
    setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
    workingElement: IWorkingElement;
    setWorkingElement: React.Dispatch<React.SetStateAction<IWorkingElement>>;
    schema: ISchema | null;
    setSchema: React.Dispatch<React.SetStateAction<ISchema | null>>;
    technologies: ITech[]
}