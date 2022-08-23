import '../css/popup.css';
import hello, { regEvents } from './popup/example';
import registe_socket_events, { handleSubmitNewMsg } from './popup/task-socket';

hello();
regEvents();
registe_socket_events();
