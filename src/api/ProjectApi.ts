import { ProjectDetail } from "../application/models/ProjectDetailModels";
import BaseApi from "./BaseApi";

class Project extends BaseApi {
  public async updateProjectAsync(id: string, data: ProjectDetail) {
    return await this.patchAsync<ProjectDetail>(
      `project-details/${id}`,
      {},
      data
    );
  }

  public async deleteProjectAsync(id: string) {
    return await this.deleteAsync<ProjectDetail>(`project-details/${id}`, {});
  }
}

const instance = new Project();

export default instance;
