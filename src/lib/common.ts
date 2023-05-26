// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadJS = (src: string, attr?: { [key: string]: any }) => {
    return new Promise((resolve, reject) => {
      const tag = document.createElement('script');
      tag.setAttribute('src', src);
      tag.setAttribute('type', 'text/javascript');
      if (attr) {
        for (const key in attr) {
          tag.setAttribute(key, attr[key]);
        }
      }
      tag.onload = resolve;
  
      tag.onerror = reject;
  
      document.head.appendChild(tag);
    });
  };