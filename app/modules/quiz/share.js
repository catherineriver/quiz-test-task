function popupWindow(url, title) {
  const left = window.screen.width / 2 - 480 / 2;
  const top = window.screen.height / 2 - 320 / 2;
  const options = [
    'toolbar=no',
    'location=no',
    'directories=no',
    'status=no',
    'menubar=no',
    'scrollbars=no',
    'resizable=no',
    'copyhistory=no',
    'width=480',
    'height=320',
    `top=${top}`,
    `left=${left}`,
  ];

  return window.open(url, title, options.join(', '));
}

export default popupWindow;