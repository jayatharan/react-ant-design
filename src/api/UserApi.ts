import { Educational } from "../application/models/EducationModels";
import {
  CreateUser,
  UpdateUser,
  User,
  UserDetails,
} from "../application/models/UserModels";
import BaseApi from "./BaseApi";

class UserApi extends BaseApi {
  public async createUserAsync(data: CreateUser) {
    return await this.postAsync<User>("users", {}, data);
  }

  public async getUserDetails() {
    return await this.getAsync<UserDetails>("users", {});
  }

  public async updateUserAsync(data: UpdateUser) {
    return await this.patchAsync<User>("users", {}, data);
  }

  public async addEducationAsync(data: Educational) {
    return await this.postAsync<Educational>(
      "users/educational-detail",
      {},
      data
    );
  }
}

const instance = new UserApi();

export default instance;
