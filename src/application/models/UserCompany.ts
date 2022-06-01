import { UserAddress } from "./UserAddress";

export default interface UserCompany{
    name?:string;
    description?:string;
    address?:UserAddress;
}