//basic interface to help type the json data.
export interface Person {
    status: string,
    updated: string, 
    name: string, 
    phone: string, 
    url:string, 
    created:string, 
    net_id:number, 
    role: string,
    id: number,
    birthday: string,
    department: string,
    title: string,
    slack: string,
    image: string,
    address: [{email:string, visible:string}]
};

