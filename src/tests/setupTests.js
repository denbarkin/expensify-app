import Enyzme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
// Load env varaibles for testing. Changes DB to Test Firebase DB.
require('dotenv').config({ path: '.env.test' })

Enyzme.configure({
    adapter : new Adaptor()
})