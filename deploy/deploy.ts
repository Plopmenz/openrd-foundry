import { Address, Deployer } from "../web3webdeploy/types";

export interface TasksDeploymentSettings {}

export interface TasksDeployment {
  tasks: Address;
}

export async function deploy(
  deployer: Deployer,
  settings?: TasksDeploymentSettings
): Promise<TasksDeployment> {
  const tasks = await deployer.deploy({
    id: "Tasks",
    contract: "Tasks",
    args: ["0x2309762aAcA0a8F689463a42c0A6A84BE3A7ea51"],
  });
  return {
    tasks: tasks,
  };
}
