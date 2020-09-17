export const requestSuccessAPI = <T>(mockData: T) => {
  return new Promise<T>((resolve) => {
    resolve(mockData);
  });
};

export const requestErrorAPI = (errorMessage: string) => {
  return new Promise((resolve, reject) => {
    reject(errorMessage);
  });
};
