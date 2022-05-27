import { ProfessionalDetail } from "../application/models/ProfessionalDetailModels";
import BaseApi from "./BaseApi";

class ProfessionApi extends BaseApi {
  public async updateProfessionAsync(id: string, data: ProfessionalDetail) {
    return await this.patchAsync<ProfessionalDetail>(
      `professional-details/${id}`,
      {},
      data
    );
  }

  public async deleteProfessionAsync(id: string) {
    return await this.deleteAsync<ProfessionalDetail>(
      `professional-details/${id}`,
      {}
    );
  }
}

const instance = new ProfessionApi();

export default instance;
