import http from 'k6/http';
import { sleep } from 'k6';

// export let options = {
//   stages: [
//     {duration: '30s', target: 1000}
//   ]
// }

export default function() {
  http.get('http://localhost:8000/reviews/meta');
  sleep(1);
}

