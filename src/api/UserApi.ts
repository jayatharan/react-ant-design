import { CreateUser, User, UserDetails } from "../application/models/UserModels";
import BaseApi from "./BaseApi";

class UserApi extends BaseApi {

    public async createUserAsync(data: CreateUser) {
        return await this.postAsync<User>("users", {}, data)
    }

    public async getUserDetails() {
        return await this.getAsync<UserDetails>("users",{});
    }
}

const instance = new UserApi();

export default instance;