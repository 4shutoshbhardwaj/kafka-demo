const kafka = require('kafka-node');
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  const payloads = [
    { topic: 'test', messages: JSON.stringify({ name: 'Ash' }), partition: 0 }
  ];

  producer.send(payloads, (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Message sent successfully:', data);
    }
  });
});

producer.on('error', (err) => {
  console.log('Error:', err);
});
