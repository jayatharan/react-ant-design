import { CreateUser, User } from "../application/models/UserModels";
import BaseApi from "./BaseApi";

class UserApi extends BaseApi {

    public async createUserAsync(data: CreateUser) {
        return await this.postAsync<User>("user", {}, data)
    }

}

const instance = new UserApi();

export default instance;