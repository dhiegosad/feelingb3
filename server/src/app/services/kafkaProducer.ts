import 'dotenv/config';

import kafka, {
  KafkaClient as Client,
  Producer,
  ProduceRequest,
} from 'kafka-node';

export interface KafkaProducerRequest {
  topic: string;
  messages: any;
}

class KafkaProducer {
  private client: Client;
  private kafkaHost: string = process.env.KAFKA_SERVER;
  public producer: Producer;
  public KAFKA_TOPIC_NAME: string = process.env.KAFKA_TOPIC;

  constructor() {
    this.client = new Client({ kafkaHost: this.kafkaHost });
    this.producer = new Producer(this.client);
  }

  publish = (data: KafkaProducerRequest) => {
    this.producer.send(
      [{ topic: data.topic, messages: data.messages }],
      (err: Error, result: ProduceRequest): void => {
        console.log(err || result);
      }
    );
  };
}

export default new KafkaProducer();
