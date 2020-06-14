const sendForm = document.querySelector('.input-form');
const textArea = document.querySelector('.text-area');

const socket = io();

socket.on('message', ({ text, date, id }) => {
  createMessage(text, date, id);
});

function createMessage(text, date, id) {
  let messageWrapper = document.createElement('div');
  let message = document.createElement('div');
  let dateContainer = document.createElement('div');
  let textContainer = document.createElement('div');
  let h3 = document.createElement('h3');
  let span = document.createElement('span');

  if (id === socket.id) {
    messageWrapper.className = 'text-area__message-wrapper flex-end';
    message.className = 'text-area__message right';
  } else {
    messageWrapper.className = 'text-area__message-wrapper flex-start';
    message.className = 'text-area__message left';
  }
  
  dateContainer.className = 'text-area__date-container';
  textContainer.className = 'text-area__text-container';

  h3.textContent = text;
  span.textContent = date;

  textContainer.appendChild(h3);
  dateContainer.appendChild(span);

  message.append(dateContainer, textContainer);
  messageWrapper.appendChild(message);

  textArea.appendChild(messageWrapper);
  textArea.scrollTop = textArea.scrollHeight;
}

sendForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { target } = e;

  const text = target.message.value;
  const date = moment(new Date()).format('LL');

  if (text.trim() === '') {
    return;
  }
  
  target.message.value = '';

  createMessage(text, date, socket.id);

  socket.emit('message', { text, date, id:socket.id });
});
