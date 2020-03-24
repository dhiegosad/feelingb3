import kafka, {
  KafkaClient as Client,
  Consumer,
  OffsetFetchRequest,
  ConsumerOptions,
  Offset,
} from 'kafka-node';
import googleNL from '../services/googleNL';
import { Tweet } from '../models/Tweet';

class KafkaConsumer {
  private client: Client;
  private topics: OffsetFetchRequest[];
  private options: ConsumerOptions;
  private kafkaHost: string = process.env.KAFKA_SERVER;
  public consumer: Consumer;
  public offset: Offset;
  public KAFKA_TOPIC_NAME: string = process.env.KAFKA_TOPIC;

  constructor() {
    this.client = new Client({ kafkaHost: this.kafkaHost });
    this.topics = [{ topic: this.KAFKA_TOPIC_NAME, partition: 0 }];
    this.options = {
      autoCommit: false,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
    };

    this.consumer = new Consumer(this.client, this.topics, this.options);
    this.offset = new Offset(this.client);

    this.consumer.on('message', function(message: any): void {
      if (message) {
        const msg: Tweet = JSON.parse(message.value);
        googleNL.analize(msg);
      }
    });

    this.consumer.on('error', function(err: Error): void {
      console.log('error', err);
    });

    this.consumer.on('offsetOutOfRange', (topic: OffsetFetchRequest): void => {
      this.offset.fetch([topic], (err, offsets): void => {
        if (err) {
          return console.error(err);
        }
        const min = Math.min.apply(null, offsets[topic.topic][topic.partition]);
        this.consumer.setOffset(topic.topic, topic.partition, min);
      });
    });
  }
}

export default KafkaConsumer;
