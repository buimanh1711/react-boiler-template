export const convertNumberToShortText = (number: number, fixed: number = 2) => {
  if (number < 1e3) return number;
  if (number >= 1e3 && number < 1e6)
    return +(number / 1e3).toFixed(fixed) + 'K';
  if (number >= 1e6 && number < 1e9)
    return +(number / 1e6).toFixed(fixed) + 'M';
  if (number >= 1e9 && number < 1e12)
    return +(number / 1e9).toFixed(fixed) + 'B';
  if (number >= 1e12) return +(number / 1e12).toFixed(fixed) + 'T';
};

export const formatNumberWithCommas = (
  number: number | string,
  fixed: number = 2
) => {
  if (number && number !== 'null' && number !== 'undefined') {
    number = Number(number).toFixed(fixed);
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return 0;
  }
};

export const copyToClipboard = (text: string) => {
  if (!text) return;

  var textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
};

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const scrollTo = (pos: number = 0): void => {
  window.scrollTo(0, pos);
};

