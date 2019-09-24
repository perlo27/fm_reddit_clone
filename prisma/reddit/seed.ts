import { Photon } from '@generated/photon';

const photon = new Photon();

async function main() {
  // Seed the database with couple of items
  const item1 = await photon.items.create({
    data: {
      title: 'Title 1 of  item'
    }
  });
  const item2 = await photon.items.create({
    data: {
      title: 'Title of  item 222'
    }
  });

  console.log(`Created users: ${item1.title}  and (${item2.title}) `);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
