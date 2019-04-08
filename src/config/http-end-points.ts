export const URLs: Object = {
  "authentication": {
    "authenticate": {
      "url": "token"
    }
  },
  "projects": {
    "fetchProjectsByUserName": {
      "url": "api/Project/GetLoadingProjects?userName="
    },
    "fetchResources": {
      "url": "api/Project/LoadResources"
    },
    "getUserProjects": {
      "url": "api/Project/GetUserProjects"
    },
    "fetchOnGoingProjects": {
      "url": "api/Project/GetOngoingTasks"
    },
    "fetchBacklogProjects": {
      "url": "api/Project/GetBackLogTasks"
    },
    
  }
};
