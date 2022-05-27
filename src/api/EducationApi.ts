import { EducationalDetail } from "../application/models/EducationDetailModels";
import BaseApi from "./BaseApi";

class EducationApi extends BaseApi {
  public async updateEducationAsync(id: string, data: EducationalDetail) {
    return await this.patchAsync<EducationalDetail>(
      `educational-details/${id}`,
      {},
      data
    );
  }

  public async deleteEducationAsync(id: string) {
    return await this.deleteAsync<EducationalDetail>(
      `educational-details/${id}`,
      {}
    );
  }
}

const instance = new EducationApi();

export default instance;
