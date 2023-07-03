class Person {
  constructor(network) {
    this.network = network;
    this.messages = [];
  }

  moveTo(distance) {
    // Implementation for the moveTo method
  }

  shout(message) {
    this.network.broadcast(message); // Broadcast the message through the network
  }

  hear(message) {
    this.messages.push(message);
  }

  messagesHeard() {
    return this.messages;
  }

  receive(message) {
    this.hear(message);
  }
}

class Network {
  constructor() {
    this.messages = [];
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  broadcast(message) {
    this.subscribers.forEach(subscriber => subscriber.receive(message)); // Call receive() method for each subscriber
  }
}
module.exports = {Person, Network}
