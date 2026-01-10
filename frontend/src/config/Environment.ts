import EnvironmentTypes from "../enum/EnvironmentTypes";
import Constants from "./Constants";

const Environment = {
    Type: EnvironmentTypes.DEVELOPMENT,
    backendUrl: EnvironmentTypes.DEVELOPMENT ? Constants.apiEndpoints.localUrl : ""
}

export default Environment;