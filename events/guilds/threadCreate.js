module.exports = {
  name: "threadCreate",
  once: false,
  async execute(client, thread) {
    if (thread.isText()) thread.join();
    const logchannel = client.channels.cache.get("927634197126987846");
    logchannel.send(`Nom du thread : ${thread.name}`);
  },
};
