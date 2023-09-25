const fallbackCopyTextToClipboard = (text: string) => {
  let response = {};
  const textArea = document.createElement('textarea');
  textArea.value = text;

  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    response = document.execCommand('copy');
  } catch (err: any) {
    throw new Error(err);
  }

  document.body.removeChild(textArea);
  return response;
};

export const copyTextToClipboard = (text?: string) => {
  if (text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    return navigator.clipboard.writeText(text);
  }
  return;
};
