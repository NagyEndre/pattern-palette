// Client code of Strategy pattern
const cloud = new CloudStorage();
const local = new LocalStorage();
const client = new Client();

client.setStrategy(cloud);
client.save("secret");
client.setStrategy(local);
client.save("secret");
