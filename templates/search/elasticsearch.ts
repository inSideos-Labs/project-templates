import { Client } from '@elastic/elasticsearch';
const client = new Client({ node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200' });
export async function search(index: string, query: string) {
  return client.search({ index, body: { query: { match: { _all: query } } } });
}