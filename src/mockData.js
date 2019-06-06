export let data = [];

export const createMock = () => {
    _.times(200, () => {
      data.push({
        id: _.uniqueId(),
        value: "test"
      });
    });
};