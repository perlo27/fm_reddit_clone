type Item = {
  title: string;
  ID: string;
};

const items: Item[] = [{ title: 'Item1', ID: 'we' }];

export default {
  Query: {
    items: () => items
  }
};
