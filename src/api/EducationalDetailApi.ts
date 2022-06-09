import { Educational } from "../application/models/EducationModels";
import BaseApi from "./BaseApi";

class EducationalDetailApi extends BaseApi {

    public async updateEducationalDetailAsync(id:string, data: Educational){
        return await this.patchAsync<Educational>(`educational-details/${id}`, {}, data);
    }

}

const instance = new EducationalDetailApi();

export default instance;