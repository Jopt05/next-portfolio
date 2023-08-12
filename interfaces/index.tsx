export interface ITech {
    id: string;
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

export interface IService {
    service_state: boolean;
    _id: string;
    service_name: string;
    service_description: string;
    service_topic: number;
    service_image: string;
    __v: number;
}

export interface ISetClass {
    nameClass: string;
    formAnim: string;
}