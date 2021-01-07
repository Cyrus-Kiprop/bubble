import emailjs from 'emailjs-com';
import { message } from 'antd';

const key = 'updatable';

export const messageStatus = (content) => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content, key, duration: 2 });
  }, 1000);
};

export const sendFeedback = (templateId, variables) => {
  const result = Promise.resolve(
    emailjs.send(
      'lakefire',
      'template_v3s8gqx',
      variables,
      'user_6d4qD668qOXeuT0IZqzRz'
    )
  );
  return result;
};
