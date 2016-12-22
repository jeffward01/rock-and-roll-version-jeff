import { Factory } from 'ember-cli-mirage';
import { faker } from 'ember-cli-mirage';

export default Factory.extend({
 firstName: 'Albert',
 phoneNumber:'1-555-555-5555',
 emailAddress: 'testEmail@example.com',
 message: 'This is my message.  How are you doing',
});
