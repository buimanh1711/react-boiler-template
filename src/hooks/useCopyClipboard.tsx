import { copyToClipboard } from '@/utils';
import { notification } from 'antd';

const useCopyClipboard = () => {
  return (text: string, message?: string, callback?: () => any) => {
    copyToClipboard(text);
    notification.success({
      message: 'Success',
      description: message || 'Copied to clipboard',
      placement: 'topRight',
      duration: 2,
    });
  };
};

export default useCopyClipboard;
