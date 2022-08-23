// https://socket.io/docs/v4/client-api/
import { io } from 'socket.io-client';

const socket = io('http://localhost:8088');
socket.on('message', ({ data }) => {
  handleNewMessage(data);
});

export default function registe_socket_events() {}

export function handleSubmitNewMsg() {
  const message = document.getElementById('message').value.trim();

  if (message.length > 0) {
    socket.emit('message', { data: message });
  }
}

const buildNewMessage = (message) => {
  const liEle = document.createElement('li');
  liEle.appendChild(document.createTextNode(message));

  return liEle;
};

const handleNewMessage = (message) => {
  const messages_DOM = document.getElementById('messages');
  messages_DOM.appendChild(buildNewMessage(message));
};
